import React, { Component } from 'react';
import './css/TileEmpty.css';

class TileEmpty extends Component {
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

export default TileEmpty;