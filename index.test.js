const { five, board } = require('./index');

test('checks if five exists.', doesFiveExist);
test('checks if board exists.', doesBoardExist);

function doesFiveExist(){
  expect(five).toBeDefined();
}

function doesBoardExist(){
  expect(board).toBeDefined();
}
