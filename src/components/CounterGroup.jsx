import React, { Component } from 'react'
import Counter from '../components/Counter'
class CounterGroup extends Component{

    constructor(props){
        super(props);
        this.state ={size : 0, totalValue: 0};
    }
    handleResize= (event) => {
        this.setState({
            size: event.target.value? parseInt(event.target.value) :0
        });
    }

    handleDecrease= () => {
        this.setState((prevState) => ({
            totalValue : prevState.totalValue -1
        }))
    }

    handleIncrese = () => {
        this.setState((prevState) => ({
            totalValue : prevState.totalValue + 1
        }))
    }
    render(){
        const initArray = [...Array(this.state.size).keys()];
        return <div>
            <label>
                GropuSize: <input onChange={this.handleResize} defaultValue={0} />
            </label>
            <label>
                TotalValue: {this.state.totalValue}
            </label>
             {
                 initArray.map(key =><Counter handleIncrese = {this.handleIncrese} handleDecrease = {this.handleDecrease} key={key}/>)
             }  
        </div>
    }
}

export default CounterGroup;
