import React, {useRef} from "react";
import { Helmet } from 'react-helmet';
import Navbar from "../nav/navbar";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, {
          publicKey: process.env.REACT_APP_PUBLIC_KEY,
        })
        .then(
          () => {
            console.log('SUCCESS!');
            alert("Message Sent");
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

    return (
        <React.Fragment>
            <Helmet>
                <title>{'Contact | PG'}</title>
            </Helmet>
            <Navbar className='nav'/>
            <div className="App">
            <h1>Contact Me</h1>
            <div className="contact">
            <form class="contact-form" ref={form} onSubmit={sendEmail}>
                <label for="firstname">First Name</label>
                <input
                    type='text'
                    id='firstname'
                    name='firstname'
                    placeholder="First Name"
                >
                </input>
                <label for="lastname">Last Name</label>
                <input
                    type='text'
                    id='lastname'
                    name='lastname'
                    placeholder="Last Name"
                >
                </input>
                <label for="email">Email*</label>
                <input
                    type='email'
                    id='email'
                    name='email'
                    placeholder="Email"
                    required
                >
                </input>
                <label for="subject">Subject*</label>
                <input
                    type='text'
                    id='subject'
                    name='subject'
                    placeholder="Subject"
                    required
                >
                </input>
                <label for="message">Message*</label>
                <textarea
                    type='message'
                    id='message'
                    name='message'
                    placeholder="Message..."
                    required
                >
                </textarea>
                <button type="submit" class="contact-submission">
                    Send
                </button>
            </form>
            </div>
            </div>
        </React.Fragment>
    );
}


export default Contact;