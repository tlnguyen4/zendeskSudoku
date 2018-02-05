import React from 'react';
import './css/Tile.css';

let TileEmpty = ({ correct, value, numberInput}) => {
    return (
        <div>
            {(correct === 1) ?
                <input className={'number-correct'}
                       value={value < 0 ? value * -1 : ''}
                       onChange={(e) => numberInput(e.target.value)}/> :
                <input className={'number-incorrect'}
                       value={value < 0 ? value * -1 : ''}
                       onChange={(e) => numberInput(e.target.value)} />}
        </div>
    )
}

export default TileEmpty;