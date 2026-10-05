import Button from '../Button/Button';
import { useState } from 'react';
import './SignUp.css';

function SignUp() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    occupation: "",
    email: ""
  });

  const [submitted, setSubmitted] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;

    setContact(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(contact);
    setContact({
      fName: "",
      lName: "",
      occupation: "",
      email: ""
    });
  }
  

  return (
    <div className="form_container">
      <h1>
        Hello {submitted?.fName} {submitted?.lName}
      </h1>
      <p>{submitted?.occupation}</p>
      <p>{submitted?.email}</p>
      
      <form>
        <input
          onChange={handleChange}
          value={contact.fName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          value={contact.lName}
          name="lName"
          placeholder="Last Name"
        />
        
        <input
          onChange={handleChange}
          value={contact.occupation}
          name="occupation"
          placeholder="Occupation"
        />
        <input
          onChange={handleChange}
          value={contact.email}
          name="email"
          placeholder="Email"
        />
        <Button text="Submit" onClick={handleSubmit} style={{ backgroundColor: 'var(--color-bg-secondary)', color: 'var(--color-text-tertiary)' }} />
      </form>
    </div>
  );
}

export default SignUp;
