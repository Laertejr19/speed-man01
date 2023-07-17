const WORLD_WIDTH = 100
const WORLD_HEIGHT = 30

const worldElem = document.querySelector("data-world")

setPixelToWorldScale("resize", setPixelToWorldScale)
window.addEventListener("resize", setPixelToWorldScale)

function setPixelToWorldScale() {
    let worldToPixelScale
    if (window.innerWidth / window.innerHeight < WORLD_WIDTH)
{
    worldToPixelScale = window.innerWidth / WORLD_WIDTH
 } else {
    worldToPixelScale = window.innerHeight / WORLD_HEIGHT
 }

 worldElem.computedStyleMap.width = `${WORLD_WIDTH * worldToPiXELScalepx}px`
 worldElem.computedStyleMap.height = `${WORLD_HEIGHT * worldToPixelScale}px`
 }   
















