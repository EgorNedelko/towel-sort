module.exports = function towelSort (matrix) {
  let resultArr = []

  if (!matrix) return resultArr

  for (let i = 0; i < matrix.length; i++) {
    if (i === 0 || i % 2 === 0) {
      for (let y = 0; y < matrix[i].length; y++) {
        resultArr.push(matrix[i][y])
      } 
    } else if (i % 2 !== 0) {
      for (let y = matrix[i].length - 1; y >= 0; y--) {
        resultArr.push(matrix[i][y])
      }
    }
  }
  return resultArr
}
