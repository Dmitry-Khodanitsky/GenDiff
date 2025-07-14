import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'

function parseData(filepath) {
  try {
    const content = fs.readFileSync(filepath, 'utf-8')
    switch (path.extname(filepath)) {
      case '.json':
        return JSON.parse(content)
      case '.yml':
      case '.yaml':
        return yaml.load(content)
      default:
        throw new Error('Не подходящий формат файла')
    }
  }
  catch (error) {
    throw new Error(`Возникла ошибка в процессе парсинга: ${error.message}`)
  }
}

export { parseData }
