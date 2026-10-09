function FormField({ id, label, error, ...props }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-[0.9rem] font-semibold text-gray-700">{label}</label>
      <input
        id={id}
        name={id}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className="px-3 py-2.5 text-base border border-gray-300 rounded-lg outline-none transition focus:border-blue-600 focus:ring-3 focus:ring-blue-600/15 aria-invalid:border-[#d93025]"
        {...props}
      />
      {error && <p id={`${id}-error`} role="alert" className="m-0 text-[0.85rem] text-[#d93025]">{error}</p>}
    </div>
  );
}

export default FormField;