import React, { Component } from "react";

import { Redirect } from "react-router-dom";

export default class Connexion extends Component {
  state = {
    pseudo: "",
    goToChat: false
  };

  handleChange = event => {
    const pseudo = event.target.value;
    this.setState({ pseudo });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ goToChat: true });
  };

  render() {
    if (this.state.goToChat) {
      return <Redirect to={`/pseudo/${this.state.pseudo}`} />;
    }

    return (
      <div className="connexionBox">
        <form action="" className="connexion" onSubmit={this.handleSubmit}>
          <input
            value={this.state.pseudo}
            onChange={this.handleChange}
            type="text"
            placeholder="Pseudo"
            required
          />
          <button type="submit">Se connecter</button>
        </form>
      </div>
    );
  }
}
