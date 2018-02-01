import React, { Component } from 'react';
import './css/Board.css';
import TileGiven from './TileGiven.js';
import TileEmpty from './TileEmpty.js';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            board: this.props.board
        }
    }

    render () {
        let rows = [];
        for (let row = 0; row < 9; row++) {
            let cell = [];
            for (let col = 0; col < 9; col++){
                let cellID = row + '-' + col;
                const locationInBoard = row * 9 + col;
                const val = this.state.board[locationInBoard];
                if (col === 3 || col === 6) {
                    cell.push(<td key={cellID} className={'dark-col'}>
                        {(val === -1 ? <TileEmpty /> : <TileGiven value={val}/>)}
                    </td>);
                } else {
                    cell.push(<td key={cellID}>
                        {(val === -1 ? <TileEmpty /> : <TileGiven value={val}/>)}
                    </td>);
                }
            }
            if (row === 3 || row === 6) {
                rows.push(<tr key={row} className={'dark-row'}>{cell}</tr>);
            } else {
                rows.push(<tr key={row}>{cell}</tr>);
            }
        }

        return (
            <div className={"container"}>
                <table className={"table"}>
                    <tbody>{rows}</tbody>
                </table>
            </div>
        );
    }
}

export default Board;