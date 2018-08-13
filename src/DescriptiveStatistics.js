/**
 * Set of functions with the most comun operations of descriptive statistics
 */
class DescriptiveStatistics {
  /**
   * Sample must be a array of numbers to execute the operations
   * @param {Array} sample is a array of numbers
   */
  constructor(sample) {
    this.sample
    if(Array.isArray(sample)) {
      this.sample = sample.sort()
    }
    else {
      throw new Error('The sample is a array with your set of data')
    }
  }

  /**
   * Take your set of data and return the most repeated value
   * @returns {Number} most repeated value in the sample 
   */
  mode() {
    if(this.sample.length > 1) {

      let currentPosition = 0
      let lastPosition = this.sample.lastIndexOf(this.sample[currentPosition])
      let mostRepeated = 0
      let mode = undefined
      let amountOfTimesRepeated = (lastPosition - currentPosition) + 1

      while(this.sample[currentPosition] !== undefined) {
        if(mostRepeated < amountOfTimesRepeated) {
          mostRepeated = amountOfTimesRepeated
          mode = this.sample[currentPosition]
        }
        currentPosition = lastPosition + 1
        lastPosition = this.sample.lastIndexOf(this.sample[currentPosition])

        // Get the amount of time that the current value is repeated in the array
        const calcTimesRepeated = (lastPosition - currentPosition) + 1
        amountOfTimesRepeated =  calcTimesRepeated < amountOfTimesRepeated ? amountOfTimesRepeated : calcTimesRepeated
      }
      return amountOfTimesRepeated === 1 && this.sample.length > 1 ? undefined : mode
    }
    else if(this.sample.length === 1) {
      return this.sample[0]
    }
    return undefined 
  }

  /**
   * Get the value that divide the sample in two parts
   * @returns {Number} Number that divide the array
   */
  median() {
    if(this.sample.length === 0) return -1

    if( this.sample.length % 2 === 0 ) {
      const length = this.sample.length
      return (this.sample[ Math.floor(length / 2) ] + this.sample[ Math.floor((length / 2) + 1) ]) / 2
    }
    else {
      return this.sample[ ((this.sample.length + 1) / 2) - 1 ]
    }
  }

  /**
   * Get the arimethic average of data set
   * @returns {Number} return the arimethics average
   */
  avg() {
    return this.sample.reduce((total, value) => total + value) / this.sample.length
  }

  /**
   * Get the quantile of data set
   * @param {Number} percentage shold be a number between 1 and 100
   */
  quantile(percentage) {
    if(percentage > 100 || percentage < 1) {
      // Here throw the error message if the percentage parameter is incorrect
      throw new Error('The percentage value should be a number between 1 and 100')
    }
    else {
      /**
       * Get the i and h to return the quantile
       */
      const length = this.sample.length
      const i = (((length - 1) * percentage) / 100) + 1
      const h = Math.floor(i) - 1
      return this.sample[h] + (this.sample[h + 1] - this.sample[h]) * (i - (h + 1))
    }
  }

}

module.exports = DescriptiveStatistics