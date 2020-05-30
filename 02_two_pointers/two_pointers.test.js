const twoPointer = require('./two_pointers')

describe('Pair with Target Sum', () => {
    test('Input: [1, 2, 3, 4, 6], target=6. Output: [1, 3]', () => {
        const arr = [1, 2, 3, 4, 6]
        const target = 6
        expect(twoPointer.pairWithTargetSum(target, arr)).toEqual([1, 3])
    })

    test('Input: [2, 5, 9, 11], target=11. Output: [0, 2]', () => {
        const arr = [2, 5, 9, 11]
        const target = 11
        expect(twoPointer.pairWithTargetSum(target, arr)).toEqual([0, 2])
    })
})

describe('Given an array of sorted numbers, remove all duplicates from it', () => {
    test('Input: [2, 3, 3, 3, 6, 9, 9]. Output: 4', () => {
        const arr = [2, 3, 3, 3, 6, 9, 9]
        expect(twoPointer.removeDuplicates(arr)).toEqual(4)
    })

    test('Input: [2, 2, 2, 11]. Output: 2', () => {
        const arr = [2, 2, 2, 11]
        expect(twoPointer.removeDuplicates(arr)).toEqual(2)
    })
})

describe('remove all instances of ‘key’ in-place in an unsorted array', () => {
    test('Input: [3, 2, 3, 6, 3, 10, 9, 3], Key=3. Output: 4', () => {
        const arr = [3, 2, 3, 6, 3, 10, 9, 3]
        const K = 3
        expect(twoPointer.removeKeysFromUnsortedArray(K, arr)).toEqual(4)
    })
    test('Input: [2, 11, 2, 2, 1], Key=2. Output: 2', () => {
        const arr = [2, 11, 2, 2, 1]
        const K = 2
        expect(twoPointer.removeKeysFromUnsortedArray(K, arr)).toEqual(2)
    })
})

describe('Squaring a Sorted Array', () => {
    test('Input: [-2, -1, 0, 2, 3]. Output: [0, 1, 4, 4, 9]', () => {
        const input = [-2, -1, 0, 2, 3]
        const output = [0, 1, 4, 4, 9]
        expect(twoPointer.squareSortedArray(input)).toEqual(output)
    })

    test('Input: [-3, -1, 0, 1, 2]. Output: [0 1 1 4 9]', () => {
        const input = [-3, -1, 0, 1, 2]
        const output = [0, 1, 1, 4, 9]
        expect(twoPointer.squareSortedArray(input)).toEqual(output)
    })
})

