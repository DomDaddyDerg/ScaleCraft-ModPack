
const runicYEET = [
    'modern_industrialization:runic_energy_output_hatch',
    'extended_industrialization:runic_tesla_receiver_hatch',
    'modern_industrialization:superconductor_runic_transformer',
    'modern_industrialization:runic_superconductor_transformer',
    'modern_industrialization:runic_ev_transformer',
    'modern_industrialization:runic_storage_unit',
    'modern_industrialization:ev_runic_transformer',
    'forbidden_arcanus:corrupted_arcane_crystal_block'
]

RecipeViewerEvents.removeEntriesCompletely('item', ScaleCraft => {



    ScaleCraft.remove('relics:researching_table')


    ScaleCraft.remove('mekmm:scrap')
    ScaleCraft.remove('mekmm:scrap_box')
    ScaleCraft.remove('mekmm:empty_crystal')
    ScaleCraft.remove('mekmm:uu_matter')
    ScaleCraft.remove('mekmm:ambient_gas_collector')
    ScaleCraft.remove(/mekmm:.*replicat.*/)
    ScaleCraft.remove(/mekmm:.*recycl.*/)
    ScaleCraft.remove(/mekmm:.*planting.*/)
    ScaleCraft.remove(/mekmm:.*lathing.*/)
    ScaleCraft.remove(/mekmm:.*rolling_mill.*/)
})

RecipeViewerEvents.removeRecipes(event => {
    event.remove(["xycraft_machines:extractor/enderio/grains_of_infinity"])
})

RecipeViewerEvents.removeEntries('item', ScaleCraft => {
    for (let yeet of runicYEET) {
        ScaleCraft.remove(yeet)
    }
})

RecipeViewerEvents.addInformation('item', ScaleCraft => {
    ScaleCraft.add('justdirethings:polymorphic_catalyst', [
        '§8Drop a §cPolymorphic Catalyst§8 into §1Water§8 to get Polymorphic Fluid'
    ])
    ScaleCraft.add('justdirethings:portal_fluid_catalyst', [
        '§8Drop a §dPortal Fluid Catalyst§8 into Polymorphic Fluid§8 in t§dThe End§8 to get §5Unstable Portal Fluid'
    ])
})

RecipeViewerEvents.addInformation('fluid', ScaleCraft => {
    ScaleCraft.add("advanced_ae:quantum_infusion_source", [
        '§8In the Reaction Chamber: §e4000mb of Water§8 + §e1x Quantum Infused Dust§8 = §b1000mb of Quantum Infusion'
    ])
    ScaleCraft.add("justdirethings:polymorphic_fluid_source", [
        '§8Drop a §cPolymorphic Catalyst§8 into §bWater§8 to get Polymorphic Fluid'
    ])
    ScaleCraft.add("justdirethings:unstable_portal_fluid_source", [
        '§8Drop a §dPortal Fluid Catalyst§8 into §dPolymorphic Fluid§8 in §5The End§8 to get §5Unstable Portal Fluid'
    ])
})