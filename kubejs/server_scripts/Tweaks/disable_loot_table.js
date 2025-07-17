ServerEvents.generateData('after_mods', ScaleCraft => {

    let ids = JsonIO.read("kubejs/server_scripts/Tweaks/disable_loot_table_ids.json").ids

    for (let id of ids) {
        ScaleCraft.json(`${id}.json`,
            {
                "neoforge:conditions": [
                    {
                        "type": "neoforge:false"
                    }
                ]
            }
        )
    }
})