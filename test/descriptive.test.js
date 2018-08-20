const DescriptiveStatistics = require('../src/DescriptiveStatistics')
const assert = require('assert')


describe('Mode', function() {
  it('Should return the most repeated value of the sample array', function() {
    const sample = new DescriptiveStatistics([3,1,2,7,4,5,2,2,3])
    assert.strictEqual(sample.mode(), 2, 'Should return 2')
  })
})

describe('Median', function() {
  it('Should return the value that part the array in two positions', function() {
    const sample = new DescriptiveStatistics([3,3,1,5,7,8,9])
    assert.equal(sample.median(), 5, 'Should return 5')
  })
})

describe('Avg', function() {
  it('Should return the average of data set', function() {
    const sample = new DescriptiveStatistics([3,3,1,5,7,8,9])
    assert.strictEqual(sample.avg(), 5.142857142857143, 'Should return five')
  })
})

describe('Percentile', function() {
  it('Return the percentage of data that is fewer and 100 - percentage that is bigger', function() {
    const sample = new DescriptiveStatistics([3,3,1,5,7,8,9])
    assert.strictEqual(sample.percentile(35), 3.2, 'Should return 3.2')
  })
})

describe('IQR', function() {
  it('Returns the difference between percentile 75 and 25', function() {
    const sample = new DescriptiveStatistics([3,3,1,5,7,8,9])
    assert.strictEqual(sample.iqr(), 4.5,'Should return 4.5')
  })
})

describe('Range', function() {
  it('Returns the difference between two xtreme values', function() {
    const sample = new DescriptiveStatistics([3,3,1,5,7,8,9])
    assert.strictEqual(sample.range(), 8, 'Should returns 8')
  })
})

describe('Variance', function() {
  it('Returns the variance of the elements respect their average', function() {
    const sample = new DescriptiveStatistics([3,3,1,5,7,8,9])
    assert.strictEqual(sample.variance(), 8.809523809523808, 'Should returns 8.80952381')
  })
})

describe('Standard deviation', function() {
  it('Returns the standard deviation that is equal to square root of variance', function() {
    const sample = new DescriptiveStatistics([3,3,1,5,7,8,9])
    assert.strictEqual(sample.standardDeviation(), 2.9680841985233184, 'Should return the standard deviation')
  })
})

describe('variation coefficient', function() {
  it('Get how many times the standard deviation is in the average', function() {
    const sample = new DescriptiveStatistics([3,3,1,5,7,8,9])
    assert.strictEqual(sample.variationCoefficient(), 57.71274830462008, 'Should return 57.71274830462008')
  })
})
