// This is Initial board
const setBoard = [5, 3, 0, 0, 7, 0, 0, 0, 0,
                    6, 0, 0, 1, 9, 5, 0, 0, 0,
                    0, 9, 8, 0, 0, 0, 0, 6, 0,
                    8, 0, 0, 0, 6, 0, 0, 0, 3,
                    4, 0, 0, 8, 0, 3, 0, 0, 1,
                    7, 0, 0, 0, 2, 0, 0, 0, 6,
                    0, 6, 0, 0, 0, 0, 2, 8, 0,
                    0, 0, 0, 4, 1, 9, 0, 0, 5,
                    0, 0, 0, 0, 8, 0, 0, 7, 9];

// Solution board
const solvedBoard = [5, 3, -4, -6, 7, -8, -9, -1, -2,
                        6, -7, -2, 1, 9, 5, -3, -4, -8,
                        -1, 9, 8, -3, -4, -2, -5, 6, -7,
                        8, -5, -9, -7, 6, -1, -4, -2, 3,
                        4, -2, -6, 8, -5, 3, -7, -9, 1,
                        7, -1, -3, -9, 2, -4, -8, -5, 6,
                        -9, 6, -1, -5, -3, -7, 2, 8, -4,
                        -2, -8, -7, 4, 1, 9, -6, -3, 5,
                        -3, -4, -5, -2, 8, -6, -1, 7, 9];

// initial state of the game (userInput to go around React shallow checking)
const initialState = {board: [], check: [], solveClicked: false, completed: false, userInput: 0};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SETUP_BOARD':
            let newStateSetBoard = Object.assign({}, state);
            // set board to initial board
            if (newStateSetBoard.board.length === 0) newStateSetBoard.board = setBoard;
            else {
                // if a board exists, then change input (negative values) to 0 (neutral)
                for (let i = 0; i < 81; i++) {
                    if (newStateSetBoard.board[i] < 0)
                        newStateSetBoard.board[i] = 0;
                }
            }
            newStateSetBoard.check = Array(81).fill(0);
            newStateSetBoard.solveClicked = false;
            newStateSetBoard.completed = false;
            newStateSetBoard.userInput = 0;
            return newStateSetBoard;
        case 'RESTART':
            let newStateRestart = Object.assign({}, state);
            if (newStateRestart.board.length === 0) newStateRestart.board = []; // game didn't start
            else {
                for (let i = 0; i < 81; i++) {
                    if (newStateRestart.board[i] < 0)
                        newStateRestart.board[i] = 0; // reset player input to neutral
                }
            }
            newStateRestart.check = Array(81).fill(0);
            newStateRestart.solveClicked = false;
            newStateRestart.completed = false;
            newStateRestart.userInput = 0;
            return newStateRestart;
        case 'NUMBER_INPUT':
            let newStateInput = Object.assign({}, state);
            newStateInput.board[action.location] = action.value * -1; // negative to know which is user input
            newStateInput.userInput = newStateInput.userInput + 1;
            return newStateInput;
        case 'SUBMIT':
            let newStateSubmit = Object.assign({}, state);
            let wrongTileCount = 0; // number of wrong cells
            // for each cell, if cell value is negative (meaning it's an input), check if it's the same as the answer
            // if yes, then 1, else it's -1. If cell is 0 then it's empty. While checking submit, keep track if wrong
            // cells. Change completion status if nothing's wrong and all answers are player inputs
            for (let i = 0; i < 81; i++) {
                if (newStateSubmit.board[i] <= 0) {
                    if (newStateSubmit.board[i] === solvedBoard[i]) newStateSubmit.check[i] = 1;
                    else {
                        newStateSubmit.check[i] = -1;
                        wrongTileCount = wrongTileCount + 1;
                    }
                }
            }
            // if there's no wrong cell, answer wasn't revealed, and board isn't empty, then board is solved
            if (wrongTileCount === 0 && !newStateSubmit.solveClicked && newStateSubmit.board.length !== 0)
                newStateSubmit.completed = true;
            newStateSubmit.userInput = newStateSubmit.userInput + 1;
            return newStateSubmit;
        case 'SOLVE':
            let newStateSolve = Object.assign({}, state);
            if (newStateSolve.board.length === 0) newStateSolve.board = []; // there's nothing on board to solve
            else { // solution for current game from the answer array
                newStateSolve.check = Array(81).fill(1);
                for (let i = 0; i < 81; i++) {
                    newStateSolve.board[i] = solvedBoard[i];
                }
            }
            newStateSolve.solveClicked = true;
            return newStateSolve;
        default:
            return state;
    }
}

export default reducer;
