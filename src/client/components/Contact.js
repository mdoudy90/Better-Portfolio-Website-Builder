import data from '../../../src/client/lib/data.json';

const { text, textHtml, ctaText = 'Send Email', email } = data.contact;

const Contact = () => (
  <div className='contact'>
    {text && !textHtml && <p className='contact__text'>{text}</p>}
    {textHtml && <p className='contact__text' dangerouslySetInnerHTML={{__html:textHtml}} />}
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
