import React, { Component } from 'react';
import './css/TileEmpty.css';

class TileEmpty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cellNumber: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({cellNumber: event.target.cellNumber});
    }

    render () {
        return (
            <div>
                <input className={'number-text'}
                       type="text"
                       value={this.state.cellNumber}
                       onChange={this.handleChange}
                />
            </div>
        )
    }
}

export default TileEmpty;