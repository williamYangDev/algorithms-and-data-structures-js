const cyclicSort = require("./cyclic_sort");

describe('Cyclic Sort', () => {
    test('Input: [3, 1, 5, 4, 2], Output: [1, 2, 3, 4, 5]', () => {
        const input = [3, 1, 5, 4, 2]
        const output = [1, 2, 3, 4, 5]
        expect(cyclicSort.sort(input)).toEqual(output)
    })

    test('Input: [1, 5, 6, 4, 3, 2], Output: [1, 2, 3, 4, 5, 6]', () => {
        const input = [1, 5, 6, 4, 3, 2]
        const output = [1, 2, 3, 4, 5, 6]
        expect(cyclicSort.sort(input)).toEqual(output)
    })
})

describe('Find the Missing Number', () => {
    test('Input: [4, 0, 3, 1], Output: 2', () => {
        const input = [4, 0, 3, 1]
        expect(cyclicSort.findMissingNum(input)).toEqual(2)
    })

    test('Input: [8, 3, 5, 2, 4, 6, 0, 1], Output: 7', () => {
        const input = [8, 3, 5, 2, 4, 6, 0, 1]
        expect(cyclicSort.findMissingNum(input)).toEqual(7)
    })
})

describe('Find all Missing Numbers', () => {
    test('Input: [2, 3, 1, 8, 2, 3, 5, 1], Output: 4, 6, 7', () => {
        const input = [2, 3, 1, 8, 2, 3, 5, 1]
        const output = [4, 6, 7]
        expect(cyclicSort.findAllMissingNums(input)).toEqual(output)
    })

    test('Input: [2, 4, 1, 2], Output: 3', () => {
        const input = [2, 4, 1, 2]
        const output = [3]
        expect(cyclicSort.findAllMissingNums(input)).toEqual(output)
    })

    test('Input: [2, 3, 2, 1], Output: 4', () => {
        const input = [2, 3, 2, 1]
        const output = [4]
        expect(cyclicSort.findAllMissingNums(input)).toEqual(output)
    })
})

describe('Find the Duplicate Number', () => {
    test('Input: [1, 4, 4, 3, 2], Output: 4', () => {
        const input = [1, 4, 4, 3, 2]
        expect(cyclicSort.findDuplicateNum(input)).toEqual(4)
    })

    test('Input: [2, 1, 3, 3, 5, 4], Output: 3', () => {
        const input = [2, 1, 3, 3, 5, 4]
        expect(cyclicSort.findDuplicateNum(input)).toEqual(3)
    })
})

describe('Find all Duplicate Numbers', () => {
    test('Input: [3, 4, 4, 5, 5], Output: [4, 5]', () => {
        const input = [3, 4, 4, 5, 5]
        const output = [4, 5]
        expect(cyclicSort.findAllDuplicateNums(input)).toEqual(output)
    })

    test('Input: [5, 4, 7, 2, 3, 5, 3], Output: [3, 5]', () => {
        const input = [5, 4, 7, 2, 3, 5, 3]
        const output = [3, 5]
        expect(cyclicSort.findAllDuplicateNums(input)).toEqual(output)
    })
})

describe('Find the Corrupt Pair', () => {
    test('Input: [3, 1, 2, 5, 2], Output: [2, 4]', () => {
        const input = [3, 1, 2, 5, 2]
        const output = [2, 4]
        expect(cyclicSort.findCorruptPair(input)).toEqual(output)
    })

    test('Input: [3, 1, 2, 3, 6, 4], Output: [3, 5]', () => {
        const input = [3, 1, 2, 3, 6, 4]
        const output = [3, 5]
        expect(cyclicSort.findCorruptPair(input)).toEqual(output)
    })
})

describe('Find the Smallest Missing Positive Number', () => {
    test('Input: [-3, 1, 5, 4, 2], Output: 3', () => {
        const input = [-3, 1, 5, 4, 2]
        expect(cyclicSort.findSmallestMissingPositiveNumber(input)).toEqual(3)
    })

    test('Input: [3, -2, 0, 1, 2] Output: 4', () => {
        const input = [3, -2, 0, 1, 2]
        expect(cyclicSort.findSmallestMissingPositiveNumber(input)).toEqual(4)
    })

    test('Input: [3, 2, 5, 1], Output: 4', () => {
        const input = [3, 2, 5, 1]
        expect(cyclicSort.findSmallestMissingPositiveNumber(input)).toEqual(4)
    })
})