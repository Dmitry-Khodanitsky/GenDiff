import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const getFixturePath = filename =>
  path.join(__dirname, '..', '__fixtures__', filename)

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

const buildedTree = [
  {
    type: 'nested',
    name: 'common',
    children: [
      { type: 'added', name: 'follow', newValue: false, children: [] },
      {
        type: 'unchanged',
        name: 'setting1',
        value: 'Value 1',
        children: [],
      },
      {
        type: 'removed',
        name: 'setting2',
        oldValue: 200,
        children: [],
      },
      {
        type: 'changed',
        name: 'setting3',
        oldValue: true,
        newValue: null,
        children: [],
      },
      {
        type: 'added',
        name: 'setting4',
        newValue: 'blah blah',
        children: [],
      },
      {
        type: 'added',
        name: 'setting5',
        newValue: { key5: 'value5' },
        children: [],
      },
      {
        type: 'nested',
        name: 'setting6',
        children: [
          {
            type: 'nested',
            name: 'doge',
            children: [
              {
                type: 'changed',
                name: 'wow',
                oldValue: '',
                newValue: 'so much',
                children: [],
              },
            ],
          },
          {
            type: 'unchanged',
            name: 'key',
            value: 'value',
            children: [],
          },
          {
            type: 'added',
            name: 'ops',
            newValue: 'vops',
            children: [],
          },
        ],
      },
    ],
  },
  {
    type: 'nested',
    name: 'group1',
    children: [
      {
        type: 'changed',
        name: 'baz',
        oldValue: 'bas',
        newValue: 'bars',
        children: [],
      },
      { type: 'unchanged', name: 'foo', value: 'bar', children: [] },
      {
        type: 'changed',
        name: 'nest',
        oldValue: { key: 'value' },
        newValue: 'str',
        children: [],
      },
    ],
  },
  {
    type: 'removed',
    name: 'group2',
    oldValue: { abc: 12345, deep: { id: 45 } },
    children: [],
  },
  {
    type: 'added',
    name: 'group3',
    newValue: { deep: { id: { number: 45 } }, fee: 100500 },
    children: [],
  },
]

export { objData, objData2, getFixturePath, buildedTree }