// https://www.educative.io/courses/grokking-the-coding-interview/gxk639mrr5r 
describe('Triplet Sum to Zero', () => {
    test('Input: [-3, 0, 1, 2, -1, 1, -2]. Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]', () => {
        const input = [-3, 0, 1, 2, -1, 1, -2]
        const output = [[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]
        expect(twoPointer.tripletSumToZere(input)).toEqual(output)
    })

    test('Input: [-5, 2, -1, -2, 3]. Output: [[-5, 2, 3], [-2, -1, 3]]', () => {
        const input = [-5, 2, -1, -2, 3]
        const output = [[-5, 2, 3], [-2, -1, 3]]
        expect(twoPointer.tripletSumToZere(input)).toEqual(output)
    })
})

describe('Triplet Sum Close to Target', () => {
    test('Input: [-2, 0, 1, 2], target=2. Output: 1', () => {
        const input = [-2, 0, 1, 2]
        const target = 2
        expect(twoPointer.tripletSumCloseToTarget(target, input)).toEqual(1)
    })
    test('Input: [-3, -1, 1, 2], target=1. Output: 0', () => {
        const input = [-3, -1, 1, 2]
        const target = 1
        expect(twoPointer.tripletSumCloseToTarget(target, input)).toEqual(0)
    })
    test('Input: [1, 0, 1, 1], target=100. Output: 3', () => {
        const input = [1, 0, 1, 1]
        const target = 100
        expect(twoPointer.tripletSumCloseToTarget(target, input)).toEqual(3)
    })
})


describe('Triplets with Smaller Sum', () => {
    test('Input: [-1, 0, 2, 3], target=3. Output: 2', () => {
        const T = 3
        const arr = [-1, 0, 2, 3]
        expect(twoPointer.tripletsWithSmallerSum(T, arr)).toEqual(2)
    })

    test('Input: [-1, 4, 2, 1, 3], target=5. Output: 4', () => {
        const T = 5
        const arr = [-1, 4, 2, 1, 3]
        expect(twoPointer.tripletsWithSmallerSum(T, arr)).toEqual(4)
    })
})

describe('Subarrays with Product Less than a Target', () => {
    test('Input: [2, 5, 3, 10], target=30. Output: [2], [5], [2, 5], [3], [5, 3], [10]', () => {
        const target = 30
        const input = [2, 5, 3, 10]
        const output = [[2], [5], [2, 5], [3], [5, 3], [10]]
        expect(twoPointer.subarraysWithProductLessThanATarget(target, input)).toEqual(output)
    })

    test('Input: [8, 2, 6, 5], target=50. Output: [8], [2], [8, 2], [6], [2, 6], [5], [6, 5]', () => {
        const target = 50
        const input = [8, 2, 6, 5]
        const output = [[8], [2], [8, 2], [6], [2, 6], [5], [6, 5]]
        expect(twoPointer.subarraysWithProductLessThanATarget(target, input)).toEqual(output)
    })
})

describe('Dutch National Flag Problem', () => {
    it('accept [1, 0, 2, 1, 0], and return [0 0 1 1 2]', () => {
        const input = [1, 0, 2, 1, 0]
        const output = [0, 0, 1, 1, 2]
        expect(twoPointer.dutchNationalFlagProblem(input)).toEqual(output)
    })

    it('accept [2, 2, 0, 1, 2, 0], and return [0, 0, 1, 2, 2, 2]', () => {
        const input = [2, 2, 0, 1, 2, 0]
        const output = [0, 0, 1, 2, 2, 2]
        expect(twoPointer.dutchNationalFlagProblem(input)).toEqual(output)
    })
})

describe('Quadruple Sum to Target', () => {
    it('accepts Input: [4, 1, 2, -1, 1, -3], target=1, should return [-3, -1, 1, 4], [-3, 1, 1, 2]', () => {
        const target = 1
        const input = [4, 1, 2, -1, 1, -3]
        const output = [[-3, -1, 1, 4], [-3, 1, 1, 2]]
        expect(twoPointer.quadrupleSumToTarget(target, input)).toEqual(output)
    })

    it('accepts Input: [2, 0, -1, 1, -2, 2], target=2, should return [-2, 0, 2, 2], [-1, 0, 1, 2]', () => {
        const target = 2
        const input = [2, 0, -1, 1, -2, 2]
        const output = [[-2, 0, 2, 2], [-1, 0, 1, 2]]
        expect(twoPointer.quadrupleSumToTarget(target, input)).toEqual(output)
    })
})

describe('Comparing Strings containing Backspaces', () => {
    it('accepts Input: str1="xy#z", str2="xzz#", should return true', () => {
        const str1 = "xy#z"
        const str2 = "xzz#"
        expect(twoPointer.compareStringContainBackspaces(str1, str2)).toBeTruthy()
    })

    it('accepts Input: str1="xy#z", str2="xyz#", should return false', () => {
        const str1 = "xy#z"
        const str2 = "xyz#"
        expect(twoPointer.compareStringContainBackspaces(str1, str2)).toBeFalsy()
    })

    it('accepts Input: str1="xp#", str2="xyz##", should return true', () => {
        const str1 = "xp#"
        const str2 = "xyz##"
        expect(twoPointer.compareStringContainBackspaces(str1, str2)).toBeTruthy()
    })

    it('accepts Input: str1="xywrrmp", str2="xywrrmu#p", should return true', () => {
        const str1 = "xywrrmp"
        const str2 = "xywrrmu#p"
        expect(twoPointer.compareStringContainBackspaces(str1, str2)).toBeTruthy()
    })
})

describe('Minimum Window Sort', () => {
    it('accepts [1, 2, 5, 3, 7, 10, 9, 12], should return 5', () => {
        const input = [1, 2, 5, 3, 7, 10, 9, 12]
        const output = 5
        expect(twoPointer.minimumWindowSort(input)).toEqual(output)
    })

    it('accept [1, 3, 2, 0, -1, 7, 10], should return 5', () => {
        const input = [1, 3, 2, 0, -1, 7, 10]
        const output = 5
        expect(twoPointer.minimumWindowSort(input)).toEqual(output)
    })

    it('accepts [1, 2, 3], and should return: 0', () => {
        const input = [1, 2, 3]
        const output = 0
        expect(twoPointer.minimumWindowSort(input)).toEqual(output)
    })

    it('accepts [3, 2, 1], and should return 3', () => {
        const input = [3, 2, 1]
        const output = 3
        expect(twoPointer.minimumWindowSort(input)).toEqual(output)
    })
})