/*
Given a 2d matrix of 1s (land) and 0s (swimming pools), write an algorithm that counts the number of swimming pools. A swimming pool can be classified as a group of 0s that connect either vertically or horizontally (diagonal 0s don't connect).

Example:
[
  [1,0,0],
  [0,1,0],
  [0,0,1]
]
return 2

Example:
[
  [0,1,1,0],
  [1,0,0,1],
  [1,1,1,0],
  [1,0,0,0]
]
return 4
 */

const count_swimming_pools = matrix => {
  let result = 0;

  let row = matrix.length;
  let col = matrix[0].length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] === 0) {
        result++;
        dfs(matrix, row, col, i, j);
      }
    }
  }

  return result;
};

const dfs = (matrix, row, col, i, j) => {
  if (i >= row || j >= col || i < 0 || j < 0 || matrix[i][j] === 1) {
    return;
  }

  matrix[i][j] = 1;

  dfs(matrix, row, col, i + 1, j);
  dfs(matrix, row, col, i - 1, j);
  dfs(matrix, row, col, i, j + 1);
  dfs(matrix, row, col, i, j - 1);
};

export default count_swimming_pools;
