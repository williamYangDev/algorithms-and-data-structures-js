class Node {
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }
}

class HappyNumber {
    constructor(value) {
        this.value = value
    }

    next() {
        let num = this.value
        let sum = 0
        while (num > 0) {
            sum += Math.pow(num % 10, 2)
            num = parseInt(num / 10)
        }
        this.value = sum
        return this
    }
}

const fastSlowPointer = {
    hasCycle: head => {
        let fast = head
        let slow = head
        while (fast !== null && fast.next !== null) {
            slow = slow.next
            fast = fast.next.next
            if (slow === fast) {
                return true
            }
        }
        return false
    },

    findCycleLength: head => {
        let slow = head
        let fast = head
        while (fast !== null && fast.next !== null) {
            slow = slow.next
            fast = fast.next.next
            if (slow === fast) {
                return fastSlowPointer.calculateCycleLength(slow)
            }
        }
        return 0
    },

    calculateCycleLength: slow => {
        let current = slow
        let cycleLength = 0
        // eslint-disable-next-line no-constant-condition
        while (true) {
            current = current.next
            cycleLength += 1
            if (current === slow) {
                break
            }
        }
        return cycleLength
    },

    findCycleStart: head => {
        let pointer1 = head
        let pointer2 = head
        let cycleLength = fastSlowPointer.findCycleLength(head)

        while (cycleLength > 0) {
            pointer1 = pointer1.next
            cycleLength -= 1
        }

        while (pointer1 !== pointer2) {
            pointer1 = pointer1.next
            pointer2 = pointer2.next
        }

        return pointer1
    },

    findHappyNumber: num => {
        let slow = new HappyNumber(num)
        let fast = new HappyNumber(num)
        while (fast.value !== 1 && fast.next().value !== 1) {
            slow = slow.next()
            fast = fast.next().next()
            if (slow.value === fast.value) {
                return false
            }
        }
        return true
    },

    findMiddleOfLinkedList: head => {
        let slow = head
        let fast = head
        while (fast !== null && fast.next !== null) {
            slow = slow.next
            fast = fast.next.next
        }
        return slow
    },

    isPalindromicLinkedList: head => {
        let secondHalfHead = fastSlowPointer.reverse(
            fastSlowPointer.findMiddleOfLinkedList(head))
        let copySecondHalfHead = secondHalfHead

        while (head !== null && secondHalfHead !== null) {
            if (head.value !== secondHalfHead.value) {
                break
            }

            head = head.next
            secondHalfHead = secondHalfHead.next
        }
        fastSlowPointer.reverse(copySecondHalfHead)

        if (head === null || secondHalfHead === null) {
            return true
        }
        return false
    },

    reverse: head => {
        let prev = null
        let next
        while (head !== null) {
            next = head.next
            head.next = prev
            prev = head
            head = next
        }
        return prev
    },

    printLinkedList: head => {
        let result = ''
        while (head !== null) {
            result += (head.value + '->')
            head = head.next
        }
        result += 'null'
        console.log(result)
    },

    reorder: head => {
        if (head === null || head.next === null) {
            return
        }

        let firstHalfHead = head
        let secondHalfHead = fastSlowPointer.reverse(
            fastSlowPointer.findMiddleOfLinkedList(head))

        let temp
        while (firstHalfHead.next !== null && secondHalfHead.next !== null) {
            temp = firstHalfHead.next
            firstHalfHead.next = secondHalfHead
            firstHalfHead = temp

            temp = secondHalfHead.next
            secondHalfHead.next = firstHalfHead
            secondHalfHead = temp
        }

        return head
    }
}

module.exports = { Node, HappyNumber, fastSlowPointer }