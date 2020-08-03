import React, { Component } from 'react'

class Counter extends Component{

    constructor(props) {
        super(props);
        this.state = {value : 0};
    }

    onDecrease = () =>  {
        this.setState((prevState) => ({
            value : prevState.value -1 
        }));
        this.props.handleDecrease();
    }
    onIncrese = () =>  {
        this.setState((prevState) => ({
            value: prevState.value +1 
        }));
        this.props.handleIncrese();
    }

    render(){
        return (<div>
                <button onClick = {this.onDecrease}>-</button>
                <h>{this.state.value}</h>
                <button onClick = {this.onIncrese}>+</button>
            </div>) ;     
    }
}

export default Counter;
