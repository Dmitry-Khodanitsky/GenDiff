import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getPath = filename =>
  path.resolve(__dirname, '..', '__fixtures__', filename)

const readFile = filename => fs.readFileSync(getPath(filename), 'utf-8')

const getExtension = (filepath) => {
  return path.extname(filepath.toLowerCase()).slice(1)
}

export { readFile, getExtension }
