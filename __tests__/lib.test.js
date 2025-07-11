import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { expect, test } from '@jest/globals'
import { parseData, getDiff, formatText } from '../src/lib.js'
import { jsonData, jsonData2, diffString, diffFormatString } from '../__fixtures__/testData.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const getFixturePath = filename =>
  path.join(__dirname, '..', '__fixtures__', filename)
const readFixtureFile = filename =>
  fs.readFileSync(getFixturePath(filename), 'utf-8')

test('File parse test JSON', () => {
  const testFilePath = getFixturePath('file1.json')
  const expected = (jsonData)
  expect(parseData(testFilePath)).toEqual(expected)
})

/*
test('File parse test UML', () => {
  const testFilePath = getFixturePath('file1.json')
  const expected = jsonData
  expect(parseData(testFilePath)).toEqual(expected)
})
*/
test('Formating string by formatText function', () => {
  const expected = diffFormatString
  expect(formatText(diffString)).toEqual(expected)
})

test('Get differences test', () => {
  const expected = diffFormatString
  expect(getDiff(jsonData, jsonData2)).toEqual(expected)
})
