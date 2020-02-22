import React from 'react';


class Orders extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            input: "",
            loaded: false
        }
        this.handleNewOrder = this.handleNewOrder.bind(this)
    }
    render(){
        return(
            <div>
                <form>
                    <h1>Create new Order:</h1>
                    <div>
                        <label>Order Id:</label>
                        <input type = "text"></input>
                    </div>
                    <div>
                        <label>Customer Name:</label>
                        <input type = "text"></input>
                    </div>
                    <div>
                        <label>Customer Email:</label>
                        <input type = "email"></input>
                    </div>
                    <div>
                        <label>Product:</label>
                        <input type = "text"></input>
                    </div>
                    <div>
                        <label>Quantity:</label>
                        <input type = "number"></input>
                    </div>
                </form>
            </div>
        )
    }
}