import React, { Component } from 'react'
import store from "../model/store/index";
import * as Action from '../model/actions/index'

class Counter extends Component{

    constructor(props) {
        super(props);
        this.state = {
            key: this.props.id,
            value: store.getState()
        }
    }

    onDecrease = () =>  {
        store.dispatch(Action.decrement(this.state.key));
    }
    onIncrese = () =>  {
        store.dispatch(Action.increment(this.state.key));
    }

    render(){
        store.subscribe(() => 
            this.setState({
                value: store.getState()
            })
        );
        console.log(store.getState())
        return (
            <div>
            <h1 className="text-center mt-5">{store.getState()}</h1>
            <div>
                <button onClick = {this.onDecrease}>-</button>
                <mark>{store.getState().countersValues[this.state.key]}</mark>
                <button onClick = {this.onIncrese}>+</button>
            </div>
            </div>) ;     
    }
}
export default Counter;
