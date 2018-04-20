'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var readline = require('readline');

var BOARD_SIZE = 15;
var EMPTY = 0;
var ME = 1;
var OTHER = 2;
var START = 'START';
var PLACE = 'PLACE';
var DONE = 'DONE';
var TURN = 'TURN';
var BEGIN = 'BEGIN';
var END = 'END';

var board = new Array(BOARD_SIZE);

function start() {
  for (var i = 0; i < BOARD_SIZE; i++) {
    board[i] = new Array(BOARD_SIZE);
    for (var j = 0; j < BOARD_SIZE; j++) {
      board[i][j] = EMPTY;
    }
  }
  aiInit();
}

function aiInit() {}

function aiBegin(me) {
  for (var i = 0; i < BOARD_SIZE; i++) {
    for (var j = 0; j < BOARD_SIZE; j++) {
      if (EMPTY === board[i][j]) {
        return [i, j];
      }
    }
  }
  return [0, 0];
}

function aiTurn(me, x, y) {
  for (var i = 0; i < BOARD_SIZE; i++) {
    for (var j = 0; j < BOARD_SIZE; j++) {
      if (EMPTY === board[i][j]) {
        return [i, j];
      }
    }
  }
  return [0, 0];
}

readline.createInterface({
  input: process.stdin
}).on('line', function (line) {
  var args = line.split(' ');
  var command = args[0];
  if (command === START) {
    start();
  } else if (command === PLACE) {
    board[args[1]][args[2]] = args[3];
  } else if (command === DONE) {
    console.log('OK');
  } else if (command === BEGIN) {
    var _aiBegin = aiBegin(ME),
        _aiBegin2 = _slicedToArray(_aiBegin, 2),
        x = _aiBegin2[0],
        y = _aiBegin2[1];

    board[x][y] = ME;
    console.log(x, y);
  } else if (command === TURN) {
    board[args[1]][args[2]] = OTHER;

    var _aiTurn = aiTurn(ME, args[1], args[2]),
        _aiTurn2 = _slicedToArray(_aiTurn, 2),
        _x = _aiTurn2[0],
        _y = _aiTurn2[1];

    board[_x][_y] = ME;
    console.log(_x, _y);
  } else if (command === END) {
    process.exit(0);
  }
}).on('close', function () {
  process.exit(0);
});