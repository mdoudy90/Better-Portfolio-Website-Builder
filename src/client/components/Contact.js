import { contact } from '../../../src/client/data/data.json';

const { text, ctaText, email } = contact;

const Contact = () => (
  <div className='contact'>
    <p className='contact__text'>{ text }</p>
    <a className='contact__cta-button' href={`mailto:${email}`}>{ ctaText }</a>
  </div>
);

export default Contact;