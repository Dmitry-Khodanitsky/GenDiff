import { expect, test } from '@jest/globals'
import { buildedTree } from '../__fixtures__/testData.js'
import { convertToJson } from '../src/formatters/json.js'
import { __dirname } from '../__fixtures__/testData.js'
import fs from 'fs'
import path from 'path'

// Читаем фикстуру

test('Test formatting as tree', () => {
  const expected = fs
    .readFileSync(
      path.join(__dirname, 'jsonFormat.json'),
      'utf-8',
    )
    .trim()

  expect(convertToJson(buildedTree)).toBe(expected)
})
