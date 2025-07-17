
ServerEvents.tags('block', ScaleCraft => {
    // Waystones
    ScaleCraft.add('ftbchunks:interact_whitelist', ['@waystones'])

    // Extreme Reactors
    ScaleCraft.add('c:storage_blocks/yellorium', 'alltheores:uranium_block')

    // Essence Blocks
    ScaleCraft.add('c:storage_blocks/air_essence', 'kubejs:air_essence_block')
    ScaleCraft.add('c:storage_blocks/earth_essence', 'kubejs:earth_essence_block')
    ScaleCraft.add('c:storage_blocks/fire_essence', 'kubejs:fire_essence_block')
    ScaleCraft.add('c:storage_blocks/water_essence', 'kubejs:water_essence_block')
    ScaleCraft.add('c:storage_blocks', [
        '#c:storage_blocks/air_essence',
        '#c:storage_blocks/earth_essence',
        '#c:storage_blocks/fire_essence',
        '#c:storage_blocks/water_essence'
    ])

    //Entangled
    ScaleCraft.add('entangled:invalid_targets',
        ['@ae2', '@advancedae', '@extendedae', '@megacells', '@appflux', '@appmek']
    )

    // Just Dire Things
    ScaleCraft.add('justdirethings:lawnmowerable', '#c:grass')
    ScaleCraft.add('justdirethings:tick_speed_deny', '@industrialforegoingsouls')
})

ServerEvents.tags('fluid', ScaleCraft => {
    // Pneumaticcraft
    ScaleCraft.add('c:ethanol', 'pneumaticcraft:ethanol')
})

ServerEvents.tags('item', ScaleCraft => {
    // Extreme Reactors (using config/almostunified/tags.json)
    // ScaleCraft.add('c:ingots/yellorium', 'alltheores:uranium_ingot')
    ScaleCraft.add('c:storage_blocks/raw_yellorium', 'bigreactors:raw_yellorium_block')

    // Tiny Coal
    ScaleCraft.add('atm10:tiny_coals', [
        'utilitarian:tiny_coal',
        'actuallyadditions:tiny_coal',
    ])
    ScaleCraft.add('atm10:tiny_charcoals', [
        'utilitarian:tiny_charcoal',
        'actuallyadditions:tiny_charcoal',
    ])

    ScaleCraft.add('c:storage_blocks', '#c:storage_blocks/raw_crimson_iron')
    ScaleCraft.add('c:storage_blocks', '#c:storage_blocks/raw_azure_silver')

    // Essence Blocks
    ScaleCraft.add('c:storage_blocks/air_essence', 'kubejs:air_essence_block')
    ScaleCraft.add('c:storage_blocks/earth_essence', 'kubejs:earth_essence_block')
    ScaleCraft.add('c:storage_blocks/fire_essence', 'kubejs:fire_essence_block')
    ScaleCraft.add('c:storage_blocks/water_essence', 'kubejs:water_essence_block')
    ScaleCraft.add('c:storage_blocks', [
        '#c:storage_blocks/air_essence',
        '#c:storage_blocks/earth_essence',
        '#c:storage_blocks/fire_essence',
        '#c:storage_blocks/water_essence'
    ])

    // Bibliocraft compat
    // Ars Elemental Books
    ScaleCraft.add('minecraft:bookshelf_books', 'ars_elemental:air_caster_tome')
    ScaleCraft.add('minecraft:bookshelf_books', 'ars_elemental:fire_caster_tome')
    ScaleCraft.add('minecraft:bookshelf_books', 'ars_elemental:water_caster_tome')
    ScaleCraft.add('minecraft:bookshelf_books', 'ars_elemental:earth_caster_tome')
    ScaleCraft.add('minecraft:bookshelf_books', 'ars_elemental:anima_caster_tome')
    ScaleCraft.add('minecraft:bookshelf_books', 'ars_elemental:manipulation_caster_tome')

    // More books
    ScaleCraft.add('minecraft:bookshelf_books', 'patchouli:guide_book')
    ScaleCraft.add('minecraft:bookshelf_books', 'evilcraft:origins_of_darkness')
    ScaleCraft.add('minecraft:bookshelf_books', 'ae2:guide')
    ScaleCraft.add('minecraft:bookshelf_books', 'powah:book')
    ScaleCraft.add('minecraft:bookshelf_books', 'actuallyadditions:booklet')

    // Forbiden Arcanus Stellar Blacklist
    ScaleCraft.add('forbidden_arcanus:modifier/eternal_incompatible', 'ars_additions:undying_charm')
})

