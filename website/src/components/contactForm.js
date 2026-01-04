import { Component } from "react";
import { withTranslation } from "react-i18next";

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
        this.setState({ name: "", email: "",  message: "" });
    };

    render() {
        const { t } = this.props;
        const { name, email, message } = this.state;

        return (
            <div className="contact-form" onSubmit={this.handleSubmit}>
                <div className="padding small">
                    <label for="name" className="block bold padding small uppercase">{t("contacts.form.name")}</label>
                    <input type="text" id="name" name="name" value={name} onChange={this.handleChange} required />
                </div>
                <div className="padding small">
                    <label for="email" className="block bold padding small uppercase">{t("contacts.email")}</label>
                    <input type="email" name="email" value={email} onChange={this.handleChange} required />
                </div>
                <div className="padding small">
                    <label for="message" className="block bold padding small uppercase">{t("contacts.form.message")}</label>
                    <textarea name="message" value={message} onChange={this.handleChange} required rows="6" />
                </div>
                <div className="padding small">
                <button type="submit" className="uppercase block">{t("contacts.form.send")}</button>
                </div>
            </div>
        );
    }
}

export default withTranslation()(ContactForm);
