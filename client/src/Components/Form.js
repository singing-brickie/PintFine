import React, { Component } from 'react';
import '../App.css';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';


class Form extends Component {
 constructor(props) {
     super(props);
     this.state = {
         value:0
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
    console.log(index)
    this.setState({value: index})
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
       
     <TextField
className="textField"
        label="Email"
        id="margin-none"
        
      ></TextField>
      
      <TextField
        className="textField"
       label="Password"
        id="margin-none"
        
      ></TextField>
        </div>
    );
  }
}

export default Form;
