import React, { useState } from 'react';
import ChangeDocumentTitle from '../hook/changeDocumentTitle';

const Contact = () => {

	ChangeDocumentTitle('Contact')

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [feedback, setFeedback] = useState(false);

	function handleInputName(e) {
		setName(e.target.value);
	}

	function handleInputEmail(e) {
		setEmail(e.target.value);
	}

	function handleInputMessage(e) {
		setMessage(e.target.value);
	}

	function submitForm(e) {
		e.preventDefault();
		setFeedback(true);
		return false
	}


	return (
		<main className='contact'>
			{
				feedback ?
					<div className='contact-feedback'>
						<h1>Your message has been sent</h1>
						<p>Rest assured, we will get back to you soon</p>
					</div>
					:
					<form id='contactForm' onSubmit={e => submitForm(e)}>
						<h1>Contact Form</h1>
						<div>
							<label htmlFor='fName'>Your Name</label>
							<input type='text' id='fName' required placeholder='Che Wan Nuramirah'
								onChange={(event) => handleInputName(event)}
							/>
						</div>
						<div>
							<label htmlFor='fEmail'>Your Email</label>
							<input type='email' id='fEmail' required placeholder='example@mail.com'
								onChange={(event) => handleInputEmail(event)}
							/>
						</div>
						<div>
							<label htmlFor='fMessage'>Your Message</label>
							<textarea id='fMessage' required placeholder='Your message...'
								onChange={(event) => handleInputMessage(event)}
							/>
						</div>
						<input type='submit' className='btn btn-primary' value='Submit' />
					</form>
			}
		</main>
	)
}

export default Contact