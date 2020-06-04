const Deque = require('collections/deque')

class TreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
const treeBreadthFirstSearch = {
    binaryTreeLevelOrderTraversal: root => {
        const result = []
        if (root.value === null) {
            return result
        }

        const queue = new Deque()
        queue.push(root)
        while (queue.length > 0) {
            const levelSize = queue.length
            const currentLevel = []
            for (let i = 0; i < levelSize; i++) {
                const currentNode = queue.shift()
                currentLevel.push(currentNode.value)
                if (currentNode.left !== null) {
                    queue.push(currentNode.left)
                }
                if (currentNode.right !== null) {
                    queue.push(currentNode.right)
                }
            }
            result.push(currentLevel)
        }
        return result
    },

    reverseLevelOrderTraversal: root => {
        const result = []
        if (root.value === null) {
            return result
        }

        const queue = new Deque()
        queue.push(root)
        while (queue.length > 0) {
            const levelSize = queue.length
            const currentLevel = []
            for (let i = 0; i < levelSize; i++) {
                const currentNode = queue.shift()
                currentLevel.push(currentNode.value)
                if (currentNode.left !== null) {
                    queue.push(currentNode.left)
                }
                if (currentNode.right !== null) {
                    queue.push(currentNode.right)
                }
            }
            result.unshift(currentLevel)
        }
        return result
    },

    zigzagTraversal: root => {
        const result = []
        if (root.value === null) {
            return result
        }

        let shift = false
        const queue = new Deque()
        queue.push(root)
        while (queue.length > 0) {
            const levelSize = queue.length
            const currentLevel = []
            for (let i = 0; i < levelSize; i++) {
                const currentNode = queue.shift()
                if (!shift) {
                    currentLevel.push(currentNode.value)
                } else {
                    currentLevel.unshift(currentNode.value)
                }
                if (currentNode.left !== null) {
                    queue.push(currentNode.left)
                }
                if (currentNode.right !== null) {
                    queue.push(currentNode.right)
                }
            }
            shift = !shift
            result.push(currentLevel)
        }
        return result
    },

    levelAverages: root => {
        const result = []
        if (root.value === null) {
            return result
        }

        const queue = new Deque()
        queue.push(root)
        while (queue.length > 0) {
            const levelSize = queue.length
            let levelSum = 0
            for (let i = 0; i < levelSize; i++) {
                const currentNode = queue.shift()
                levelSum += currentNode.value
                if (currentNode.left !== null) {
                    queue.push(currentNode.left)
                }
                if (currentNode.right !== null) {
                    queue.push(currentNode.right)
                }
            }
            result.push(levelSum / levelSize)
        }
        return result
    },

    minDepthOfABinaryTree: root => {
        let result = 0
        if (root.value === null) {
            return result
        }

        const queue = new Deque()
        queue.push(root)
        while (queue.length > 0) {
            const levelSize = queue.length
            result += 1
            for (let i = 0; i < levelSize; i++) {
                const currentNode = queue.shift()
                if (currentNode.left === null && currentNode.right === null) {
                    return result
                }
                if (currentNode.left !== null) {
                    queue.push(currentNode.left)
                }
                if (currentNode.right !== null) {
                    queue.push(currentNode.right)
                }
            }
        }
    },

    levelOrderSuccessor: (root, T) => {
        if (root.value === null) {
            return null
        }

        const queue = new Deque()
        queue.push(root)
        while (queue.length > 0) {
            const currentNode = queue.shift()
            if (currentNode.left !== null) {
                queue.push(currentNode.left)
            }
            if (currentNode.right !== null) {
                queue.push(currentNode.right)
            }
            if (currentNode.value === T) {
                break
            }
        }

        if (queue.length > 0) {
            return queue.peek()
        }
        return null
    },

    rightViewOfABinaryTree: root => {
        const result = []
        if (root.value === null) {
            return result
        }

        const queue = new Deque()
        queue.push(root)
        while (queue.length > 0) {
            const levelSize = queue.length
            let i = 0
            // eslint-disable-next-line no-constant-condition
            while (true) {
                const currentNode = queue.shift()
                if (currentNode.left !== null) {
                    queue.push(currentNode.left)
                }
                if (currentNode.right !== null) {
                    queue.push(currentNode.right)
                }
                i += 1
                if (i === levelSize) {
                    result.push(currentNode.value)
                    break
                }
            }
        }
        return result
    }
}

module.exports = { treeBreadthFirstSearch, TreeNode }