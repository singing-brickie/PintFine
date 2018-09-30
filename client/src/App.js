import React, { Component } from 'react';
import './App.css';
import Form from './Components/Form.js';

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
    console.log('body',body)
    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="data:image/png;base64,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" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Home of Work Place Bullying</h1>
        </header>
        
        <Form style="display:float-left"></Form>
      </div>
        
    );
  }
}

export default App;
