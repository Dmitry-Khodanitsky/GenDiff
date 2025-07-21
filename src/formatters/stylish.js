import _ from 'lodash'

const replacer = '    ' // 4 пробела

const stringify = (data, depth) => {
  if (!_.isObject(data)) {
    if (data === null) return 'null'
    if (data === undefined || data === '') return ''
    return `${data}`
  }

  const currentReplacer = replacer.repeat(depth + 1) // (depth + 1) * 4 для ключей
  const entries = Object.entries(data)
  const strings = entries.map(
    ([key, value]) => `${currentReplacer}${key}: ${stringify(value, depth + 1)}`
  )
  return `{\n${strings.join('\n')}\n${replacer.repeat(depth)}}` // depth * 4 для закрывающей скобки
}

const stylish = (data) => {
  const iter = (obj, depth) => {
    if (!Array.isArray(obj)) return stringify(obj, depth)
    const markerIndent = replacer.repeat(depth - 1) + '  '
    const fullIndent = replacer.repeat(depth)
    const result = obj.flatMap((node) => {
      const { name, oldValue, newValue, value, type, children } = node
      switch (type) {
        case 'added':
          return `${markerIndent}+ ${name}: ${stringify(newValue, depth)}`
        case 'removed':
          return `${markerIndent}- ${name}: ${stringify(oldValue, depth)}`
        case 'unchanged':
          return `${fullIndent}${name}: ${stringify(value, depth)}`
        case 'changed':
          return `${markerIndent}- ${name}: ${stringify(oldValue, depth)}\n${markerIndent}+ ${name}: ${stringify(newValue, depth)}`
        case 'nested':
          return `${fullIndent}${name}: ${iter(children, depth + 1)}`
        default:
          throw new Error(`Unknown type: ${type}`)
      }
    })
    return `{\n${result.join('\n')}\n${replacer.repeat(depth - 1)}}`
  }
  return iter(data, 1)
}

export { stylish }
