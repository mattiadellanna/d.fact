import { Component } from "react";
import { withTranslation } from "react-i18next";

class ContactForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            message: "",
            captchaA: this.randomNumber(),
            captchaB: this.randomNumber(),
            captcha: "",
            success: false,
            error: false,
            captchaError: false
        };
    }

    randomNumber() {
        return Math.floor(Math.random() * 10) + 1;
    }

    resetCaptcha = () => {
        this.setState({
            captchaA: this.randomNumber(),
            captchaB: this.randomNumber(),
            captcha: "",
            captchaError: false
        });
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = async (e) => {
        e.preventDefault();

        this.setState({
            success: false,
            error: false,
            captchaError: false
        });

        try {
            const response = await fetch("/send-mail.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(this.state)
            });

            const data = await response.json();

            if (data.success) {
                this.setState({
                    name: "",
                    email: "",
                    message: "",
                    success: true
                });
                this.resetCaptcha();
                return;
            }

            if (data.error === "captcha") {
                this.setState({ captchaError: true });
                this.resetCaptcha();
                return;
            }

            this.setState({ error: true });
            this.resetCaptcha();

        } catch (err) {
            console.error(err);
            this.setState({ error: true });
            this.resetCaptcha();
        }
    };

    render() {
        const { t } = this.props;
        const {
            name,
            email,
            message,
            captcha,
            captchaA,
            captchaB,
            success,
            error,
            captchaError
        } = this.state;

        return (
            <form className="contact-form" onSubmit={this.handleSubmit}>
                <div className="padding small">
                    <label htmlFor="name" className="block bold uppercase">
                        {t("contacts.form.name")}
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                        required
                    />
                </div>

                <div className="padding small">
                    <label htmlFor="email" className="block bold uppercase">
                        {t("contacts.email")}
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        required
                    />
                </div>

                <div className="padding small">
                    <label htmlFor="message" className="block bold uppercase">
                        {t("contacts.form.message")}
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={this.handleChange}
                        rows="6"
                        required
                    />
                </div>

                <div className="padding small">
                    <label className="block bold uppercase">
                         {t("contacts.form.whatIs")} {captchaA} + {captchaB}?
                    </label>
                    <input
                        type="number"
                        name="captcha"
                        value={captcha}
                        onChange={this.handleChange}
                        required
                    />
                    {captchaError && (
                        <p style={{ color: "red" }}>{t("contacts.form.wrongCaptcha")}</p>
                    )}
                </div>

                <div className="padding small">
                    <button type="submit" className="uppercase block">
                        {t("contacts.form.send")}
                    </button>
                    {success && <p>{t("contacts.form.emailSent")} ✅</p>}
                    {error && <p>{t("contacts.form.emailNotSent")} ❌</p>}
                </div>
                
            </form>
        );
    }
}

export default withTranslation()(ContactForm);
