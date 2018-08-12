class DescriptiveStatistics {
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
    return -1
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
      return this.sample[ (this.sample.length + 1) / 2 ]
    }
  }

  /**
   * Get the arimethic average of data set
   * @returns {Number} return the arimethics average
   */
  avg() {
    return this.sample.reduce((total, value) => total + value) / this.sample.length
  }

}

module.exports = DescriptiveStatistics