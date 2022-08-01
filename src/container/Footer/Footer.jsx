import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };
  const form = useRef();

  const sendEmail = (e) => {
    
    e.preventDefault();
    emailjs.sendForm('service_a01mzlj', 'template_ggu3gjg', form.current, 'NZlPZojrl05qUYRWg')
      .then((result) => {
          console.log(result.text);
          console.log('Message sent')
      }, (error) => {
          console.log(error.text);
      });
    form.current.reset();
    
  };

  return (
    <>
      <h2 className="head-text">chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="bjnrguwa@gmail.com"  target={"_blank"} className="p-text ]">hello @BeavenGuwaJnr</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+263 775430814" className="p-text">+263 775430814</a>
        </div>
      </div>
      <form ref={form} onSubmit={sendEmail} className="app__footer-form app__flex">
        <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username"  />
        </div>
        <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="username"  />
        </div>
        <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              
              name="message"
            />
        </div>
        <button type="submit" className='p-text' value="Send" placeholder='Send'>Send</button>
    </form>
      {/* {!isFormSubmitted ? (
        <form ref={form} onSubmit={sendEmail}  className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="submit" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )} */}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);