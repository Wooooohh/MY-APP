import React, { Component } from 'react'
import store from "../model/store/index";
import * as Action from '../model/actions/index'

class Counter extends Component{

    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
        
    }

    onDecrease = () =>  {
        store.dispatch(Action.decrement());
        this.setState((prevState) =>({
            value: prevState.value - 1
        }))
    }
    onIncrese = () =>  {
        store.dispatch(Action.increment());
        this.setState((prevState) =>({
            value: prevState.value + 1
        }))
    }

    // componentDidMount(){
    //     this.state.key = this.props.onRef()
    // }

    render(){
        return (
            <div>
                <button onClick= {this.onDecrease}>-</button>
                <mark>{this.state.value}</mark>
                <button onClick={this.onIncrese}>+</button>
            </div>) ;     
    }
}

export default Counter;
