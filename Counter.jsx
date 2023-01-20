import React, { Component } from 'react';
import CounterDecrementButton from './CounterDecrementButton';
import CounterIncrementButton from './CounterIncrementButton';
import './Counter.css'

class Counter extends Component {
    //Initial state
    constructor() {
        
        super(); //need to add super () for making this ref available
        
        this.state = {//Setting intial state of the counter
            counter : 0
        }
        
        this.incrementParent = this.incrementParent.bind(this); //binding this ref to increment()
        this.decrementParent = this.decrementParent.bind(this); //binding this ref to increment()
        this.reset = this.reset.bind(this); //binding this ref to increment()
    }

    render(){
        return(
            <div className='counter'>
                {/* We are sending value/data and function/method as props below */}
                <div className='incdec'>
                    <CounterIncrementButton by={1} incrementMethod={this.incrementParent} />
                    <CounterIncrementButton by={5} incrementMethod={this.incrementParent}/>
                    <CounterIncrementButton by={10} incrementMethod={this.incrementParent} />
                </div>
                <div className='incdec'>
                    <CounterDecrementButton by={1} decrementMethod={this.decrementParent} />
                    <CounterDecrementButton by={5} decrementMethod={this.decrementParent} />
                    <CounterDecrementButton by={10} decrementMethod={this.decrementParent} />
                </div>
                <span className="count">{this.state.counter}</span>
                <div><button className='reset' onClick={this.reset}>Reset</button></div>
            </div>
        );
    }

    incrementParent(by){
        // console.log(`increment form child in parent- ${by}`)
        this.setState(
            (previousState) => {
                    // counter: this.state.counter + by OR
               return { counter: previousState.counter + by }
            }
        )
    }

    decrementParent(by) {
    
        this.setState(
            (prevState) => {
                return { counter : prevState.counter - by }
            }
        )
    }

    reset() {
        this.setState(
            {
                counter: 0
            } 
        )
    }
}

export default Counter;