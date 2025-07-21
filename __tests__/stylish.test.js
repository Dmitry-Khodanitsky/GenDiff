import { expect, test } from '@jest/globals'
import { buildedTree } from '../__fixtures__/testData.js'
import { stylish } from '../src/stylish'
import { asTree } from '../__fixtures__/formatAsTree'

test('Test formatting as tree', () => {
  const expected = asTree
  expect(stylish(buildedTree)).toEqual(expected)
})
