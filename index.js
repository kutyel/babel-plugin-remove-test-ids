'use strict'

module.exports = () => ({
  visitor: {
    JSXAttribute: path =>
      path.node.name.name === 'data-test-id' && path.remove()
  }
})
