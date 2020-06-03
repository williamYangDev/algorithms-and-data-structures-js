const cyclicSort = {
    sort: arr => {
        let i = 0
        while (i < arr.length) {
            const j = arr[i] - 1
            if (arr[i] !== arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
            } else {
                i += 1
            }
        }
        return arr
    },

    findMissingNum: nums => {
        let i = 0
        let n = nums.length
        while (i < n) {
            const j = nums[i]
            if (nums[i] < n && nums[i] !== nums[j]) {
                [nums[j], nums[i]] = [nums[i], nums[j]]
            } else {
                i += 1
            }
        }

        for (let i = 0; i < n; i++) {
            if (nums[i] !== i) {
                return i
            }
        }

        return n
    },

    findAllMissingNums: nums => {
        const result = []
        let i = 0
        let n = nums.length
        while (i < n) {
            const j = nums[i] - 1
            if (nums[i] !== nums[j]) {
                [nums[j], nums[i]] = [nums[i], nums[j]]
            } else {
                i += 1
            }
        }

        for (let i = 0; i < n; i++) {
            if (nums[i] !== i + 1) {
                result.push(i + 1)
            }
        }

        return result
    },

    findDuplicateNum: nums => {
        let i = 0
        let n = nums.length
        while (i < n) {
            const j = nums[i] - 1
            if (nums[i] !== nums[j]) {
                [nums[j], nums[i]] = [nums[i], nums[j]]
            } else {
                i += 1
            }
        }

        for (let i = 0; i < n; i++) {
            if (nums[i] !== i + 1) {
                return nums[i]
            }
        }
    },

    findAllDuplicateNums: nums => {
        let n = nums.length
        let i = 0
        while (i < n) {
            const j = nums[i] - 1
            if (nums[i] !== nums[j]) {
                [nums[j], nums[i]] = [nums[i], nums[j]]
            } else {
                i += 1
            }
        }

        const duplicateNums = []
        for (let i = 0; i < n; i++) {
            if (nums[i] !== i + 1) {
                duplicateNums.push(nums[i])
            }
        }

        return duplicateNums.sort()
    },

    findCorruptPair: nums => {
        let n = nums.length
        let i = 0
        while (i < n) {
            const j = nums[i] - 1
            if (nums[i] !== nums[j]) {
                [nums[j], nums[i]] = [nums[i], nums[j]]
            } else {
                i += 1
            }
        }

        for (let i = 0; i < n; i++) {
            if (nums[i] !== i + 1) {
                return [nums[i], (i + 1)]
            }
        }
    },

    findSmallestMissingPositiveNumber: nums => {
        let n = nums.length
        let i = 0
        while (i < n) {
            const j = nums[i] - 1
            if (j >= 0 && nums[i] !== nums[j]) {
                [nums[j], nums[i]] = [nums[i], nums[j]]
            } else {
                i += 1
            }
        }

        for (let i = 0; i < n; i++) {
            if (nums[i] !== i + 1) {
                return i + 1
            }
        }
    }
}

module.exports = cyclicSort