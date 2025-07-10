import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { expect, test } from '@jest/globals'
import { parseData, getDiff } from '../src/lib.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const getFixturePath = filename =>
  path.join(__dirname, '..', '__fixtures__', filename)
const readFixtureFile = filename =>
  fs.readFileSync(getFixturePath(filename), 'utf-8')

const jsonData = {
  host: 'hexlet.io',
  timeout: 50,
  proxy: '123.234.53.22',
  follow: false,
}

test('File parse test JSON', () => {
  const testFilePath = getFixturePath('file1.json')
  const expected = jsonData
  expect(parseData(testFilePath)).toEqual(expected)
})

/*
test('File parse test UML', () => {
  const testFilePath = getFixturePath('file1.json')
  const expected = jsonData
  expect(parseData(testFilePath)).toEqual(expected)
})
*/
