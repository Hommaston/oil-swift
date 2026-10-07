import { useState } from 'react';
import FormField from '../FormField/FormField';
import Button from '../Button/Button';
import { validateSignUp } from '../../utils/validators';
import '../../index.css';

function SignUp() {
  const [values, setValues] = useState({
    fName: "", lName: "", occupation: "", email: "", password: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validateSignUp(values);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) setSubmitted(values);
    setValues({ fName: "", lName: "", occupation: "", email: "", password: "" });
  }

  return (
    <div className="container">
        {submitted ? (
            <div role="status" className="auth-success">
            <h1>Hello {submitted.fName} {submitted.lName}</h1>
            <p>Occupation: {submitted.occupation}</p>
            <p>Email: {submitted.email}</p>
            <Button text="Back" className="auth-button" onClick={() => setSubmitted(null)} style={{ backgroundColor: "var(--color-bg-secondary)", borderRadius: "var(--radius-md)", color: "var(--color-text-tertiary)" }} />
            </div>
            ): (
            <form className="auth-form" onSubmit={handleSubmit} noValidate aria-label="Sign up form">
                <h2>Create an account</h2>
                <FormField id="fName" label="First name" value={values.fName} onChange={handleChange} error={errors.fName} />
                <FormField id="lName" label="Last name" value={values.lName} onChange={handleChange} error={errors.lName} />
                <FormField id="occupation" label="Occupation" value={values.occupation} onChange={handleChange} error={errors.occupation} />
                <FormField id="email" type="email" label="Email" value={values.email} onChange={handleChange} error={errors.email} />
                <FormField id="password" type="password" label="Password" value={values.password} onChange={handleChange} error={errors.password} />
                <Button text="Sign Up" type="submit" style={{ backgroundColor: "var(--color-bg-secondary)", borderRadius: "var(--radius-md)", color: "var(--color-text-tertiary)" }} />
            </form>
        )}
    </div>
  );
}

export default SignUp;