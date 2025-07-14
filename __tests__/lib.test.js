import path from 'path'
import { fileURLToPath } from 'url'
import { expect, test } from '@jest/globals'
import { getDiff, formatText } from '../src/lib.js'
import { parseData } from '../src/parse.js'
import {
  objData,
  objData2,
  diffString,
  diffFormatString,
} from '../__fixtures__/testData.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const getFixturePath = filename =>
  path.join(__dirname, '..', '__fixtures__', filename)

/* const readFixtureFile = filename =>
  fs.readFileSync(getFixturePath(filename), 'utf-8')
*/

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

test('Formating string by formatText function', () => {
  const expected = diffFormatString
  expect(formatText(diffString)).toEqual(expected)
})

test('Get differences test', () => {
  const expected = diffFormatString
  expect(getDiff(objData, objData2)).toEqual(expected)
})
