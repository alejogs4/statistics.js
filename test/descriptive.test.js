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

describe('Quantile', function() {
  it('Return the percentage of data that is fewer and 100 - percentage that is bigger', function() {
    const sample = new DescriptiveStatistics([3,3,1,5,7,8,9])
    assert.strictEqual(sample.quantile(35), 3.2, 'Should return 3.2')
  })
})
