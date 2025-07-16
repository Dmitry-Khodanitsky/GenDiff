import { expect, test } from '@jest/globals'
import { objData, objData2, getFixturePath } from '../__fixtures__/testData'
import { parseData } from '../src/parse'

test('File parse test JSON', () => {
  const testFilePath = getFixturePath('file1.json')
  const expected = objData
  expect(parseData(testFilePath)).toEqual(expected)
})

test('Parse YML file', () => {
  const testFilePath = getFixturePath('file1.yml')
  expect(parseData(testFilePath)).toEqual(objData)
})

test('Parse YAML file', () => {
  const testFilePath = getFixturePath('file2.yaml')
  expect(parseData(testFilePath)).toEqual(objData2)
})
