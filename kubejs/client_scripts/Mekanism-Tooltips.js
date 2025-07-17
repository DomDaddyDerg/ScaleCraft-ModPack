
ItemEvents.modifyTooltips(ScaleCraft => {

    // ##### Gear #####

    //Mekasuit
    ScaleCraft.add(/mekanism:mekasuit_/, [
        Text.red('Increased Energy Consumption!'),
        Text.green('Increased Energy Capacity')
    ])
    //Meka Tool
    ScaleCraft.add('mekanism:meka_tool', [
        Text.red('Increased Energy Consumption!'),
        Text.green('Increased Energy Capacity!'),
        Text.green('Increased Attack Speed & Damage!')
    ])

    // ##### Generators #####

    //Solar Generator
    ScaleCraft.add('mekanismgenerators:solar_generator', [
        Text.green('Increased Energy Capacity & Production!')
    ])
    //Advanced Solar Generator
    ScaleCraft.add('mekanismgenerators:advanced_solar_generator', [
        Text.green('Increased Energy Capacity & Production!')
    ])
    //Wind Generator
    ScaleCraft.add('mekanismgenerators:wind_generator', [
        Text.green('Increased Energy Capacity & Production!')
    ])
    //Heat Generator
    ScaleCraft.add('mekanismgenerators:heat_generator', [
        Text.green('Increased Energy Capacity & Production!')
    ])
    //Gas Burning Generator
    ScaleCraft.add('mekanismgenerators:gas_burning_generator', [
        Text.red('Decreased Energy Production!'),
        Text.red('Increased Fuel Consumption!')
    ])
    //Fission Generator
    ScaleCraft.add(/mekanismgenerators:fission_/, [
        Text.red('Decreased Energy Production!'),
    ])
    //Fusion Generator
    ScaleCraft.add(/mekanismgenerators:fusion_/, [
        Text.red('Decreased Energy Production!'),
        Text.green('Decreased Fuel Consumption!'),
    ])
    //Turbine
    ScaleCraft.add(/mekanismgenerators:turbine_/, [
        Text.green('Increased Production Speed!'),
    ])
    //Boiler
    ScaleCraft.add(/mekanism:boiler_/, [
        Text.green('Increased Production Speed!'),
    ])

    // ##### Machines #####

    //Upgrades
    ScaleCraft.add(/mekanism:upgrade_/, [
        Text.green('Increased Machine Boost!')
    ])
    //Waste Barrel
    ScaleCraft.add('mekanism:radioactive_waste_barrel', [
        Text.green('Increased Decay Rate!')
    ])
    //Thermal Evaporation Tower
    ScaleCraft.add(/mekanism:thermal_evaporation_/, [
        Text.green('Increased Production Speed!')
    ])
    //Solar Neutron Activator
    ScaleCraft.add('mekanism:solar_neutron_activator', [
        Text.green('Increased Production Speed!'),
        Text.green('Waste -> Polonium buffed!')
    ])
    //Isotopic Centrifuge
    ScaleCraft.add('mekanism:isotopic_centrifuge', [
        Text.green('Waste -> Plutonium buffed!')
    ])
    //Electric Pump
    ScaleCraft.add('mekanism:electric_pump', [
        Text.green('Increased Production Speed!')
    ])
    //SPS
    ScaleCraft.add(/mekanism:sps_/, [
        Text.green('Decreased Energy Consumption!')
    ])
})