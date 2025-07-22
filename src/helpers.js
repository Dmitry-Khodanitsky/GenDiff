import path from 'path'
import fs from 'fs'

const readFile = (filepath) => {
  const fullPath = path.resolve(process.cwd(), filepath)
  const data = fs.readFileSync(fullPath).toString()
  return data
}

const getExtension = (filepath) => {
  return path.extname(filepath.toLowerCase()).slice(1)
}

export { readFile, getExtension }
