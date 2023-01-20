import React, { Component } from "react";
import PropTypes from 'prop-types'

class CounterDecrementButton extends Component {

    //can be removed
    constructor() {
        super();

        this.state = {
            counter : 0
        }
        this.decrement = this.decrement.bind(this)
    }

    render() {
        return (
            <div>
                {/* Below line can be used if we want to remove state */}
                {/* button onCLick = {() => {this.props.decrementMethod(this.props.by)}} */}
                <button onClick={this.decrement} className="decrement">-{this.props.by}</button>
            </div> 
        );
    }

    //can be removed
    decrement() {
        this.setState(
            (previousState) => {
                return { counter : previousState.counter - this.props.by }
            }
        )
        this.props.decrementMethod(this.props.by)
    }
}

CounterDecrementButton.defaultProps = {
    by : 7
}

CounterDecrementButton.propTypes = {
    by : PropTypes.number
}

export default CounterDecrementButton