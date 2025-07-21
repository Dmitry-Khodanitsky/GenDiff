import { expect, test } from '@jest/globals'
import { buildTree } from '../src/getdiff.js'

import { buildedTree, objData, objData2 } from '../__fixtures__/testData.js'

test('Building tree from objects', () => {
  const expected = buildedTree
  expect(buildTree(objData, objData2)).toEqual(expected)
})
