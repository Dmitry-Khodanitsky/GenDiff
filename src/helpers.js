import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const getPath = filename =>
  path.resolve(__dirname, '..', '__fixtures__', filename)

const readFile = (filename) => {
  const candidatePath = path.isAbsolute(filename)
    ? filename
    : (fs.existsSync(filename) ? path.resolve(filename) : getPath(filename))
  return fs.readFileSync(candidatePath, 'utf-8')
}

const getExtension = (filename) => {
  return path.extname(filename).slice(1).toLowerCase()
}

export { readFile, getExtension }
