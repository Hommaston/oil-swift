import { useState } from 'react';
import FormField from '../../shared/FormField/FormField';
import Button from '../../shared/Button/Button';
import { validateSignUp } from '../../../utils/validators';

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
    <div className=" flex justify-center w-full px-4 py-12">
        {submitted ? (

          <div role="status" className="w-full max-w-105 mx-auto mt-10 px-6 py-5 text-center bg-emerald-50 border border-emerald-200 rounded-xl">
            <h1 className="mb-2 text-[1.4rem] font-bold text-emerald-800">Hello {submitted.fName} {submitted.lName}</h1>
            <p className="my-1 text-gray-700">Occupation: {submitted.occupation}</p>
            <p className="my-1 text-gray-700">Email: {submitted.email}</p>
            <Button text="Back" className="w-full p-3 text-base font-semibold text-white bg-green-600 rounded-lg cursor-pointer transition-colors" onClick={() => setSubmitted(null)} />
            </div>
            ): (
            <form className="flex flex-col gap-4 w-full max-w-105 my-10 p-8 bg-white border border-gray-200 rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.06)]" onSubmit={handleSubmit} noValidate aria-label="Sign up form">
                <h2 className="mb-6 text-[1.5rem] font-bold text-center">Create an account</h2>
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