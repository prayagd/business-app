import React from 'react';
import {connect} from "react-redux"

import {Link} from 'react-router-dom';


class Orders extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loaded: true
        }
        this.handleDelete = this.handleDelete.bind(this)
    }


    handleDelete(e){
        this.props.deletePost(e.target.id)
    }


    render(){

            return(
                <div className = "container">
                    {this.props.value.map(val => <ul>
                                                    <li>Id:-{val.id}</li>
                                                    <li>Customer-Name:-{val.customer_name}</li>
                                                    <li>Customer-Email:-{val.customer_email}</li>
                                                    <li>Product:-{val.product}</li>
                                                    <li>Quantity:-{val.quantity}</li>
                                                    <Link to = "/edit"><button>Edit</button></Link>
                                                    <button onClick = {this.handleDelete} id = {val.id}>Delete</button>
                                                </ul>)}
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
        deletePost : (id) => {dispatch({type: "DELETE_ORDER", id: id})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders)