const windowSlide = require('./slide_window')

describe('Average of all subarrays of size K', () => {
    test('Input: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5. Output: [2.2, 2.8, 2.4, 3.6, 2.8]', () => {
        const arr = [1, 3, 2, 6, -1, 4, 1, 8, 2]
        const K = 5
        expect(windowSlide.averageOfAllSubarraysOfSizeK(K, arr))
            .toEqual([2.2, 2.8, 2.4, 3.6, 2.8])
    })
})

describe('Maximum sum subarray of size K', () => {
    test('Input: [2, 1, 5, 1, 3, 2], k=3. Output: 9', () => {
        const arr = [2, 1, 5, 1, 3, 2]
        const K = 3
        expect(windowSlide.maximumSumSubarrayOfSizeK(K, arr)).toEqual(9)
    })

    test('Input: [2, 3, 4, 1, 5], k=2. Output: 7', () => {
        const arr = [2, 3, 4, 1, 5]
        const K = 2
        expect(windowSlide.maximumSumSubarrayOfSizeK(K, arr)).toEqual(7)
    })

})

describe('Smallest subarray whose sum is greater than or equal to ‘S’', () => {
    test('Input: [2, 1, 5, 2, 3, 2], S=7. Output: 2', () => {
        const arr = [2, 1, 5, 2, 3, 2]
        const S = 7
        expect(windowSlide.smallestSubarrayWithGivenSum(S, arr)).toEqual(2)
    })

    test('Input: [2, 1, 5, 2, 8], S=7. Output: 1', () => {
        const arr = [2, 1, 5, 2, 8]
        const S = 7
        expect(windowSlide.smallestSubarrayWithGivenSum(S, arr)).toEqual(1)
    })

    test('[3, 4, 1, 1, 6], S=8. Output: 3', () => {
        const arr = [3, 4, 1, 1, 6]
        const S = 8
        expect(windowSlide.smallestSubarrayWithGivenSum(S, arr)).toEqual(3)
    })
})

describe('Longest substring with no more than K distinct characters', () => {
    test('Input: String="araaci", K=2. Output: 4', () => {
        const str = 'araaci'
        const K = 2
        expect(windowSlide.longestSubstringWithNoMoreThenKDistinctChar(K, str)).toEqual(4)
    })

    test('Input: String="araaci", K=1. Output: 2', () => {
        const str = 'araaci'
        const K = 1
        expect(windowSlide.longestSubstringWithNoMoreThenKDistinctChar(K, str)).toEqual(2)
    })

    test('Input: String="cbbebi", K=3. Output: 5', () => {
        const str = 'cbbebi'
        const K = 3
        expect(windowSlide.longestSubstringWithNoMoreThenKDistinctChar(K, str)).toEqual(5)
    })
})

// https://www.educative.io/courses/grokking-the-coding-interview/Bn2KLlOR0lQ
describe('Fruits into Baskets', () => {
    test("Input: Fruit=['A', 'B', 'C', 'A', 'C']. Output: 3", () => {
        const fruits = ['A', 'B', 'C', 'A', 'C']
        const B = 2
        expect(windowSlide.fruitsIntoBaskets(B, fruits)).toEqual(3)
    })

    test("Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']. Output: 5", () => {
        const fruits = ['A', 'B', 'C', 'B', 'B', 'C']
        const B = 2
        expect(windowSlide.fruitsIntoBaskets(B, fruits)).toEqual(5)
    })
})