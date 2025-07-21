import { buildedTree } from '../../__fixtures__/testData.js'

function convertToJson(tree) {
  return JSON.stringify(tree)
}

console.log(convertToJson(buildedTree))
export { convertToJson }
