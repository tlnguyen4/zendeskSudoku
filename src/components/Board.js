import React, { Component } from 'react';
import './css/Board.css';
import TileGiven from './TileGiven.js';
import TileEmpty from './TileEmpty.js';

class Board extends Component {
    render () {
        if (this.props.completed) alert("Congratulations! You solved it!");
        // Fill the table with row and columns of cells: empty for missing value indicated by -1, and unchangeable
        // cell for preset values
        console.log('this is board in board component: ', this.props.board);
        let board = [];
        for (let row = 0; row < 9; row++) {
            let cell = [];
            for (let col = 0; col < 9; col++){
                const locationInBoard = row * 9 + col;
                const val = this.props.board[locationInBoard];
                // Darken border of column 3 and 6 to make board looks like a sudoku board
                if (col === 3 || col === 6) {
                    cell.push(<td key={locationInBoard} className={'dark-col'}>{(val > 0) ?
                                    <TileGiven value={val}/> :
                                    <TileEmpty value={val}
                                               check={this.props.check[locationInBoard]}
                                               numberInput={(num) => this.props.numberInput(locationInBoard, num)}/>}
                                               </td>);
                } else {
                    cell.push(<td key={locationInBoard}>{(val > 0) ?
                                    <TileGiven value={val}/> :
                                    <TileEmpty value={val}
                                               check={this.props.check[locationInBoard]}
                                               numberInput={(num) => this.props.numberInput(locationInBoard, num)}/>}
                                               </td>);
                }
            }
            // Darken border of row 3 and 6
            if (row === 3 || row === 6) {
                board.push(<tr key={row} className={'dark-row'}>{cell}</tr>);
            } else {
                board.push(<tr key={row}>{cell}</tr>);
            }
        }

        return (
            <div className={"container"}>
                <table className={"table"}>
                    <tbody>{board}</tbody>
                </table>
            </div>
        );
    }
}

export default Board;