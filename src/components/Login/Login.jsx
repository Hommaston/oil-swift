import { useState } from 'react';
import FormField from '../FormField/FormField';
import Button from '../Button/Button';
import { validateLogin } from '../../utils/validators';
import '../../index.css';

function Login({ onSubmit = () => {} }) {
  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validateLogin(values);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) onSubmit(values);
  }

  return (
    <div className="container">
      <form className="auth-form" onSubmit={handleSubmit} noValidate aria-label="Log in form">
        <h2>Welcome back</h2>
        <FormField id="email" type="email" label="Email" value={values.email} onChange={handleChange} error={errors.email} />
        <FormField id="password" type="password" label="Password" value={values.password} onChange={handleChange} error={errors.password} />
        <Button text="Log In" type="submit" style={{border: "2px solid var(--color-border-secondary)", borderRadius: "var(--radius-md)", color: "var(--color-text-secondary)",  }}/>
      </form>
    </div>
  );
}

export default Login;