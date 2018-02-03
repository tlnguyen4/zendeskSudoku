import React, { Component } from 'react';
import './css/TileEmpty.css';

class TileEmpty extends Component {
    handleChange(event) {
        this.props.numberInput(event.target.value * -1);
    }

    render () {
        return (
            <div>
                <input className={'number-text'}
                       type="text"
                       value={(this.props.value < 0 ? this.props.value * -1 : '')}
                       onChange={(e) => this.handleChange(e)}
                />
            </div>
        )
    }
}

export default TileEmpty;