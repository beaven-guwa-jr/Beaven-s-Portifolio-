import React from 'react';
import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF, FaGithub } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <a href='https://www.linkedin.com/in/beaven-jr-tadiwa-guwa-37478619b' target="_blank">
      <BsLinkedin />
    </a>
    <a href='https://github.com/beaven-guwa-jr?tab=repositories' target="_blank">
      <FaGithub/>
    </a>
    <a href='https://twitter.com/guwa_jr' target='_blank' >
      <BsTwitter/>
    </a>
  </div>
);

export default SocialMedia;
