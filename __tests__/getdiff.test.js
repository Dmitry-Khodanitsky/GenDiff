import { expect, test } from '@jest/globals'
import path from 'path'
import { plainResult } from '../__fixtures__/expectedResultPlain'
import { stylishResult } from '../__fixtures__/expectedResultStylish'
import { jsonResult } from '../__fixtures__/expectedResultJSON'
import genDiff from '../src/genDiff'

const testData = [
  ['file1.json', 'file2.json', 'stylish', stylishResult],
  ['file1.json', 'file2.yml', 'plain', plainResult],
  ['file1.yaml', 'file2.yml', 'stylish', stylishResult],
  ['file1.json', 'file2.yaml', 'json', jsonResult],
]

describe.each(testData)(
  'Позитивный тест функции genDiff',
  (filename1, filename2, format, expected) => {
    test(`Формат вывода ${format} для файлов ${path.extname(
      filename1,
    )} и ${path.extname(filename2)}`, () => {
      expect(
        genDiff(filename1, filename2, format),
      ).toEqual(expected)
    })
  },
)
