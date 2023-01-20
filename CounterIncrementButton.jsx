import React, { Component } from "react";
import PropTypes from 'prop-types'

class CounterIncrementButton extends Component {
    
    constructor() {
        super();
        
        this.state = {
            counter: 0
        }
        
        this.increment = this.increment.bind(this);
    }

    render() {
        return (
            <div className="Counter">
                <button onClick={() => {this.props.incrementMethod(this.props.by) }}>+{ this.props.by}</button>
                {/* <span className="count">{this.state.counter}</span> */}
            </div>
        );
    }

    increment(){
        this.setState(
            (previousState) => {
                    // counter: this.state.counter + this.props.by
                return { counter: previousState.counter + this.props.by }
            }
        )

        this.props.incrementMethod(this.props.by);
    } 
}

CounterIncrementButton.defaultProps = {
    by: 3
}

CounterIncrementButton.propTypes = {
    by : PropTypes.number
}

export default CounterIncrementButton