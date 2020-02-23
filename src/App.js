import React from 'react';
import Navbar from './Components/Navigation/Navbar'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard';
import CreateOrders from './Components/Orders/Createorders'
import Edit from './Components/Edit'




class App extends React.Component {
  render(){
      return (
        <div>
          <BrowserRouter>
            <Navbar/>
            <Switch>
              <Route exact path = "/" component = {Dashboard}/>
              <Route exact path = "/create" component = {CreateOrders}/>
              <Route exact path = "/edit" component = {Edit}/>
            </Switch>
          </BrowserRouter>
        </div>
      )
    }
}

export default App;
