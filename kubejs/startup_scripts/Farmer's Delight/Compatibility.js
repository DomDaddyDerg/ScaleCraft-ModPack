

let stews = [
    "biomeswevegone:white_puffball_stew",
    "rootsclassic:rooty_stew",
]

ItemEvents.modification(ScaleCraft => {
    stews.forEach(stew => {
          ScaleCraft.modify(stew, item => {
              item.maxStackSize = 16
          })
    })
})