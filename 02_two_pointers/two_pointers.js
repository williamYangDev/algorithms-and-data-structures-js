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
    },

    dutchNationalFlagProblem: arr => {
        let low = 0
        let high = arr.length - 1
        let i = 0
        while (i <= high) {
            if (arr[i] === 1) {
                i += 1
            } else if (arr[i] === 0) {
                [arr[low], arr[i]] = [arr[i], arr[low]]
                i += 1
                low += 1
            } else if (arr[i] === 2) {
                [arr[i], arr[high]] = [arr[high], arr[i]]
                high -= 1
            }
        }

        return arr
    },

    quadrupleSumToTarget: (T, arr) => {
        arr.sort((a, b) => a - b)
        const result = []
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                let left = j + 1
                let right = arr.length - 1
                while (left < right) {
                    let sum = arr[i] + arr[j] + arr[left] + arr[right]
                    if (sum === T) {
                        result.push([arr[i], arr[j], arr[left], arr[right]])
                        left += 1
                        right -= 1
                        while (left < right && arr[left] === arr[left - 1]) {
                            left += 1
                        }
                        while (left < right && arr[right] === arr[right + 1]) {
                            right -= 1
                        }
                    }

                    if (sum > T) {
                        right -= 1
                    } else {
                        left += 1
                    }
                }
            }
        }
        return result
    },

    compareStringContainBackspaces: (str1, str2) => {
        let i1 = str1.length - 1
        let i2 = str2.length - 1
        let c1 = 0
        let c2 = 0
        while (i1 >= 0 && i2 >= 0) {

            while (str1[i1] === '#' || c1 !== 0) {
                c1 += str1[i1] === '#' ? 1 : -1
                i1 -= 1
            }

            while (str2[i2] === '#' || c2 !== 0) {
                c2 += str2[i2] === '#' ? 1 : -1
                i2 -= 1
            }

            if (str1[i1] === str2[i2]) {
                i1 -= 1
                i2 -= 1
            } else {
                return false
            }
        }
        return i1 === i2 ? true : false
    },

    minimumWindowSort: arr => {
        let left = 0
        let right = arr.length - 1
        while (left + 1 < arr.length && arr[left] < arr[left + 1]) {
            left += 1
        }
        if (left === arr.length - 1) {
            return 0
        }
        while (right > 0 && arr[right - 1] < arr[right]) {
            right -= 1
        }
        if (left === 0 && right === arr.length - 1) {
            return arr.length
        }

        let [min, max] = [Infinity, -Infinity]
        for (let i = left; i <= right; i++) {
            min = Math.min(arr[i], min)
            max = Math.max(arr[i], max)
        }

        while (left > 0 && arr[left - 1] > min) {
            left -= 1
        }
        while (right + 1 < arr.length - 1 && max > arr[right + 1]) {
            right += 1
        }

        return right - left + 1
    }
}

module.exports = twoPointers