import React, { Component } from 'react';
import '../App.css';
import Button from '@material-ui/core/Button'


class Form extends Component {
 constructor(props) {
     super(props);
     //this.handleSubmit = this.handleSubmit.bind(this);
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

  

  render() {
      
    return (
       <div>
         <Button variant="contained" color="primary">
      Hello World
    </Button>
       
        <div className="col-12 signUp">
        <p className="col-2 App-intro">Sign In</p>
        <form className="col-8" onSubmit={this.handleSubmit}>
  <div className="form-row formRow">
    <label className="col-4 col-form-label" >Email address</label>
    <input type="email" className="form-control col-4" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
        
  </div>
  <div className="form-row formRow">
    <label className="col-4 col-form-label" >Password</label>
    <input type="password" className="form-control col-4" id="exampleInputPassword1" placeholder="Password"></input>
        
  </div>
  <div>
  <button  type="submit" className="btn btn-primary col-2 submitButton">Sign In</button>
 </div>
</form>
        </div>
        </div>
    );
  }
}

export default Form;
