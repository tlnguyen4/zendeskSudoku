import React, { Component } from 'react';
import './css/TileGiven.css';

class TileGiven extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cellNumber: this.props.value,
        }
    }

    render () {
        return (
            <div>
                {this.state.cellNumber}
            </div>
        )
    }
}

export default TileGiven;