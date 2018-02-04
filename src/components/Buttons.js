import React from 'react';
import './css/App.css';

let Buttons = ({ setBoard, restart, solve, submit }) => {
    return (
        <div>
            <button title={'Populate the board with a Sudoku game'}
                    onClick={setBoard}
                    className={'button'}>
                Start a game
            </button>
            <button title={'Submit the board when done or to check progress'}
                    onClick={submit}
                    className={'button'}>
                Submit
            </button>
            <button title={'Reveal the answer to the current board'}
                    onClick={solve}
                    className={'button'}>
                Solve
            </button>
            <button title={'Reset the board'}
                onClick={restart}
                className={'button'}>
                Restart
            </button>
        </div>
    );
}

export default Buttons;