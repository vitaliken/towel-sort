
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix && matrix.length !== 0) {
    let arr = [];
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 !== 0) {
        for (let j = matrix[i].length - 1; j >= 0; j--) {
          if (matrix[i][j] !== undefined) {
            arr.push(matrix[i][j]);
          }
        }
      } else {
        for (let j = 0; j < matrix[0].length; j++) {
          if (matrix[i][j] !== undefined) {
            arr.push(matrix[i][j]);
          }
        }
      }
    }

    return arr;
  }
  return [];
}
