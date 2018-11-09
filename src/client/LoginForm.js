import React, { Component } from 'react';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openLogin: false,
    };
  }

  render() {
    // window.onClick = function(event) {
    //   if (event.target !== login) {
    //     this.setState((state) => ({ openLogin: !state.openLogin }));
    //   }
    // }
    return (
      <form id="login" className={this.props.openLogin ? 'show' : ''}>
        <span className="close-btn">&times;</span>
        <div class="container">
          <label for="username">Username</label>
          <input type="text" placeholder="Enter Username" name="username"></input>

          <label for="password">Password</label>
          <input type="text" placeholder="Enter Password" name="password"></input>

          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}
