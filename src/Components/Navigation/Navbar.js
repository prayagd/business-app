import React from 'react';
import { withRouter, Link} from 'react-router-dom';
import Signedin from "../Navigation/SignedIn"
import Signedout from "../Navigation/SignedOut"
import firebase from '../../config/config';

class Navbar extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            isSigned: false
        }
    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged(user => {
            
         this.setState({isSigned: !!user})   
})
    }
    
    render(){
        return (
            <div className = "outside-container">
                <nav id = "navbar">
                    <div>
                            <Link to = "/">
                                <h3 className = "name-tag">Business-App</h3>
                            </Link>

                            {this.state.isSigned ? <Signedin/> : <Signedout/>}
                            
                    </div>
                </nav>
            </div>
    )

    }   
    
}

export default withRouter(Navbar)