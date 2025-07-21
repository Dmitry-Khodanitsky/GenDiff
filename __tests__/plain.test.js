import { expect, test } from '@jest/globals'
import { buildedTree } from '../__fixtures__/testData.js'
import { plain } from '../src/formatters/plain.js'
import { plainFormat } from '../__fixtures__/plainFormat.js'

test('Test formatting as tree', () => {
  const expected = plainFormat
  expect(plain(buildedTree)).toEqual(expected)
})
