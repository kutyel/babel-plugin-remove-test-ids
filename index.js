'use strict'

module.exports = () => ({
  visitor: {
    JSXAttribute: (path, { opts: { attributes = ['data-test-id'] } }) =>
      attributes.includes(path.node.name.name) && path.remove()
  }
})
