
ServerEvents.recipes(ScaleCraft => {
    // Tools
    ScaleCraft.remove({ id: 'mekanismtools:steel/tools/sword'})
    ScaleCraft.remove({ id: 'immersiveengineering:crafting/sword_steel'})
    ScaleCraft.remove({ id: 'mekanismtools:steel/tools/pickaxe'})
    ScaleCraft.remove({ id: 'immersiveengineering:crafting/pickaxe_steel'})
    ScaleCraft.remove({ id: 'mekanismtools:steel/tools/axe'})
    ScaleCraft.remove({ id: 'immersiveengineering:crafting/axe_steel'})
    ScaleCraft.remove({ id: 'mekanismtools:steel/tools/shovel'})
    ScaleCraft.remove({ id: 'immersiveengineering:crafting/shovel_steel'})
    ScaleCraft.remove({ id: 'mekanismtools:steel/tools/hoe'})
    ScaleCraft.remove({ id: 'immersiveengineering:crafting/hoe_steel'})
    ScaleCraft.remove({ id: 'mekanismtools:steel/tools/paxel'})

    ScaleCraft.shaped('mekanismtools:steel_sword', [' S ', ' S ', ' R '], {
        S: '#c:ingots/steel',
        R: '#c:rods/wooden'
    }).id('scalecraft:mekanismtools/steel_sword')
    ScaleCraft.shaped('mekanismtools:steel_pickaxe', ['SSS', ' R ', ' R '], {
        S: '#c:ingots/steel',
        R: '#c:rods/wooden'
    }).id('scalecraft:mekanismtools/steel_pickaxe')
    ScaleCraft.shaped('mekanismtools:steel_axe', ['SS ', 'SR ', ' R '], {
        S: '#c:ingots/steel',
        R: '#c:rods/wooden'
    }).id('scalecraft:mekanismtools/steel_axe')
    ScaleCraft.shaped('mekanismtools:steel_shovel', [' S ', ' R ', ' R '], {
        S: '#c:ingots/steel',
        R: '#c:rods/wooden'
    }).id('scalecraft:mekanismtools/steel_shovel')
    ScaleCraft.shaped('mekanismtools:steel_hoe', ['SS ', ' R ', ' R '], {
        S: '#c:ingots/steel',
        R: '#c:rods/wooden'
    }).id('scalecraft:mekanismtools/steel_hoe')
    ScaleCraft.shaped('mekanismtools:steel_paxel', ['APS', ' R ', ' R '], {
        A: 'mekanismtools:steel_axe',
        P: 'mekanismtools:steel_pickaxe',
        S: 'mekanismtools:steel_shovel',
        R: '#c:rods/wooden'
    }).id('scalecraft:mekanismtools/steel_paxel')

    // Armor
    ScaleCraft.remove({ id: 'immersiveengineering:crafting/armor_steel_helmet'})
    ScaleCraft.remove({ id: 'immersiveengineering:crafting/armor_steel_chestplate'})
    ScaleCraft.remove({ id: 'immersiveengineering:crafting/armor_steel_leggings'})
    ScaleCraft.remove({ id: 'immersiveengineering:crafting/armor_steel_boots'})


    // Shields
    ScaleCraft.remove({ id: 'twilightforest:equipment/knightmetal_shield'})

    ScaleCraft.shaped('twilightforest:knightmetal_shield', ['KSK', 'KKK', ' K '], {
        S: 'minecraft:shield',
        K: '#c:ingots/knightmetal'
    }).id('scalecraft:twilightforest/knightmetal_shield')
})