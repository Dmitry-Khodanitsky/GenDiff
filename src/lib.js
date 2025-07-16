import _ from 'lodash'
import { formatDiffAsTree } from './stylish.js'
const objData = {
  common: {
    setting1: 'Value 1',
    setting2: 200,
    setting3: true,
    setting6: {
      key: 'value',
      doge: {
        wow: '',
      },
    },
  },
  group1: {
    baz: 'bas',
    foo: 'bar',
    nest: {
      key: 'value',
    },
  },
  group2: {
    abc: 12345,
    deep: {
      id: 45,
    },
  },
}
const objData2 = {
  common: {
    follow: false,
    setting1: 'Value 1',
    setting3: null,
    setting4: 'blah blah',
    setting5: {
      key5: 'value5',
    },
    setting6: {
      key: 'value',
      ops: 'vops',
      doge: {
        wow: 'so much',
      },
    },
  },
  group1: {
    foo: 'bar',
    baz: 'bars',
    nest: 'str',
  },
  group3: {
    deep: {
      id: {
        number: 45,
      },
    },
    fee: 100500,
  },
}

function buildTree(parsedFile1, parsedFile2) {
  // собираем ключи объектов в один массив:
  const keys = _.sortBy(
    _.union(Object.keys(parsedFile1), Object.keys(parsedFile2))
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
    if (_.isObject(value1) && _.isObject(value2)) {
      return {
        type: 'unchanged', // или 'changed', если внутри есть изменения
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

function getDiff(parsedFile1, parsedFile2, format) {
  const tree = buildTree(parsedFile1, parsedFile2)
  return format === 'asTree' ? formatDiffAsTree(tree) : 'plain'
}

// console.dir(buildTree(objData, objData2), { depth: 10 })

export { getDiff, buildTree }
