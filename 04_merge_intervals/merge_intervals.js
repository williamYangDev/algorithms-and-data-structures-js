class Interval {
    constructor(start, end) {
        this.start = start
        this.end = end
    }

    getInterval() {
        return `[${this.start}, ${this.end}]`
    }
}

const mergeInterval = {
    toIntervals: arr => {
        return arr.map(element => new Interval(element[0], element[1]))
    },

    toArray: intervals => {
        return intervals.map(interval => [interval.start, interval.end])
    },

    merge: intervals => {
        if (intervals.length < 2) {
            return intervals
        }

        intervals.sort((a, b) => a.start - b.start)

        const mergedIntervals = []
        let start = intervals[0].start
        let end = intervals[0].end

        for (let i = 1; i < intervals.length; i++) {
            if (intervals[i].start <= end) {
                end = Math.max(end, intervals[i].end)
            } else {
                mergedIntervals.push(new Interval(start, end))
                start = intervals[i].start
                end = intervals[i].end
            }
        }

        mergedIntervals.push(new Interval(start, end))
        return mergedIntervals
    },

    isOverlap: intervals => {
        intervals.sort((a, b) => a.start - b.start)
        for (let i = 1; i < intervals.length; i++) {
            if (intervals[i].start <= intervals[i - 1].end) {
                return true
            }
        }
        return false
    },

    insert: (target, intervals) => {
        const merged = []
        let i = 0

        while (i < intervals.length && target.start > intervals[i].end) {
            merged.push(intervals[i])
            i += 1
        }

        while (i < intervals.length && intervals[i].start <= target.end) {
            target.start = Math.min(target.start, intervals[i].start)
            target.end = Math.max(target.end, intervals[i].end)
            i += 1
        }

        merged.push(target)

        while (i < intervals.length) {
            merged.push(intervals[i])
            i += 1
        }

        return merged
    },

    intersect: (intervals1, intervals2) => {
        const intersection = []
        let i = 0
        let j = 0
        while (i < intervals1.length && j < intervals2.length) {
            let aOverlapB = intervals1[i].start >= intervals2[j].start
                && intervals1[i].start <= intervals2[j].end
            let bOverlapA = intervals2[j].start >= intervals1[i].start
                && intervals2[j].start <= intervals1[i].end

            if (aOverlapB || bOverlapA) {
                intersection.push(new Interval(
                    Math.max(intervals1[i].start, intervals2[j].start),
                    Math.min(intervals1[i].end, intervals2[j].end)
                ))
            }

            if (intervals1[i].end < intervals2[j].end) {
                i += 1
            } else {
                j += 1
            }
        }
        return intersection
    },

    isConflict: appointments => {
        appointments.sort((a, b) => a.start - b.start)
        for (let i = 1; i < appointments.length; i++) {
            if (appointments[i].start < appointments[i - 1].end) {
                return false
            }
        }
        return true
    }
}

module.exports = { mergeInterval, Interval }