const inOrder = (currentNode) => {
  if (currentNode.left) {
    inOrder(currentNode.left)
  }
  console.log(currentNode.data)
  if (currentNode.right) {
    inOrder(currentNode.right)
  }
}

const findOrAdd = (rootNode, newNode) => {
  console.log(rootNode.data)
  console.log(newNode.data)
  if (rootNode.data === newNode.data) {
    return true
  } else {
    if (newNode.data < rootNode.data) {
      if (rootNode.left) {
        return findOrAdd(rootNode.left, newNode)
      } else {
        return rootNode.left = newNode
      }
    } else if (newNode.data > rootNode.data) {
      if (rootNode.right) {
        return findOrAdd(rootNode.right, newNode)
      } else {
        return rootNode.right = newNode
      }
    }
  }
}

const max = (rootNode) => {
  if (!rootNode.right) {
    return rootNode
  } else {
    return max(rootNode.right)
  }
}

const min = (rootNode) => {
  if (!rootNode.left) {
    return rootNode
  } else {
    return min(rootNode.left)
  }
}
