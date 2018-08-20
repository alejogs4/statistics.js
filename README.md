# statistics.js
Statistics is a library to get data for describe the behavior of many data sets

The library has one class to get every data of decriptive statistics

```javascript
  const { DescriptiveStatistics } = require('@alejogs4/statistics')

  const proof = new DescriptiveStatistics(array)
```

The array should be an array of numbers

## DescriptiveStatistics methods

### avg
Should return the average of data set

### mode
Take your set of data and return the most repeated value

### median
Get the value that divide the sample in two parts

### percentile
Get the percentile of data set
This function need one parameter that is the percent of your percentile

### iqr
Get the difference between percentile 75 and percentile 25

### range
Get the difference between the max element of your sample and the min element

### variance
Get the variance of the data respect their average

### standardDeviation
Get the standard deviation that is equal to square root of variance

### variationCoefficient
Get how many times the standard deviation is in the average
