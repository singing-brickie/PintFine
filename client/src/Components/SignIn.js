import React, { Component } from 'react';
import '../App.css';
import TextField from '@material-ui/core/TextField';


class SignIn extends Component {
   render() {
     return (
         <div>
       <TextField
         className="textField"
         label="Email"
         id="margin-none">
       </TextField>
       <TextField
         className="textField"
         label="Password"
         id="margin-none">
        </TextField>
         </div>
     )
   }
 }

export default SignIn