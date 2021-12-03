import { FunctionComponent, FormEvent, useState } from 'react';
import { isEmailValid } from '../../utils/utils';
import { ContactFormProps } from './ContactForm.types';

/**
 * ContactForm Stateless component
 */
const ContactForm: FunctionComponent<ContactFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const resetFormValues = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ name, email, message });
    resetFormValues();
  };

  // FIXME: failure to reset form for some reason
  const handleReset = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    resetFormValues();
  };

  const isValid = name !== '' && isEmailValid(email) && message !== '';

  return (
    <form method="post" onSubmit={handleSubmit}>
      <div className="field half first">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="field half">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <ul className="actions">
        <li>
          <input type="submit" value="Send Message" className="special" disabled={!isValid} />
        </li>
        <li>
          <input type="reset" value="Reset" onReset={handleReset} />
        </li>
      </ul>
    </form>
  );
};

export default ContactForm;
