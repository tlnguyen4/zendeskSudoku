import React, { Component } from 'react';
import './css/TileGiven.css';

class TileGiven extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render () {
        return (
            <div>
                {this.props.value}
            </div>
        )
    }
}

export default TileGiven;