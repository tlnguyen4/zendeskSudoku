import React from 'react';
import { connect } from 'react-redux';
import Board from './Board.js';
import Buttons from './Buttons.js';
import './css/App.css';

let App =({ board, check, completed,
              setBoardClick, restartClick, numberInput, solveBoardClick, submitBoardClick  }) => {
    return (
        <div className={'board-location'}>
            <h2 className={'title'}>Thanh's Zendesk Sudoku</h2>
            <Board board={board} check={check} completed={completed} numberInput={numberInput}/>
            <Buttons
                setBoard={() => setBoardClick()}
                restart={() => restartClick()}
                solve={() => solveBoardClick()}
                submit={() => submitBoardClick()}
            />
        </div>
    );
}

// Map state to props for app
const mapStateToProps = (state) => {
    return {
        board: state.board,
        check: state.check,
        completed: state.completed
    }
}

// Map functions to props for app
const mapDispatchToProps = (dispatch) => {
    return {
        setBoardClick: () => {
            dispatch({type: 'SETUP_BOARD'})
        },
        restartClick: () => {
            dispatch({type: 'RESTART'})
        },
        numberInput: (location, value) => {
            dispatch({type: 'NUMBER_INPUT', location, value})
        },
        solveBoardClick: () => {
            dispatch({type: 'SOLVE'})
        },
        submitBoardClick: () => {
            dispatch({type: 'SUBMIT'})
        }
    }
}

// Connecting to redux to keep states in one place
export default connect(mapStateToProps, mapDispatchToProps)(App)
