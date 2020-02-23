import React from 'react';
import {connect} from "react-redux"

class Createorders extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            "id": "",
            "customer_name": "",
            "customer_email": "",
            "product": "",
            "quantity": ""
        }
        this.handleInput = this.handleInput.bind(this)
    }

    handleInput(e){
        if(e.target.id === "id"){
            this.setState({
                id: e.target.value
            })
        }
        if(e.target.id === "name"){
            
            this.setState({
                customer_name: e.target.value
            })
        }
        if(e.target.id === "email"){
            
            this.setState({
                customer_email: e.target.value
            })
        }
        if(e.target.id === "product"){
        
            this.setState({
                product: e.target.value
            })
        }
        if(e.target.id === "quantity"){
            
            this.setState({
                quantity: e.target.value
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createPost(this.state)
    }

    render(){
       
        return(
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <h1>Create new Order:</h1>
                    <div>
                        <label>Order Id:</label>
                        <input id = "id"type = "text" onChange = {this.handleInput}></input>
                    </div>
                    <div>
                        <label>Customer Name:</label>
                        <input id = "name" type = "text" onChange = {this.handleInput}></input>
                    </div>
                    <div>
                        <label>Customer Email:</label>
                        <input  id = "email" type = "email" onChange = {this.handleInput}></input>
                    </div>
                    <div>
                        <label>Product:</label>
                        <input  id = "product" type = "text" onChange = {this.handleInput}></input>
                    </div>
                    <div>
                        <label>Quantity:</label>
                        <input id = "quantity" type = "number" onChange = {this.handleInput}></input>
                    </div>
                    <button>Submit</button>
                    <p>After submit go to Home</p>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        value: state.value
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPost : (value) => {dispatch({type: "CREATE_ORDER", newValue: value})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Createorders)