import buildTree from './buildTree.js'
import parseData from './parser.js'
import formatter from './formatters/index.js'
import { getExtension } from './helpers.js'

function genDiff(filename1, filename2, format = 'stylish') {
  const parsedFile1 = parseData(
    filename1,
    getExtension(filename1),
  )
  const parsedFile2 = parseData(
    filename2,
    getExtension(filename2),
  )
  const tree = buildTree(parsedFile1, parsedFile2)
  return formatter(tree, format)
}

export default genDiff
