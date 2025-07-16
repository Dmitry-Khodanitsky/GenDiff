import path from 'path'
import { fileURLToPath } from 'url'
import { expect, test } from '@jest/globals'
import { getDiff, buildTree } from '../src/lib.js'

import {
  buildedTree,
  objData,
  objData2,
} from '../__fixtures__/testData.js'

test('Building tree from objects', () => {
  const expected = buildedTree
  expect(buildTree(objData, objData2)).toEqual(expected)
})
