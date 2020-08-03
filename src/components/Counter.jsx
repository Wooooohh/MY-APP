import React, { Component } from 'react'

class Counter extends Component{

    constructor(props) {
        super(props);
        this.state = {value : 0};
    }

    reSet = () => {
        this.setState( {
            value: 0 
        });
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

    componentDidMount(){
        this.props.onRef(this)
    }

    render(){
        return (<div>
                <button onClick = {this.onDecrease}>-</button>
                <mark>{this.state.value}</mark>
                <button onClick = {this.onIncrese}>+</button>
            </div>) ;     
    }
}

export default Counter;
