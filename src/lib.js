import fs from 'fs'
import path from 'path'

function parseData(filepath) {
  try {
    switch (path.extname(filepath)) {
      case '.json':
        return JSON.parse(fs.readFileSync(filepath, 'utf-8'))
      case '.yml':
        return 'Тут будет функция для yml'
      default:
        throw new Error('Не подходящий формат файла')
    }
  } catch (error) {
    throw new Error(`Возникла ошибка в процессе парсинга: ${error.message}`)
  }
}

function getDiff(parsedFile1, parsedFile2) {
  console.log(`Файл 1: ${parsedFile1}, Файл 2: ${parsedFile2}`)
}

export { parseData, getDiff }
