import { stylish } from './stylish.js'
import { plain } from './plain.js'
import { convertToJson } from './json.js'
export default function (tree, format) {
  switch (format) {
    case 'stylish':
      return stylish(tree)
    case 'plain':
      return plain(tree)
    case 'json':
      return convertToJson(tree)
    default:
      throw new Error('Неверный формат, доступные форматы plain, stylish, json')
  }
}
