
ServerEvents.recipes(ScaleCraft => {

    ScaleCraft.remove({ id: 'modern_industrialization:materials/aluminum/craft/gear'})
    ScaleCraft.remove({ id: 'modern_industrialization:materials/tin/craft/gear'})
    ScaleCraft.remove({ id: 'modern_industrialization:materials/steel/craft/gear'})
    ScaleCraft.remove({ id: 'modern_industrialization:materials/invar/craft/gear'})
    ScaleCraft.remove({ id: 'modern_industrialization:materials/bronze/craft/gear'})
    ScaleCraft.remove({ id: 'modern_industrialization:materials/iron/craft/gear'})
    ScaleCraft.remove({ id: 'modern_industrialization:materials/copper/craft/gear'})
    ScaleCraft.remove({ id: 'modern_industrialization:materials/gold/craft/gear'})
    ScaleCraft.remove({ id: 'industrialforegoing:iron_gear'})
    ScaleCraft.remove({ id: 'industrialforegoing:gold_gear'})
    ScaleCraft.remove({ id: 'industrialforegoing:diamond_gear'})
    ScaleCraft.remove({ id: 'enderio:iron_gear'})
    ScaleCraft.remove({ id: 'enderio:wood_gear_corner'})
    ScaleCraft.remove({ id: 'pneumaticcraft:compressed_iron_gear'})

    ScaleCraft.shaped('pneumaticcraft:compressed_iron_gear', [' C ', 'CNC', ' C '], {
        C: 'pneumaticcraft:ingot_iron_compressed',
        N: 'minecraft:iron_nugget'
    }).id('scalecraft:pneumaticcraft/compressed_iron_gear')

})