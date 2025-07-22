import buildTree from './buildTree.js'
import parseData from './parser.js'
import formatter from './formatters/index.js'
import { getExtension } from './helpers.js'

function genDiff(filepath1, filepath2, format = 'stylish') {
  const parsedFile1 = parseData(
    filepath1,
    getExtension(filepath1),
  )
  const parsedFile2 = parseData(
    filepath2,
    getExtension(filepath2),
  )
  const tree = buildTree(parsedFile1, parsedFile2)
  return formatter(tree, format)
}

export default genDiff
