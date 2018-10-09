import React, { Component } from 'react';
import '../App.css';
import TextField from '@material-ui/core/TextField';


class SignUp extends Component {
   render() {
     return (
         <div>
       <TextField
         className = "signUpField"
         label="Name"
       >
       </TextField>
       <TextField
         className = "signUpField"
         label="Email"
        >
        </TextField>
     
         <TextField
         className="signUpField"
         label="Password"
         id="margin-none">
       </TextField>
         <TextField
         className="signUpField"
         label="Confirm Password"
         id="margin-none">
       </TextField>
         <TextField
         className="signUpFieldLast"
         label="Group Code"
         id="margin-none">
       </TextField>
             </div>
     )
   }
 }

export default SignUp