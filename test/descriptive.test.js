const DescriptiveStatistics = require('../src/DescriptiveStatistics')
const assert = require('assert')

/**
 * Data set of example
 */
const sample = new DescriptiveStatistics([3,3,1,5,7,8,9])

describe('Median', function() {
  it('Should return the value that part the array in two positions', function() {
    assert.equal(sample.median(), 5, 'Should return 5')
  })
})

describe('Avg', function() {
  it('Should return the average of data set', function() {
    assert.strictEqual(sample.avg(), 5.142857142857143, 'Should return five')
  })
})

describe('Quantile', function() {
  it('Return the percentage of data that is fewer and 100 - percentage that is bigger', function() {
    assert.strictEqual(sample.quantile(35), 3.2, 'Should return 3.2')
  })
})
