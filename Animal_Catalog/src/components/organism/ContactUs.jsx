import "../../styles/organism/ContactUs.css";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

import { useEffect } from "react";
import { useInput } from "../../hooks/useInput";
import { useSubmitForm } from "../../hooks/useSubmitForm";

import { isEmail, isNotEmpty } from "../../utils/validation";

export default function ContactUs() {
	const {
		value: enteredName,
		handleInputChange: handleNameChange,
		handleInputBlur: handleNameBlur,
		hasError: nameHasError,
		reset: resetName,
	} = useInput("", (value) => isNotEmpty(value) );

	const {
		value: enteredSurname,
		handleInputChange: handleSurnameChange,
		handleInputBlur: handleSurnameBlur,
		hasError: surnameHasError,
		reset: resetSurname,
	} = useInput("", (value) => isNotEmpty(value));

	const {
		value: enteredEmail,
		handleInputChange: handleEmailChange,
		handleInputBlur: handleEmailBlur,
		hasError: emailHasError,
		reset: resetEmail,
	} = useInput("", (value) => isEmail(value))

	const {
		value: enteredPhone,
		handleInputChange: handlePhoneChange,
		handleInputBlur: handlePhoneBlur,
		hasError: phoneHasError,
		reset: resetPhone,
	} = useInput("", (value) => isNotEmpty(value));

	const {
		value: enteredMessage,
		handleInputChange: handleMessageChange,
		handleInputBlur: handleMessageBlur,
		hasError: messageHasError,
		reset: resetMessage,
	} = useInput("", (value) => isNotEmpty(value));

	const [submitState, setErrorMessage, setSubmitting] = useSubmitForm();

	useEffect(() => {
		if (nameHasError) {
			setErrorMessage("Name is required");
		} else if (surnameHasError) {
			setErrorMessage("Surname is required");
		} else if (emailHasError) {
			setErrorMessage("Email is invalid");
		} else if (phoneHasError) {
			setErrorMessage("Phone is required");
		} else if (messageHasError) {
			setErrorMessage("Message is required");
		} else {
			setErrorMessage("");
		}
	}, [nameHasError, surnameHasError, emailHasError, phoneHasError, messageHasError]);

	function handleSubmit() {
		event.preventDefault();
		setSubmitting(true);

		if (
			enteredEmail === "" ||
			enteredName === "" ||
			enteredSurname === "" ||
			enteredPhone === "" ||
			enteredMessage === ""
		) {
			setSubmitting(false);
			setErrorMessage("Why are you trying to submit an empty form?");
			return;
		}

		const contactData = {
			name: enteredName,
			surname: enteredSurname,
			email: enteredEmail,
			phone: enteredPhone,
			message: enteredMessage,
		};

		console.log(contactData);

		resetName();
		resetSurname();
		resetEmail();
		resetPhone();
		resetMessage();
		
		setSubmitting(false);
	}

	return (
		<section id="contact" className="contact-section">
			<h1 className="animal-type-menu-title"> Contact Us</h1>
			<p className="contact-section-subtext"> Tell us how can we help you</p>

			<form id="contact-form" className="contact-section-form">
				<div className="form-input-row">
					<Input
						labelText="Name"
						name="name"
						value={enteredName}
						onChange={handleNameChange}
						onBlur={handleNameBlur}
						isError={nameHasError}
					/>
					<Input
						labelText="Surname"
						name="surname"
						value={enteredSurname}
						onChange={handleSurnameChange}
						onBlur={handleSurnameBlur}
						isError={surnameHasError}
					/>
				</div>
				<div className="form-input-row">
					<Input
						labelText="Email"
						name="email"
						value={enteredEmail}
						onChange={handleEmailChange}
						onBlur={handleEmailBlur}
						isError={emailHasError}
					/>
					<Input
						labelText="Phone"
						name="phone"
						value={enteredPhone}
						onChange={handlePhoneChange}
						onBlur={handlePhoneBlur}
						isError={phoneHasError}
					/>
				</div>
				<Input
					labelText="Message"
					name="message"
					isTextArea
					value={enteredMessage}
					onChange={handleMessageChange}
					onBlur={handleMessageBlur}
					isError={messageHasError}
				/>
				{submitState.errorMessage && (
					<p className="form-error-message">{submitState.errorMessage}</p>
				)}
				<div className="form-button-row">
					<Button onClick={handleSubmit} isDisable={submitState.errorMessage}>
						{submitState.isSubmitting ? "Submitting..." : "Submit"}
					</Button>
				</div>
			</form>
		</section>
	);
}
