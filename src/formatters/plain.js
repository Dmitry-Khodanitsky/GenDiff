import _ from 'lodash'

function plain(tree) {
  function iter(nodes, parentPath = '') {
    const result = nodes.flatMap((node) => {
      const { name, oldValue, newValue, type, children = [] } = node
      const currentPath = parentPath ? `${parentPath}.${name}` : name

      const stringify = (value) => {
        if (value === null) return 'null'
        if (typeof value === 'number') return value
        if (typeof value === 'boolean') return value.toString()
        if (_.isPlainObject(value)) return '[complex value]'
        return `'${value}'`
      }

      switch (type) {
        case 'added':
          return `Property '${currentPath}' was added with value: ${stringify(
            newValue,
          )}`
        case 'removed':
          return `Property '${currentPath}' was removed`
        case 'changed':
          return `Property '${currentPath}' was updated. From ${stringify(
            oldValue,
          )} to ${stringify(newValue)}`
        case 'nested':
          return iter(children, currentPath)
        default:
          return []
      }
    })

    return result.filter(Boolean)
  }

  return iter(tree).join('\n')
}

export { plain }
