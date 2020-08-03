import React, { Component } from 'react'
import Counter from '../components/Counter'
class CounterGroup extends Component{

    constructor(props){
        super(props);
        this.state ={size : 0, 
            totalValue: 0,
            counters:[]
        };
    }
    handleResize= (event) => {
        this.setState({
            size: event.target.value? parseInt(event.target.value) :0,
            // counters:  [...Array(this.state.size).keys()].map(key =><Counter handleIncrese = {this.handleIncrese} handleDecrease = {this.handleDecrease} key={key}/>)
            totalValue: 0
        });
        const countersArray =this.state.counters;
        // const size = this.state.size;
        // for (let index = size; index < countersArray.length; index++) {
        //     countersArray.pop();
        // }
        for (let index = 0; index < countersArray.length; index++) {
            const counter = countersArray[index];
            counter.state.value = 0;
        }
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

    onRef=(ref)=>{
        this.state.counters.push(ref)
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
                initArray.map(key =><Counter onRef={this.onRef} handleIncrese = {this.handleIncrese} handleDecrease = {this.handleDecrease} key={key}/>)
             }  
        </div>
    }
}

export default CounterGroup;
