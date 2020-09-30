
module.exports = function towelSort(matrix) {
  let result = [];

  for (let i = 0; matrix && i < matrix.length; i++) {
    i % 2 === 0 ? result.push(...matrix[i]) : result.push(...matrix[i].reverse());
  }

  return result;
}
