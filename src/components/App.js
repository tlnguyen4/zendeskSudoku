import React from 'react';
import { connect } from 'react-redux';
import Board from './Board.js';
import Buttons from './Buttons.js';
import './css/App.css';

let App =({ board, setBoardClick, restartClick, numberInput, solveBoardClick  }) => {
    return (
        <div className={'board-location'}>
            <h2 className={'title'}>Thanh's Zendesk Sudoku</h2>
            <Board board={board} numberInput={numberInput}/>
            <Buttons
                setBoard={() => setBoardClick()}
                restart={() => restartClick()}
                solve={() => solveBoardClick()}
            />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        board: state
    }
}

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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
