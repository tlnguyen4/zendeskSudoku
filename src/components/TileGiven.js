import React, { Component } from 'react';
import './css/Tile.css';

class TileGiven extends Component {
    render () {
        return (
            <div>{this.props.value > 0 ? <div className={'tile-font'}>{this.props.value}</div> :
                <div className={'number-correct'}>{this.props.value * -1}</div>}</div>
        )
    }
}

export default TileGiven;