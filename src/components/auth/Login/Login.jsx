import { useState } from 'react';
import FormField from '../../shared/FormField/FormField';
import Button from '../../shared/Button/Button';
import { validateLogin } from '../../../utils/validators';

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
    <div className=" flex justify-center w-full px-4 my-12">
      <form className="flex flex-col gap-4 w-full max-w-105 p-8 bg-white border border-gray-200 rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.06)]" onSubmit={handleSubmit} noValidate aria-label="Log in form">
        <h2 className="mb-6 text-[1.5rem] font-bold text-center">Welcome back</h2>
        <FormField id="email" type="email" label="Email" value={values.email} onChange={handleChange} error={errors.email} />
        <FormField id="password" type="password" label="Password" value={values.password} onChange={handleChange} error={errors.password} />
        <Button text="Log In" type="submit" style={{border: "2px solid var(--color-border-secondary)", borderRadius: "var(--radius-md)", color: "var(--color-text-secondary)",  }}/>
      </form>
    </div>
  );
}

export default Login;