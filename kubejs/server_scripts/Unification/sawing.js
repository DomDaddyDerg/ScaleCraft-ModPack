
ServerEvents.tags('item', ScaleCraft => {
    //regions_unexplored
    ScaleCraft.add('regions_unexplored:magnolia_logs', [
        'regions_unexplored:magnolia_log',
        'regions_unexplored:stripped_magnolia_log',
        'regions_unexplored:magnolia_wood',
        'regions_unexplored:stripped_magnolia_wood',
    ])
    ScaleCraft.add('regions_unexplored:alpha_logs', [
        'regions_unexplored:alpha_log'
    ])
    ScaleCraft.add('regions_unexplored:silver_birch_logs', [
        'regions_unexplored:silver_birch_log',
        'regions_unexplored:silver_birch_wood',
    ])


    // completing #minecraft:logs
    ScaleCraft.add('minecraft:logs', [
        '#integrateddynamics:menril_logs',
        '#deeperdarker:bloom_stems',
        "#deeperdarker:echo_logs",
        "#evilcraft:undead_logs",
        "aquaculture:driftwood",
    ])
})

const $Collectors = Java.loadClass('java.util.stream.Collectors')

ServerEvents.recipes(ScaleCraft => {
    let logsTag = Ingredient.of("#minecraft:logs")

    /** @type {$HashMap_<string, $UnknownKubeRecipe_>}} */
    let prodSawmillRecipes = ScaleCraft.findRecipes({type: "productivetrees:sawmill"}).stream().collect($Collectors.toMap(r => r.json.asMap().output.get("id").asString, r => r))
    /** @type {$HashMap_<string, $UnknownKubeRecipe_>}} */
    let mekSawmillRecipes = ScaleCraft.findRecipes({type: "mekanism:sawing"}).stream().filter(r => r.json.asMap().main_output != undefined && logsTag["matches(net.minecraft.world.item.crafting.Ingredient,boolean)"](Ingredient.of(r.json.asMap().input.has("ingredient") ? r.json.asMap().input.get("ingredient") : r.json.asMap().input), false)).collect($Collectors.toMap(r => r.json.asMap().main_output.get("id").asString, r => r))
    
    function mekSawing(output, input, extraOutput, id) {
        if (mekSawmillRecipes.containsKey(output.id)) {
            // console.info("Already exists a mek recipe for " + output.id)
            return
        }
        let recipe = {
            "type": "mekanism:sawing",
            "input": input,
            "main_output": output,
            "secondary_chance": extraOutput.chance,
            "secondary_output": Item.of(extraOutput.item)
        };

        ScaleCraft.custom(recipe).id(`scalecraft:mekanism/sawing/${id}`);
    }

    function prodSawing(log, planks, secondary, id) {
        if (prodSawmillRecipes.containsKey(planks.id)) {
            // console.info("Already exists a prod tree recipe for " + planks.id)
            return
        }
        ScaleCraft.custom({
            "type": "productivetrees:sawmill",
            "input": log,
            "output": planks,
            "secondary": secondary
        }).id(`scalecraft:productivetrees/sawing/${id}`);
    }

    ScaleCraft.forEachRecipe({type: "minecraft:crafting_shapeless", output: "#minecraft:planks"}, recipe => {
        /** @type {$Ingredient_} */
        let firstIngredient = recipe.get("ingredients").getFirst()
        /** @type {$ItemStackKJS_} */
        let output = recipe.get("result")
        if (!logsTag["matches(net.minecraft.world.item.crafting.Ingredient,boolean)"](firstIngredient, false)){
            console.info("Ingredient is not a log tag: " + Ingredient.of(firstIngredient).toJson())
            return
        }
        
        mekSawing(output.withCount(6), firstIngredient, {chance: 0.25, item: "mekanism:sawdust"}, recipe.getId().split(":")[0] + "/" + recipe.getId().split(":")[1])
        prodSawing(firstIngredient, output.withCount(6), Item.of("2x productivetrees:sawdust"), recipe.getId().split(":")[0] + "/" + recipe.getId().split(":")[1])
    })
})