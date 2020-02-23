import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux"

class Edit extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            input : ""
        }
    }

    
    render(){
        return(
            <div>
                <form>
                    <h1>Edit:</h1>
                    <div>
                        <label>Order Id:</label>
                        <input type = "text" value = {this.props.id}></input>
                    </div>
                    <div>
                        <label>Customer Name:</label>
                        <input type = "text" value = {this.props.customer_name}></input>
                    </div>
                    <div>
                        <label>Customer Email:</label>
                        <input type = "email" value = {this.props.customer_email}></input>
                    </div>
                    <div>
                        <label>Product:</label>
                        <input type = "text" value = {this.props.product}></input>
                    </div>
                    <div>
                        <label>Quantity:</label>
                        <input type = "number" value = {this.props.quantity}></input>
                    </div>
                    <Link to = "/"><button>Submit</button></Link>
                </form>
            </div>
        )
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        createPost : (value) => {dispatch({type: "EDIT_ORDER", newValue: value})}
    }
}

export default connect(mapDispatchToProps)(Edit)