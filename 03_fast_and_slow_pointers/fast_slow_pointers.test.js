const { fastSlowPointer, Node } = require('./fast_slow_pointers')

let head = null

describe('Fast and Slow Pointers Instroduction', () => {

    beforeEach(() => {
        head = new Node(1)
        head.next = new Node(2)
        head.next.next = new Node(3)
        head.next.next.next = new Node(4)
        head.next.next.next.next = new Node(5)
        head.next.next.next.next.next = new Node(6)
    })

    describe('LinkedList Cycle', () => {
        it('should not have a cycle', () => {
            expect(fastSlowPointer.hasCycle(head)).toBeFalsy()
        })

        it("should have a cycle, when set the third node as the tail node's next node", () => {
            head.next.next.next.next.next.next = head.next.next;
            expect(fastSlowPointer.hasCycle(head)).toBeTruthy()
        })

        it('length is 4', () => {
            head.next.next.next.next.next.next = head.next.next;
            expect(fastSlowPointer.findCycleLength(head)).toEqual(4)
        })
    })

    describe('Start of LinkedList Cycle', () => {
        it('should start at the 3rd node', () => {
            head.next.next.next.next.next.next = head.next.next;
            const output = head.next.next
            expect(fastSlowPointer.findCycleStart(head)).toEqual(output)
        })
    })

    describe('Happy Number', () => {
        it('accepts 23 and return true', () => {
            expect(fastSlowPointer.findHappyNumber(23)).toBeTruthy()
        })

        it('accepts 12 and return false', () => {
            expect(fastSlowPointer.findHappyNumber(12)).toBeFalsy()
        })
    })

    describe('Middle of the LinkedList', () => {
        it('should return 4', () => {
            expect(fastSlowPointer.findMiddleOfLinkedList(head).value).toEqual(4)
        })

        it('should return 5', () => {
            head.next.next.next.next.next.next = new Node(7)
            head.next.next.next.next.next.next.next = new Node(8)
            expect(fastSlowPointer.findMiddleOfLinkedList(head).value).toEqual(5)
        })
    })
})

describe('Palindrome LinkedList', () => {
    const head = new Node(2)
    beforeEach(() => {
        head.next = new Node(4)
        head.next.next = new Node(6)
        head.next.next.next = new Node(4)
        head.next.next.next.next = new Node(2)
    })

    it('accepts input 2 -> 4 -> 6 -> 4 -> 2 -> null, and should return true', () => {
        expect(fastSlowPointer.isPalindromicLinkedList(head)).toBeTruthy()
    })

    it('accepts Input: 2 -> 4 -> 6 -> 4 -> 2 -> 2 -> null, and should return false', () => {
        head.next.next.next.next.next = new Node(2)
        expect(fastSlowPointer.isPalindromicLinkedList(head)).toBeFalsy()
    })
})


describe('Rearrange a LinkedList', () => {
    const head = new Node(2)
    beforeEach(() => {
        head.next = new Node(4)
        head.next.next = new Node(6)
        head.next.next.next = new Node(8)
        head.next.next.next.next = new Node(10)
    })

    it('accepts Input: 2 -> 4 -> 6 -> 8 -> 10 -> null, ' +
        'and should return Output: 2 -> 10 -> 4 -> 8 -> 6 -> null', () => {
            const outputHead = new Node(2)
            outputHead.next = new Node(10)
            outputHead.next.next = new Node(4)
            outputHead.next.next.next = new Node(8)
            outputHead.next.next.next.next = new Node(6)

            expect(fastSlowPointer.reorder(head)).toStrictEqual(outputHead)
        })

    it('accepts Input: 2 -> 4 -> 6 -> 8 -> 10 -> 12 -> null ' +
        'and should return 2 -> 12 -> 4 -> 10 -> 6 -> 8 -> null ', () => {
            const outputHead = new Node(2)
            outputHead.next = new Node(12)
            outputHead.next.next = new Node(4)
            outputHead.next.next.next = new Node(10)
            outputHead.next.next.next.next = new Node(6)
            outputHead.next.next.next.next.next = new Node(8)

            head.next.next.next.next.next = new Node(12)
            expect(fastSlowPointer.reorder(head)).toStrictEqual(outputHead)
        })
})
