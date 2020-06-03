class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }

    get_list() {
        let result = "";
        let temp = this;
        while (temp !== null) {
            result += temp.value + " ";
            temp = temp.next;
        }
        return result;
    }
}

const toNodes = arr => {
    let head, current
    let i = 0
    while (i < arr.length) {
        if (!head) {
            head = new Node(arr[i])
            current = head
        } else {
            current.next = new Node(arr[i])
            current = current.next
        }
        i += 1
    }
    return head
}

const inPlaceLinkedListReversal = {
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

    reverseSubList: (head, p, q) => {
        if (p === q) return head

        let current = head
        let prev, next
        let i = 1

        while (current !== null && i < p) {
            prev = current
            current = current.next
            i += 1
        }

        let [beforePNode, pNode] = [prev, current]

        while (current !== null) {
            next = current.next
            current.next = prev
            prev = current
            current = next
            i += 1
            if (i > q) break
        }

        if (beforePNode !== null) {
            beforePNode.next = prev
        } else {
            head = prev
        }
        pNode.next = current

        return head
    },

    reverseEveryKElementSubList: (head, k) => {
        if (k <= 1 || head === null) return head

        let current = head
        let end = null
        while (current !== null) {
            const prevEnd = end
            end = current

            let i = 0
            let prev = null, next = null
            while (current !== null && i < k) {
                next = current.next
                current.next = prev
                prev = current
                current = next
                i += 1
            }

            const start = prev
            if (prevEnd !== null) {
                prevEnd.next = start
            } else {
                head = start
            }
        }
        end.next = null

        return head
    },

    reverseAlternatingKElementSubList: (head, k) => {
        if (k <= 1 || head === null) return head

        let current = head
        let end = null, prev = null
        while (current !== null) {
            const prevEnd = prev
            end = current

            let i = 0
            let next = null
            while (current !== null && i < k) {
                next = current.next
                current.next = prev
                prev = current
                current = next
                i += 1
            }

            end.next = current

            const start = prev
            if (prevEnd !== null) {
                prevEnd.next = start
            } else {
                head = start
            }

            let j = 0
            while (current !== null && j < k) {
                prev = current
                current = current.next
                j += 1
            }
        }
        return head
    },

    rotateLinkedList: (head, k) => {
        if (head === null || head.next === null || k === 0) return head

        let current = head
        let start = current
        let prev = null

        let i = 0
        while (current !== null && i < k) {
            prev = current
            current = current.next
            i += 1
        }
        prev.next = null
        head = current

        while (current !== null) {
            prev = current
            current = current.next
        }
        prev.next = start

        return head
    }
}

module.exports = { inPlaceLinkedListReversal, Node, toNodes }