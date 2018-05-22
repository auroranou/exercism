const assert = require('assert');

/*
http://exercism.io/exercises/javascript/transpose/readme

Rows become columns and columns become rows. See https://en.wikipedia.org/wiki/Transpose.

If the input has rows of different lengths, this is to be solved as follows:

- Pad to the left with spaces.
- Don't pad to the right.

*/

// arr[row][col]
function transpose(arr) {
  let transposed = [];

  const lengths = arr.map(a => a.length);
  const maxInputWidth = Math.max.apply(null, lengths);

  let curInputColumn = 0;
  while (curInputColumn < maxInputWidth) {
    let transposedRow = [];
    let curInputRow = 0;
    while (curInputRow < arr.length) {
      transposedRow.push(arr[curInputRow][curInputColumn] || ' ');
      curInputRow += 1;
    }
    transposed.push(transposedRow);
    curInputColumn += 1;
  }

  return transposed;
}

function test() {
  assert.deepEqual(transpose([]), []);

  // FIXME
  // const testEmptyRows = [[]];
  // const expectedEmptyRows = [[]];
  // assert.deepEqual(transpose(testEmptyRows), expectedEmptyRows);

  assert.deepEqual(transpose([
    ['A', 'B', 'C'],
    ['D', 'E', 'F']
  ]),
    [
      ['A', 'D'],
      ['B', 'E'],
      ['C', 'F']
    ]);

  assert.deepEqual(transpose([
    ['A', 'B', 'C'],
    ['D', 'E']
  ]),
    [
      ['A', 'D'],
      ['B', 'E'],
      ['C', ' ']
    ]);

  assert.deepEqual(transpose([
    ['A', 'B'],
    ['D', 'E', 'F']
  ]),
    [
      ['A', 'D'],
      ['B', 'E'],
      [' ', 'F']
    ]);

  console.log('All tests passed!');
}

test();