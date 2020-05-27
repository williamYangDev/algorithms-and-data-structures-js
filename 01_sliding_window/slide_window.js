const windowSlide = {
    averageOfAllSubarraysOfSizeK: (K, arr) => {
        const result = []
        let windowSum = 0
        let windowStart = 0

        for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
            windowSum += arr[windowEnd]
            if (windowEnd >= K - 1) {
                result.push(windowSum / K)
                windowSum -= arr[windowStart]
                windowStart += 1
            }
        }

        return result
    },

    maximumSumSubarrayOfSizeK: (K, arr) => {
        let max = 0
        let sum = 0
        let start = 0

        for (let end = 0; end < arr.length; end++) {
            sum += arr[end]
            if (end >= K - 1) {
                max = Math.max(sum, max)
                sum -= arr[start]
                start += 1
            }
        }

        return max
    },

    smallestSubarrayWithGivenSum: (S, arr) => {
        let minLen = Infinity
        let sum = 0
        let start = 0

        for (let end = 0; end < arr.length; end++) {
            sum += arr[end];
            while (sum >= S) {
                minLen = Math.min(minLen, end - start + 1)
                sum -= arr[start]
                start += 1
            }
        }

        return minLen === Infinity ? 0 : minLen
    },

    longestSubstringWithNoMoreThenKDistinctChar: (K, str) => {
        let maxLen = 0
        let start = 0
        let freq = {}

        for (let end = 0; end < str.length; end++) {
            freq[str[end]] = (freq[str[end]] || 0) + 1
            while (Object.keys(freq).length > K) {
                freq[str[start]] -= 1
                if (freq[str[start]] === 0) {
                    delete freq[str[start]]
                }
                start += 1
            }
            maxLen = Math.max(maxLen, end - start + 1)
        }

        return maxLen
    },

    fruitsIntoBaskets: (B, fruits) => {
        let maxLen = 0
        let start = 0
        let baskets = {}

        for (let end = 0; end < fruits.length; end++) {
            baskets[fruits[end]] = (baskets[fruits[end]] || 0) + 1
            while (Object.keys(baskets).length > B) {
                baskets[fruits[start]] -= 1
                if (!baskets[fruits[start]]) {
                    delete baskets[fruits[start]]
                }
                start += 1
            }
            maxLen = Math.max(maxLen, end - start + 1)
        }

        return maxLen
    }
}

module.exports = windowSlide
