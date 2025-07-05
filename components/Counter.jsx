import React, {Component} from "react";

class Counter extends Component{

    constructor(props){
        super(props);
        this.state = {
            count: 0
        };

        this.increment =()=>{
            this.setState(prevState => ({ count: prevState.count + 1 }));
        }
        this.decrement =()=>{
            this.setState(prevState =>({
                count: prevState.count > 0 ? prevState.count - 1 : 0
            }))
        }
    }
    render() {
        return (
            <div className="right">
                <h3>Counter with Class Component</h3>
                <h2>count: {this.state.count}</h2>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        );
    }
}

export default Counter;