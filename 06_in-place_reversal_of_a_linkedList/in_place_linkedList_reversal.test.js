const { inPlaceLinkedListReversal, Node, toNodes } = require('./in_place_linkedList_reversal')

describe('Reverse a LinkedList', () => {
    let head
    beforeEach(() => {
        head = new Node(2);
        head.next = new Node(4);
        head.next.next = new Node(6);
        head.next.next.next = new Node(8);
        head.next.next.next.next = new Node(10)
    })

    test('Genertate LinkedList for [2, 4, 6, 8, 10]', () => {
        const input = [2, 4, 6, 8, 10]
        expect(toNodes(input)).toEqual(head)
    })

    test('Reverse a LinkedList', () => {
        const reversedHead = toNodes([10, 8, 6, 4, 2])
        expect(inPlaceLinkedListReversal.reverse(head)).toEqual(reversedHead)
    })

    test('Reverse a Sub-list', () => {
        const p = 2, q = 4
        const head = toNodes([1, 2, 3, 4, 5])
        const reversedHead = toNodes([1, 4, 3, 2, 5])
        expect(inPlaceLinkedListReversal.reverseSubList(head, p, q)).toEqual(reversedHead)
    })

    test('Reverse every K-element Sub-list', () => {
        const k = 3
        const head = toNodes([1, 2, 3, 4, 5, 6, 7, 8])
        const reversedHead = toNodes([3, 2, 1, 6, 5, 4, 8, 7])
        expect(inPlaceLinkedListReversal.reverseEveryKElementSubList(head, k)).toEqual(reversedHead)
    })

    test('Reverse alternating K-element Sub-list', () => {
        const k = 2
        const head = toNodes([1, 2, 3, 4, 5, 6, 7, 8])
        const reversedHead = toNodes([2, 1, 3, 4, 6, 5, 7, 8])
        expect(inPlaceLinkedListReversal.reverseAlternatingKElementSubList(head, k)).toEqual(reversedHead)
    })

    test('Rotate a LinkedList', () => {
        const k = 3
        const head = toNodes([1, 2, 3, 4, 5, 6])
        const reversedHead = toNodes([4, 5, 6, 1, 2, 3])
        expect(inPlaceLinkedListReversal.rotateLinkedList(head, k)).toEqual(reversedHead)
    })
})