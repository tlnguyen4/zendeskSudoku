import React, { Component } from 'react';
import './css/Tile.css';

class TileGiven extends Component {
    render () {
        return (
            <div className={'tile-font'}>
                {this.props.value}
            </div>
        )
    }
}

export default TileGiven;