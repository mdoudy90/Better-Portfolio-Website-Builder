import data from '../../../src/client/lib/data.json';

const { text, ctaText = 'Send Email', email } = data.contact;

const Contact = () => (
  <div className='contact'>
    {text && <p className='contact__text'>{text}</p>}
    <a
      className='contact__cta-button'
      href={`mailto:${email}`}
      target='_blank'
      rel='noopener noreferrer'
    >
      {ctaText}
    </a>
  </div>
);

export default Contact;
