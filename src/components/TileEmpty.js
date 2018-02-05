import React, { Component } from 'react';
import './css/TileEmpty.css';

class TileEmpty extends Component {
    handleChange(event) {
        event.preventDefault();
        this.props.numberInput(event.target.value);
    }

    render () {
        return (
            <div>
                {(this.props.correct !== 1) ?
                    <input className={'number-incorrect'} value={(this.props.value < 0 ? this.props.value * -1 : '')} onChange={(e) => this.handleChange(e)}/> :
                    <input className={'number-correct'} value={(this.props.value < 0 ? this.props.value * -1 : '')} onChange={(e) => this.handleChange(e)} />}
            </div>
        )
    }
}

export default TileEmpty;