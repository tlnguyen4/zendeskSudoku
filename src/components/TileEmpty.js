import React from 'react';
import './css/TileEmpty.css';

class TileEmpty extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }

    handleChange(e) {
        this.setState({input: e.target.value});
        this.props.numberInput(e.target.value);
    }

    //this.props.value < 0 ? this.props.value * -1 : ''
    render() {
        return (
            <div>
                {(this.props.correct !== 1) ?
                    <input className={'number-incorrect'} value={this.state.input} onChange={(e) => this.handleChange(e)}/> :
                    <input className={'number-correct'} value={this.state.input} onChange={(e) => this.handleChange(e)} />}
            </div>
        )
    }
}

export default TileEmpty;