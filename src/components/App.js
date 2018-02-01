import React from 'react';
import { connect } from 'react-redux';
import Board from './Board.js';
import Buttons from './Buttons.js';
import './css/App.css';

let App =({ board, setBoardClick  }) => {
    return (
        <div className={'App-board-location'}>
            <Board board={board} />
            <Buttons
                setBoard={() => setBoardClick()}
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
