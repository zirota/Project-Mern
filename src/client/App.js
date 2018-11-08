import React, { Component } from 'react';
import '../../public/css/main.css';

// TODO: Convert me to .jsx

export default class App extends Component {
  state = { greetings: null };

  componentDidMount() {
    // TODO: make async/await work
    fetch('/api/healthcheck')
      .then(res => res.json())
      .then(res => this.setState({ greetings: res.healthcheck }));
    // const healthcheck = await (await fetch('/api/healthcheck')).json();
    // await this.setState({ greetings: healthcheck.healthcheck });
  }

  render() {
    const { greetings } = this.state;
    return (
      <div>
        {greetings ? <h1>{greetings}</h1> : <h1>Loading.. please wait!</h1>}
      </div>
    );
  }
}