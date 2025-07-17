

global.mekStackAdditions = [
  {material:'crimson_iron', color:'#fc9aad', makeDust: false},
  {material:'azure_silver', color:'#e89ffc', makeDust: false}
]

// DO NOT EDIT BELOW THIS LINE

const Chemical = Java.loadClass('mekanism.api.chemical.Chemical')
const ChemicalBuilder = Java.loadClass('mekanism.api.chemical.ChemicalBuilder')

StartupEvents.registry('item', ScaleCraft => {
  const mekItems = ['clump', 'crystal', 'dirty_dust', 'shard']
  function mekStack(name, color) {
    mekItems.forEach(type => {
      ScaleCraft.create(`${name}_${type}`)
        .texture('layer0', 'mekanism:item/empty')
        .texture('layer1', `mekanism:item/${type}`)
        .texture('layer2', `mekanism:item/${type}_overlay`)
        .color(1, color)
        .tag(`c:${type}s`)
        .tag(`c:${type}s/${name}`)
    })
  }
  global.mekStackAdditions.forEach(entry => {
    mekStack(entry.material, entry.color)
    if (entry.makeDust) {
      ScaleCraft.create(`dust_${entry.material}`)
        .texture('layer0', 'mekanism:item/empty')
        .texture('layer1', `mekanism:item/dust`)
        .color(1, entry.color)
        .tag(`c:dusts`)
        .tag(`c:dusts/${entry.material}`)
    }
  })
})

StartupEvents.registry('mekanism:chemical', ScaleCraft => {
    global.mekStackAdditions.forEach(entry => {
    ScaleCraft.createCustom(`clean_${entry.material}`, () => Chemical(ChemicalBuilder.cleanSlurry().tint(Color.of(entry.color).getRgb()).ore(`c:ores/${entry.material}`)))
    ScaleCraft.createCustom(`dirty_${entry.material}`, () => Chemical(ChemicalBuilder.dirtySlurry().tint(Color.of(entry.color).getRgb()).ore(`c:ores/${entry.material}`)))
})
})