ServerEvents.tags('entity_type', ScaleCraft => {

    ScaleCraft.add('c:bosses', [
        "cataclysm:amethyst_crab",
        "cataclysm:ancient_remnant",
        "cataclysm:coralssus",
        "cataclysm:ender_golem",
        "cataclysm:ender_guardian",
        "cataclysm:ignis",
        "cataclysm:ignited_revenant",
        "cataclysm:kobolediator",
        "cataclysm:maledictus",
        "cataclysm:modern_remnant",
        "cataclysm:netherite_monstrosity",
        "cataclysm:the_baby_leviathan",
        "cataclysm:the_harbinger",
        "cataclysm:the_leviathan",
        "cataclysm:the_prowler",
        "cataclysm:wadjet",
        "eternal_starlight:starlight_golem",
        "eternal_starlight:the_gatekeeper",
        "#neoforge:bosses"
    ])

    ScaleCraft.add('scalecraft:jank_blacklist', [
        "@iceandfire",
        'ars_nouveau:animated_block',
        'artifacts:mimic',
        'create:package',
        'mekanism:robit',
        'twilightforest:hedge_spider',
        'twilightforest:swarm_spider',
        '#c:bosses',
        "@occultism",
        "@productivebees",
        "forbidden_arcanus:corrupt_lost_soul",
        "forbidden_arcanus:lost_soul",
        "forbidden_arcanus:enchanted_lost_soul"
    ])

    ScaleCraft.add('apothic_spawners:blacklisted_from_spawners', '#scalecraft:jank_blacklist')
    ScaleCraft.add('enderio:soul_vial_blacklist', '#scalecraft:jank_blacklist')
    ScaleCraft.add('industrialforegoing:mob_duplicator_blacklist', '#scalecraft:jank_blacklist')
    ScaleCraft.add('industrialforegoing:mob_crusher_blacklist', '#scalecraft:jank_blacklist')
    ScaleCraft.add('justdirethings:paradox_deny', '#scalecraft:jank_blacklist');
    ScaleCraft.add('tombstone:unhandled_tamable', '#scalecraft:jank_blacklist')
    ScaleCraft.add('mob_grinding_utils:no_swab', '#scalecraft:jank_blacklist')
    ScaleCraft.add('mob_grinding_utils:no_spawn', '#scalecraft:jank_blacklist')
    ScaleCraft.add('enderio:spawner_blacklist', '#scalecraft:jank_blacklist')
    ScaleCraft.add('ars_additions:source_spawner_denylist', '#scalecraft:jank_blacklist')
});

ServerEvents.tags('worldgen/structure', ScaleCraft => {
    // Cataclysm
    ScaleCraft.add('cataclysm:berserker_spawn', "betterfortresses:fortress");
});

ServerEvents.tags('enchantment', ScaleCraft => {
    // Apoth Enchanting
    ScaleCraft.remove('minecraft:non_treasure', "apothic_enchanting:miners_fervor");
});

ServerEvents.tags('block_entity_type', ScaleCraft => {
    // Apoth Enchanting
    ScaleCraft.remove('packingtape:blacklist/problematic', ["extrastorage:block_16384k_fluid", "extrastorage:block_65536k_fluid", "extrastorage:block_262144k_fluid", "extrastorage:block_1048576k_fluid"]);
});