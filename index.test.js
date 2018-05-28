const { five, board, boardReady } = require('./index');

test('checks if five exists.', doesFiveExist);
test('checks if board exists.', doesBoardExist);
test('checks if boardReady function exists.', doesBoardReadyExist);

function doesFiveExist(){
  expect(five).toBeDefined();
}

function doesBoardExist(){
  expect(board).toBeDefined();
}

function doesBoardReadyExist(){
  expect(boardReady).toBeDefined();
}
