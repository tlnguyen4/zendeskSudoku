import React from 'react';
import './css/Tile.css';

let TileEmpty = ({ value, numberInput}) => {
    return (
        <div>
            <input className={'number-incorrect'}
                   value={value < 0 ? value * -1 : ''}
                   onChange={(e) => numberInput(e.target.value)}/>
        </div>
    )
}

export default TileEmpty;