import React from 'react';
import './css/TileEmpty.css';

let TileEmpty = ({ value, correct, numberInput}) => {
    return (
        <div>
            {(correct !== 1) ?
                <input className={'number-incorrect'} value={(value < 0 ? value * -1 : '')} onChange={(e) => numberInput(e.target.value)}/> :
                <input className={'number-correct'} value={(value < 0 ? value * -1 : '')} onChange={(e) => numberInput(e.target.value)} />}
        </div>
    )
}

export default TileEmpty;