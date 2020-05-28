const twoPointers = {
    pairWithTargetSum: (target, arr) => {
        let left = 0
        let right = arr.length - 1
        let sum = 0
        while (left < right) {
            sum = arr[left] + arr[right]
            if (sum > target) {
                right -= 1
            } else if (sum < target) {
                left += 1
            } else {
                return [left, right]
            }
        }
        return [-1, -1]
    },

    removeDuplicates: arr => {
        let left = 0
        for (let right = 1; right < arr.length; right++) {
            if (arr[left] !== arr[right]) {
                left += 1
                arr[left] = arr[right]
            }
        }
        return left + 1
    },

    removeKeysFromUnsortedArray: (K, arr) => {
        let left = 0
        for (let right = 0; right < arr.length; right++) {
            if (arr[right] !== K) {
                arr[left] = arr[right]
                left += 1
            }
        }
        return left
    },

    squareSortedArray: arr => {
        const result = []
        let left = 0
        let right = arr.length - 1

        while (left <= right) {
            const sum = arr[left] + arr[right]
            if (sum >= 0) {
                result.unshift(Math.pow(arr[right], 2))
                right -= 1
            } else if (sum < 0) {
                result.unshift(Math.pow(arr[left], 2))
                left += 1
            }
        }

        return result
    },

    tripletSumToZere: arr => {
        const result = []
        arr.sort((x, y) => x - y)

        for (let i = 0; i < arr.length - 2; i++) {
            if (i > 0 && arr[i] === arr[i - 1]) {
                continue
            }

            let left = i + 1
            let right = arr.length - 1

            while (left < right) {
                let sum = arr[i] + arr[left] + arr[right]
                if (sum > 0) {
                    right -= 1
                } else if (sum < 0) {
                    left += 1
                } else {
                    result.push([arr[i], arr[left], arr[right]])
                    left += 1
                    right -= 1
                    while (left < right && arr[left] === arr[left - 1]) {
                        left += 1
                    }
                    while (left < right && arr[right] === arr[right + 1]) {
                        right -= 1
                    }
                }
            }
        }

        return result
    },

    tripletSumCloseToTarget: (T, arr) => {
        arr.sort((x, y) => x - y)

        let minDiff = Infinity
        for (let i = 0; i < arr.length; i++) {
            let left = i + 1
            let right = arr.length - 1
            let diff = Infinity
            while (left < right) {
                diff = T - arr[i] - arr[left] - arr[right]
                if (diff === 0) {
                    return T - diff
                }

                if (Math.abs(diff) < Math.abs(minDiff) ||
                    Math.abs(diff) === Math.abs(minDiff) && diff > minDiff) {
                    minDiff = diff
                }

                if (diff > 0) {
                    left += 1
                } else {
                    right -= 1
                }
            }

        }
        return T - minDiff
    },

    tripletsWithSmallerSum: (T, arr) => {
        arr.sort((x, y) => x - y)
        let triplets = 0
        for (let i = 0; i < arr.length; i++) {
            let left = i + 1
            let right = arr.length - 1
            while (left < right) {
                let diff = T - arr[i] - arr[left] - arr[right]
                if (diff > 0) {
                    triplets += right - left
                    left += 1
                } else {
                    right -= 1
                }
            }
        }
        return triplets
    },

    subarraysWithProductLessThanATarget: (T, arr) => {
        const subarrs = []
        // [2, 5, 3, 10]
        for (let right = 0; right < arr.length; right++) {
            let product = 1
            for (let left = right; left >= 0; left--) {
                product *= arr[left]
                if (product < T) {
                    subarrs.push(arr.slice(left, right + 1))
                } else {
                    break
                }
            }
        }
        return subarrs
    }
}

module.exports = twoPointers