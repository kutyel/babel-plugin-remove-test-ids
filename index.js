'use strict'

module.exports = () => ({
  visitor: {
    JSXAttribute: (path, state) => {
      let removeAttribute = 'data-test-id'
      if (state.opts.attribute) {
        removeAttribute = state.opts.attribute
      }
      return path.node.name.name === removeAttribute && path.remove()
    }
  }
})
