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
    const nameLabel = this.nameLabelRef.current;
    if (nameLabel && document.activeElement === this.nameInputRef.current) {
      if (this.validateName(value)) {
        nameLabel.style.color = '#009688';
      } else {
        nameLabel.style.color = '#c60202';
      }
    }
  };

  onEmailChange = e => {
    const { target: { value } } = e;
    this.setState(() => ({ email: value }));
    const emailLabel = this.emailLabelRef.current;
    if (emailLabel && document.activeElement === this.emailInputRef.current) {
      if (this.validateEmail(value)) {
        emailLabel.style.color = '#009688';
      } else {
        emailLabel.style.color = '#c60202';
      }
    }
  };

  onMessageChange = e => {
    const { target: { value } } = e;
    this.setState(() => ({ message: value }));
    const messageLabel = this.messageLabelRef.current;
    if (messageLabel && document.activeElement === this.messageTextareaRef.current) {
      if (this.validateMessage(value)) {
        messageLabel.style.color = '#009688';
      } else {
        messageLabel.style.color = '#c60202';
      }
    }
  };

  onSubmit = e => {
    e.preventDefault();
    const isSpam = !!this.emailSpamInputRef.current.value;
    console.log(isSpam);
    const payload = {
      name: this.state.name.trim(),
      email: this.state.email.trim(),
      message: this.state.message.trim(),
    };
    this.nameLabelRef.current.style.removeProperty('color');
    this.emailLabelRef.current.style.removeProperty('color');
    this.messageLabelRef.current.style.removeProperty('color');
    this.setState(() => ({
      name: '',
      email: '',
      message: '',
    }));
    if (!isSpam) {
      fetch('https://shadialtarsha.com/sendmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
    }
  };

  validateName = name => name.trim().length > 1;
  validateMessage = message => message.trim().length > 1;
  validateEmail = email => {
    const regx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regx.test(email);
  };

  enableButton = () =>
    this.validateName(this.state.name) &&
    this.validateEmail(this.state.email) &&
    this.validateMessage(this.state.message);

  nameInputRef = React.createRef();
  emailInputRef = React.createRef();
  emailSpamInputRef = React.createRef();
  messageTextareaRef = React.createRef();
  nameLabelRef = React.createRef();
  emailLabelRef = React.createRef();
  messageLabelRef = React.createRef();

  render() {
    return (
      <form onSubmit={this.onSubmit} className="contact-form">
        <div>
          <input
            id="name"
            type="text"
            value={this.state.name}
            placeholder="Enter name"
            name="name"
            ref={this.nameInputRef}
            onChange={this.onNameChange}
          />
          <label htmlFor="name" ref={this.nameLabelRef}>
            <i className="fas fa-user" />
          </label>
        </div>
        <div>
          <input
            id="email"
            type="email"
            value={this.state.email}
            placeholder="Enter email"
            name="email"
            ref={this.emailInputRef}
            onChange={this.onEmailChange}
          />
          <label htmlFor="email" ref={this.emailLabelRef}>
            <i className="fas fa-at" />
          </label>
        </div>
        <div id="spam_input">
          <input
            id="email_spam"
            type="email"
            placeholder="Enter email"
            name="email_spam"
            ref={this.emailSpamInputRef}
          />
          <label htmlFor="email_spam">
            <i className="fas fa-at" />
          </label>
        </div>
        <div id="textarea-container">
          <textarea
            id="message"
            value={this.state.message}
            name="message"
            placeholder="Enter message"
            rows="6"
            ref={this.messageTextareaRef}
            onChange={this.onMessageChange}
          />
          <label htmlFor="message" ref={this.messageLabelRef}>
            <i className="fas fa-envelope" />
          </label>
        </div>
        <div className="buttons-container">
          <button id="submit" type="submit" disabled={!this.enableButton()}>
            Send a message
          </button>
          <button
            id="download"
            onClick={() => {
              window.open('https://shadialtarsha.com/portfolio/resume', '_blank');
            }}
          >
            My resume as pdf
          </button>
        </div>
      </form>
    );
  }
}

export default ContactForm;
