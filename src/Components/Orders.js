import React from 'react';


class Orders extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value: "",
            loaded: false
        }

    }

    componentDidMount(){
        fetch("https://raw.githubusercontent.com/prayagd/cafeui/master/DummyData.json")
        .then(res => res.json())
        .then(val => {
            this.setState({
                value: val,
                loaded: true
            })
        })
    }


    render(){   
        if(!this.state.loaded){
            return(
                <div>Loading Order...</div>
            )
        }
        else{
            return(
                <div className = "container">
                <button>Create new Order</button>
                    {this.state.value.map(val => <ul>
                                                    <li>Id:-{val.id}</li>
                                                    <li>Customer-Name:-{val.customer_name}</li>
                                                    <li>Customer-Email:-{val.customer_email}</li>
                                                    <li>Product:-{val.product}</li>
                                                    <li>Quantity:-{val.quantity}</li>
                                                    <button>Edit</button>
                                                    <button>Delete</button>
                                                </ul>)}
                </div>
            )
        }
        
    }
}

export default Orders