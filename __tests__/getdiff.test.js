import { expect, test } from '@jest/globals'
import path from 'path'
import { plainResult } from '../__fixtures__/expectedResultPlain'
import { stylishResult } from '../__fixtures__/expectedResultStylish'
import { jsonResult } from '../__fixtures__/expectedResultJSON'
import genDiff from '../src/genDiff'

const testData = [
  ['file1.json', 'file2.json', 'stylish', stylishResult],
  ['file1.json', 'file2.yml', 'plain', plainResult],
  ['file1.YAML', 'file2.yml', 'stylish', stylishResult],
  ['file1.json', 'file2.YAML', 'json', jsonResult],
]

describe.each(testData)(
  'Позитивный тест функции genDiff',
  (pathfile1, pathfile2, format, expected) => {
    test(`Формат вывода ${format} для файлов ${path.extname(
      pathfile1,
    )} и ${path.extname(pathfile2)}`, () => {
      expect(
        genDiff(pathfile1, pathfile2, format),
      ).toEqual(expected)
    })
  },
)
