import React from "react";
import "../css/contect.css";
import Typing from 'react-typing-animation';

const Contact = ({history}) => {
	
	state = { username: null };

    componentDidMount(){
        fetch('/api/getUsername')
            .then(res => res.json())
            .then(user => this.setState({ username: user.username }));
	}
   
  render(){
    const { username } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <div>
              {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
          </div>
      </div>
    );
  }
}

export default Contact;