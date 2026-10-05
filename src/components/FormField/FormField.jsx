function FormField({ id, label, error, ...props }) {
  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
      {error && <p id={`${id}-error`} role="alert" className="form-error">{error}</p>}
    </div>
  );
}

export default FormField;