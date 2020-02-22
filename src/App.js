import React from 'react';
import firebase from 'firebase';
import StyledfirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import Orders from "./Components/Orders"

firebase.initializeApp({
  apiKey: "AIzaSyA6edKiv6fO-JfN4sjimsx6Fx7PoE0I7Ow",
  authDomain: "business-app-838c6.firebaseapp.com"
})

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      signedIn: false
    }
  }
  uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false
    }
  };

  componentDidMount(){
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        signedIn: !!user
      })
    })
  }

  render(){
    if(this.state.signedIn){
      return (
        <div>
          <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
          <Orders/>
        </div>
      )
    }
    else{
      return ( 
          <StyledfirebaseAuth
        uiConfig = {this.uiConfig}
        firebaseAuth = {firebase.auth()}
       />
      );
    }
  }
}

export default App;
