import React from 'react';
import './css/TileEmpty.css';

class TileEmpty extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({input: e.target.value});
        this.props.numberInput(e.target.value);
    }

    //this.props.value < 0 ? this.props.value * -1 : ''
    render() {
        return (
            <div>
                {console.log(this.props.value)}
                {(this.props.correct !== 1) ?
                    <input className={'number-incorrect'} value={(this.props.value ? this.props.value * -1 : this.state.input)} onChange={(e) => this.handleChange(e)}/> :
                    <input className={'number-correct'} value={(this.props.value ? this.props.value * -1 : this.state.input)} onChange={(e) => this.handleChange(e)} />}
            </div>
        )
    }
}

export default TileEmpty;