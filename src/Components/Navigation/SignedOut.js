import React from 'react';
import StyledfirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from '../../config/config';



class Signedout extends React.Component {

uiConfig = {
        signInFlow: 'popup',
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ],
        callbacks: {
          signInSuccessWithAuthResult: () => false
        }
  };



render(){
    return (
        <div>
            <StyledfirebaseAuth
        uiConfig = {this.uiConfig}
        firebaseAuth = {firebase.auth()}
       />  
        </div>
        
    )
}

    
}

export default Signedout