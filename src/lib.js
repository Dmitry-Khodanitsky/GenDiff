import fs from 'fs'
import path from 'path'
import _ from 'lodash'

function getDiff(parsedFile1, parsedFile2) {
  // собираем ключи объектов в один массив:
  const keys1 = Object.keys(parsedFile1)
  const keys2 = Object.keys(parsedFile2)
  const keys = _.sortBy(_.union(keys1, keys2))

  const result = {}

  for (const key of keys) {
    if (!Object.hasOwn(parsedFile1, key)) {
      result['+ ' + key] = parsedFile2[key]
    }
    else if (!Object.hasOwn(parsedFile2, key)) {
      result['- ' + key] = parsedFile1[key]
    }
    else if (parsedFile2[key] !== parsedFile1[key]) {
      result['- ' + key] = parsedFile1[key]
      result['+ ' + key] = parsedFile2[key]
    }
    else {
      result['= ' + key] = parsedFile1[key]
    }
  }
  return formatText(JSON.stringify(result))
}

function formatText(string) {
  const result = string.replace(/[{},:"=]/g, (match) => {
    switch (match) {
      case '{':
        return '{ \n'
      case '}':
        return '\n}'
      case ',':
        return '\n'
      case ':':
        return ': '
      case '"':
        return ''
      case '=':
        return ' '
    }
    return match
  })
  return result
}

export { getDiff, formatText }
