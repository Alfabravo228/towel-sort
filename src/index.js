module.exports = function towelSort(matrix) {
  if (!Array.isArray(matrix) || matrix.length == 0) {
    return [];
  }
  let f = 1;
  let n = matrix.length;
  let arr = [];
  for (let i = 0; i < n; i++) {
    if (f) {
      for (let j = 0; j < matrix[i].length; j++) {
        arr.push(matrix[i][j]);
      }
    } else {
      for (let j = matrix[i].length - 1; 0 <= j; j--) {
        arr.push(matrix[i][j]);
      }
    }
    f = !f;
  }
  return arr;
}