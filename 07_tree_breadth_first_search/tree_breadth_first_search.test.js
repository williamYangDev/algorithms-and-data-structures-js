const { treeBreadthFirstSearch, TreeNode } = require('./tree_breadth_first_search')

describe('Tree Breadth First Search', () => {
    let root
    beforeEach(() => {
        root = new TreeNode(12);
        root.left = new TreeNode(7);
        root.right = new TreeNode(1);
        root.left.left = new TreeNode(9);
        root.right.left = new TreeNode(10);
        root.right.right = new TreeNode(5)
    })

    test('Binary Tree Level Order Traversal', () => {
        const output = [[12], [7, 1], [9, 10, 5]]
        expect(treeBreadthFirstSearch.binaryTreeLevelOrderTraversal(root)).toEqual(output)
    })

    test('Reverse Level Order Traversal', () => {
        const output = [[9, 10, 5], [7, 1], [12]]
        expect(treeBreadthFirstSearch.reverseLevelOrderTraversal(root)).toEqual(output)
    })

    test('Zigzag Traversal', () => {
        root.right.left.left = new TreeNode(20)
        root.right.left.right = new TreeNode(17)
        const output = [[12], [1, 7], [9, 10, 5], [17, 20]]
        expect(treeBreadthFirstSearch.zigzagTraversal(root)).toEqual(output)
    })

    test('Level Averages in a Binary Tree', () => {
        root.left.right = new TreeNode(2);
        const output = [12.0, 4.0, 6.5]
        expect(treeBreadthFirstSearch.levelAverages(root)).toEqual(output)
    })

    test('Minimum Depth of a Binary Tree', () => {
        root.left.left = null;
        expect(treeBreadthFirstSearch.minDepthOfABinaryTree(root)).toEqual(2)
    })

    test('Level Order Successor', () => {
        expect(treeBreadthFirstSearch.levelOrderSuccessor(root, 12).value).toEqual(7)
    })

    test('Right View of a Binary Tree', () => {
        expect(treeBreadthFirstSearch.rightViewOfABinaryTree(root)).toEqual([12, 1, 5])
    })
})