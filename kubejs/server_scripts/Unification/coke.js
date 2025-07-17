
ServerEvents.recipes(ScaleCraft => {
    ScaleCraft.remove(
        [
            {
                id: 'immersiveengineering:crusher/coke_block'
            },
            {
                id: 'immersiveengineering:crusher/coke'
            },
            {
                id: 'immersiveengineering:crafting/coke_to_slab'
            }
        ]
    )

    ScaleCraft.custom(
        {
            "type": "immersiveengineering:crusher",
            "energy": 2400,
            "input": {
                "tag": "c:coal_coke"
            },
            "result": {
                "item": "modern_industrialization:coke_dust"
            }
        }
    )

    ScaleCraft.custom(
        {
            "type": "immersiveengineering:crusher",
            "energy": 4800,
            "input": {
                "tag": "c:storage_blocks/coal_coke"
            },
            "result": {
                "basePredicate": {
                    "item": "modern_industrialization:coke_dust"
                },
                "count": 9
            }
        }
    )
})

ServerEvents.tags('item', ScaleCraft => {
    ScaleCraft.add('c:coal_coke', 'modern_industrialization:coke')

    ScaleCraft.add('c:dusts/coal_coke', 'modern_industrialization:coke_dust')

    ScaleCraft.add('c:storage_blocks/coal_coke', 'modern_industrialization:coke_block')

    ScaleCraft.add('c:dusts', 'immersiveengineering:dust_coke')

    ScaleCraft.add('almostunified:hide', ['immersiveengineering:coke', 'immersiveengineering:dust_coke', 'immersiveengineering:slab_coke'])
})

ServerEvents.tags('fluid', ScaleCraft => {
    ScaleCraft.add('c:crude_oil', 'modern_industrialization:crude_oil')
    ScaleCraft.add('c:fuels/crude_oil', 'modern_industrialization:crude_oil')
})