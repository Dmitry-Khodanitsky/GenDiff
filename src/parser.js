import yaml from 'js-yaml'
import { readFile } from './helpers.js'

function parseData(filename, format) {
  const content = readFile(filename)
  switch (format) {
    case 'json':
      return JSON.parse(content)
    case 'yml':
    case 'yaml':
      return yaml.load(content)
    default:
      throw new Error('Не подходящий формат файла')
  }
}

export default parseData
