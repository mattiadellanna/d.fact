import React, { Component } from "react";

class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = this.state;

    // Qui puoi aggiungere la logica di invio (API, email, ecc.)
    console.log({ name, email, message });

    // Reset form
    this.setState({ name: "", email: "",  message: "" });
  };

  render() {
    const { name, email, message } = this.state;

    return (
        <div className="contact-form" onSubmit={this.handleSubmit}>
            <div className="padding small">
                <label for="name" className="block bold padding small uppercase">Name</label>
                <input type="text" id="name" name="name" value={name} onChange={this.handleChange} required />
            </div>
            <div className="padding small">
                <label for="email" className="block bold padding small uppercase">E-Mail</label>
                <input type="email" name="email" value={email} onChange={this.handleChange} required />
            </div>
            <div className="padding small">
                <label for="message" className="block bold padding small uppercase">Message</label>
                <textarea name="message" value={message} onChange={this.handleChange} required rows="6" />
            </div>
            <div className="padding small">
              <button type="submit" className="uppercase block">Send Message</button>
            </div>
        </div>
    );
  }
}

export default ContactForm;
