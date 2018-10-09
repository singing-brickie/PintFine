import React, { Component } from 'react';
import '../App.css';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import SignIn from './SignIn.js';
import SignUp from './SignUp.js';


class Form extends Component {
 constructor(props) {
     super(props);
     this.state = {
         value:0,
         submitText: 'Sign In'
     }
 }

handleSubmit(event){
    console.log('event',event)
   fetch('/api/form', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstParam: 'yourValue',
    secondParam: 'yourOtherValue',
  })
})
    alert('done something')
    event.preventDefault()
}
    
handleTabChange(event,index) {
    let btnText = index === 0 ? 'Sign In' : 'Sign Up';
    this.setState({value: index,submitText: btnText});
}

  

  render() {
      
    return (
       <div className="formHeader">
        <AppBar  position="static">
         <Tabs  centered value={this.state.value} onChange={this.handleTabChange.bind(this)}>
            <Tab label="Sign In" />
            <Tab label="Sign Up" />
          </Tabs>
        </AppBar>
      {this.state.value === 0 && <SignIn></SignIn>}
      {this.state.value === 1 && <SignUp></SignUp>}
        <Button variant="contained" color="primary" className="submitBtn">{this.state.submitText}</Button>
        </div>
    );
  }
}

export default Form;
