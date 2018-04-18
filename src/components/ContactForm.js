import React, { Component } from 'react';

export class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    message: '',
  };
  onNameChange = e => {
    const { target: { value } } = e;
    this.setState(() => ({ name: value }));
  };
  onEmailChange = e => {
    const { target: { value } } = e;
    this.setState(() => ({ email: value }));
  };
  onMessageChange = e => {
    const { target: { value } } = e;
    this.setState(() => ({ message: value }));
  };
  onSubmit = e => {
    e.preventDefault();
    this.setState(() => ({
      name: '',
      email: '',
      message: '',
    }));
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          value={this.state.name}
          placeholder="Enter name"
          name="name"
          onChange={this.onNameChange}
          required
        />
        <input
          type="email"
          value={this.state.email}
          placeholder="Enter email"
          name="email"
          onChange={this.onEmailChange}
          required
        />
        <textarea
          value={this.state.message}
          name="message"
          placeholder="Enter message"
          onChange={this.onMessageChange}
          required
        />
        <button type="submit">Submit</button>
        <button
          onClick={() => {
            window.open('http://localhost:3333/portfolio/resume', '_blank');
          }}
        >
          Download Resume
        </button>
      </form>
    );
  }
}

export default ContactForm;
