import data from '../../../src/client/lib/data.json';

const { text, ctaText, email } = data.contact;

const Contact = () => (
  <div className='contact'>
    <p className='contact__text'>{ text }</p>
    <a
      className='contact__cta-button'
      href={`mailto:${email}`}
      target='_blank'
      rel='noopener noreferrer'
    >{ ctaText }</a>
  </div>
);

export default Contact;