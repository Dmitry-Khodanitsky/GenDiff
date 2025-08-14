import _ from 'lodash'

function buildTree(parsedFile1, parsedFile2) {
  // собираем ключи объектов в один массив:
  const keys = _.sortBy(
    _.union(Object.keys(parsedFile1), Object.keys(parsedFile2)),
  )
  return keys.map((key) => {
    // Ключ есть в obj1, но отсутствует в obj2 → REMOVED
    if (!(key in parsedFile2)) {
      return {
        type: 'removed',
        name: key,
        oldValue: parsedFile1[key],
        children: [],
      }
    }

    // Ключ есть в obj2, но отсутствует в obj1 → ADDED
    if (!(key in parsedFile1)) {
      return {
        type: 'added',
        name: key,
        newValue: parsedFile2[key],
        children: [],
      }
    }

    const value1 = parsedFile1[key]
    const value2 = parsedFile2[key]

    // Оба значения — объекты (и не null) → рекурсивный diff
    if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
      return {
        type: 'nested', // или 'changed', если внутри есть изменения
        name: key,
        children: buildTree(value1, value2),
      }
    }

    // Значения разные → CHANGED
    if (value1 !== value2) {
      return {
        type: 'changed',
        name: key,
        oldValue: value1,
        newValue: value2,
        children: [],
      }
    }

    // Значения одинаковые → UNCHANGED
    return {
      type: 'unchanged',
      name: key,
      value: value1,
      children: [],
    }
  })
}

export default buildTree
