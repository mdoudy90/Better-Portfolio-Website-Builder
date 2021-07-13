const Contact = ({ text, ctaText, email }) => (
  <div className='contact'>
    <p className='contact__text'>{ text }</p>
    <a className='contact__cta-button' href={`mailto:${email}`}>{ ctaText }</a>
  </div>
);

export default Contact;