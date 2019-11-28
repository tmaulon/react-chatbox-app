import React, { Component } from "react";

export default class Formulaire extends Component {
  state = {
    message: ""
  };

  createMessage = () => {
    const { addMessage, pseudo } = this.props;

    const message = {
      pseudo: pseudo,
      message: this.state.message
    };

    addMessage(message);
  };

  handleSubmit = event => {
    event.preventDefault();
    this.createMessage();
  };

  handleChange = event => {
    const message = event.target.value;
    this.setState({ message });
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <textarea
          required
          maxLength="140"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <div className="info">140</div>
        <button type="submit">Envoyer</button>
      </form>
    );
  }
}
