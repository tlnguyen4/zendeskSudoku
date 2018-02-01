import React, { Component } from 'react';
import './css/App.css';

class Buttons extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.setBoard} className={'button'}>
                    Start a game
                </button>
                <button className={'button'}>Submit</button>
                <button className={'button'}>Solve</button>
                <button className={'button'}>Restart</button>
            </div>
        );
    }
}

export default Buttons;