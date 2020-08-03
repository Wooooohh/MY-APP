import React, { Component } from 'react'
import store from "../model/store/index";
import * as Action from '../model/actions/index'

class Counter extends Component{

    constructor(props) {
        super(props);
        this.state = {
            value: store.getState()
        }
        
    }

    reSet = () => {
        this.setState( {
            value: 0 
        });
    }

    onDecrease = () =>  {
        store.dispatch(Action.decrement(this));
        this.props.handleDecrease();
    }
    onIncrese = () =>  {
        store.dispatch(Action.increment(this));
        this.props.handleIncrese();
    }

    componentDidMount(){
        this.props.onRef(this)
    }

    render(){
        store.subscribe(() => 
            this.setState({
                value: store.getState()
            })
        );
        return (
            <div>
            {/* <h1 className="text-center mt-5">{store.getState()}</h1> */}
            <div>
                <button onClick = {this.onDecrease}>-</button>
                <mark>{store.getState()}</mark>
                <button onClick = {this.onIncrese}>+</button>
            </div>
            </div>) ;     
    }
}

export default Counter;
