import React, { Component } from 'react'
import Counter from '../components/Counter'
import store from "../model/store/index";
import * as Action from '../model/actions/index'
class CounterGroup extends Component{

    constructor(props){
        super(props);
        this.state ={
            totalValue:store.getState(),
            size:0}
    }
    handleResize = (event) => {
        this.setState({
            size: event.target.value? parseInt(event.target.value) :0,
        });
        store.dispatch(Action.init());
    }

    render(){
        store.subscribe(() =>{
            this.setState({
                totalValue:store.getState()
            })
        })
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
