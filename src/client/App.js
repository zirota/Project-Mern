import React, { Component } from 'react';
import '../../public/css/main.css';
import LoginForm from './LoginForm';

// TODO: Convert me to .jsx

export default class App extends Component {
  state = {
    greetings: null,
    openLogin: false,
  };

  async componentDidMount() {
    try {
      const response = await fetch('/api/healthcheck');
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const healthcheck = await response.json();
      this.setState({ greetings: healthcheck.healthcheck });
    } catch (err) {
      console.err(err);
    }
  }

  toggleLoginForm = () => {
    this.setState((state) => ({ openLogin: !state.openLogin }));
  }

  render() {
    const { greetings } = this.state;
    return (
      <div className="container">
        <LoginForm openLogin={this.state.openLogin} />
        <div>
          <ul>
            <li><a href="./">Home</a></li>
            <li><button id="sign-in" type="button" onClick={this.toggleLoginForm}>Sign in</button></li>
          </ul>
        </div>
      </div>
    );
  }
}
