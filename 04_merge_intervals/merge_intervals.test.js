const { mergeInterval, Interval } = require('./merge_intervals')

describe('Merge Intervals', () => {
    it('accepts Intervals: [[1,4], [2,5], [7,9]], and should output: [[1,5], [7,9]]', () => {
        const intervals = mergeInterval.toIntervals([[1, 4], [2, 5], [7, 9]])
        const output = mergeInterval.toIntervals([[1, 5], [7, 9]])
        expect(mergeInterval.merge(intervals)).toEqual(output)
    })

    it('accepts Intervals: [[6,7], [2,4], [5,9]], and return [[2,4], [5,9]]', () => {
        const intervals = mergeInterval.toIntervals([[6, 7], [2, 4], [5, 9]])
        const output = mergeInterval.toIntervals([[2, 4], [5, 9]])
        expect(mergeInterval.merge(intervals)).toEqual(output)
    })

    it('accepts Intervals: [[1,4], [2,6], [3,5]], and return [[1,6]]', () => {
        const intervals = mergeInterval.toIntervals([[1, 4], [2, 6], [3, 5]])
        const output = mergeInterval.toIntervals([[1, 6]])
        expect(mergeInterval.merge(intervals)).toEqual(output)
    })
})

describe('Is Intervals Overlaped', () => {
    it('accepts Intervals: [[1,4], [2,5], [7,9]], return: true', () => {
        const intervals = mergeInterval.toIntervals([[1, 4], [2, 5], [7, 9]])
        expect(mergeInterval.isOverlap(intervals)).toBeTruthy()
    })
})

describe('Insert Interval', () => {
    it('accepts Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,6], and return [[1,3], [4,7], [8,12]]', () => {
        const intervals = mergeInterval.toIntervals([[1, 3], [5, 7], [8, 12]])
        const target = new Interval(4, 6)
        const output = mergeInterval.toIntervals([[1, 3], [4, 7], [8, 12]])
        expect(mergeInterval.insert(target, intervals)).toEqual(output)
    })
    it('accepts Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,10], and return [[1,3], [4,12]]', () => {
        const intervals = mergeInterval.toIntervals([[1, 3], [5, 7], [8, 12]])
        const target = new Interval(4, 10)
        const output = mergeInterval.toIntervals([[1, 3], [4, 12]])
        expect(mergeInterval.insert(target, intervals)).toEqual(output)
    })
    it('accepts Input: Intervals=[[2,3],[5,7]], New Interval=[1,4], and return [[1,4], [5,7]]', () => {
        const intervals = mergeInterval.toIntervals([[2, 3], [5, 7]])
        const target = new Interval(1, 4)
        const output = mergeInterval.toIntervals([[1, 4], [5, 7]])
        expect(mergeInterval.insert(target, intervals)).toEqual(output)
    })
})

describe('Intervals Intersection', () => {
    it('Input: arr1=[[1, 3], [5, 6], [7, 9]], arr2=[[2, 3], [5, 7]], Output: [2, 3], [5, 6], [7, 7]', () => {
        const intervals1 = mergeInterval.toIntervals([[1, 3], [5, 6], [7, 9]])
        const intervals2 = mergeInterval.toIntervals([[2, 3], [5, 7]])
        const output = mergeInterval.toIntervals([[2, 3], [5, 6], [7, 7]])
        expect(mergeInterval.intersect(intervals1, intervals2)).toEqual(output)
    })
    it('Input: arr1=[[1, 3], [5, 7], [9, 12]], arr2=[[5, 10]], Output: [5, 7], [9, 10]', () => {
        const intervals1 = mergeInterval.toIntervals([[1, 3], [5, 7], [9, 12]])
        const intervals2 = mergeInterval.toIntervals([[5, 10]])
        const output = mergeInterval.toIntervals([[5, 7], [9, 10]])
        expect(mergeInterval.intersect(intervals1, intervals2)).toEqual(output)
    })
})

describe('Conflicting Appointments', () => {
    it('Appointments: [[1,4], [2,5], [7,9]], Output: false', () => {
        const appointments = mergeInterval.toIntervals([[1, 4], [2, 5], [7, 9]])
        expect(mergeInterval.isConflict(appointments)).toBeFalsy()
    })

    it('Appointments: [[6,7], [2,4], [8,12]], Output: true', () => {
        const appointments = mergeInterval.toIntervals([[6, 7], [2, 4], [8, 12]])
        expect(mergeInterval.isConflict(appointments)).toBeTruthy()
    })
})