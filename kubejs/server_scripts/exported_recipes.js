ServerEvents.recipes(event => {

    event.shaped(
            Item.of('buildinggadgets2:gadget_building'),
            [
                    'ABA',
                    'CDC',
                    'CEC'
            ],
            {
                    A: 'minecraft:redstone_block',
                    E: 'alltheores:steel_gear',
                    C: 'alltheores:steel_ingot',
                    B: 'justdirethings:blazegold_ingot',
                    D: 'ars_nouveau:source_gem'
            }
    )
});
