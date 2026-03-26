import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { Resvg } from '@resvg/resvg-js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const svgPath = join(__dirname, '..', 'public', 'og-image.svg')
const pngPath = join(__dirname, '..', 'public', 'og-image.png')

const svg = readFileSync(svgPath, 'utf-8')

const resvg = new Resvg(svg, {
  fitTo: { mode: 'width', value: 1200 },
  font: {
    loadSystemFonts: true,
  },
})

const pngData = resvg.render()
const pngBuffer = pngData.asPng()

writeFileSync(pngPath, pngBuffer)
console.log(`Generated ${pngPath} (${pngBuffer.length} bytes, ${pngData.width}x${pngData.height})`)
