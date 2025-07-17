
ServerEvents.recipes(ScaleCraft => {
    ScaleCraft.shaped(
        `8x minecraft:item_frame[entity_data={Invisible:1b,id:"minecraft:item_frame"},custom_name='"Invisible Item Frame"']`,
        [
            'iii',
            'ipi', 
            'iii'
        ], 
        {
            i: 'minecraft:item_frame', 
            p: 'minecraft:potion[potion_contents={potion:"minecraft:invisibility"}]'
        }
    )

    ScaleCraft.shaped(
        `8x minecraft:glow_item_frame[entity_data={Invisible:1b,id:"minecraft:item_frame"},custom_name='"Invisible Glow Item Frame"']`,
        [
            'iii',
            'ipi', 
            'iii'
        ], 
        {
            i: 'minecraft:glow_item_frame', 
            p: 'minecraft:potion[potion_contents={potion:"minecraft:invisibility"}]'
        }
    )

    // Concrete from Concrete Powder using Water Buckets
    const colors = [
        'white', 'yellow', 'orange', 'red', 'pink', 'magenta', 'purple', 'light_blue', 'cyan', 'blue', 'lime', 'green', 'brown', 'light_gray', 'gray', 'black'
    ];

    colors.forEach(color => {
        ScaleCraft.shaped(
            Item.of(`minecraft:${color}_concrete`, 8),
            ['CCC','CBC','CCC'],
            {
                C: `minecraft:${color}_concrete_powder`,
                B: 'minecraft:water_bucket'
            }
        )
    });

    // Remove Raw Redstone Block Recipe
    ScaleCraft.remove({id: 'regions_unexplored:raw_redstone_block'});

    // Dense Uraninite Ore Energizing Recipes
    ScaleCraft.remove({ id: 'powah:energizing/uraninite_from_ore' })
    ScaleCraft.custom({
        "type": "powah:energizing",
        "energy": 50000,
        "ingredients": [
             {
                 "tag": "c:ores/uraninite_regular"
             }
         ],
        "result": {
            "count": 5,
            "id": "powah:uraninite"
        }
    }).id('powah:energizing/uraninite_from_ore')

    ScaleCraft.shapeless(
        Item.of('minecraft:potion[potion_contents={potion:"minecraft:water"}]', 1),
        [
            'minecraft:glass_bottle',
            'mysticalagriculture:water_essence'
        ]
    )

    ScaleCraft.shapeless(
        Item.of('minecraft:honey_block'),
        [
            '9x mysticalagriculture:honey_essence'
        ]
    )
    ScaleCraft.shaped("minecraft:crafting_table", ['XX','XX'], {X: "#minecraft:planks"}).id("minecraft:crafting_table")

    ScaleCraft.shapeless(
        Item.of('minecraft:crafting_table'),
        [
            '#c:player_workstations/crafting_tables'
        ]
    )

})