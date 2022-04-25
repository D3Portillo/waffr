function Input({ value, onChange, label, placeholder, required }) {
  return (
    <div className="flex flex-col border border-zinc-600 w-full bg-white bg-opacity-5 rounded-lg px-8 py-4 text-sm space-y-2">
      <label className="text-zinc-300">{label}</label>
      <input
        type="text"
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={({ target }) => onChange(target.value)}
        className="bg-transparent rounded-lg text-3xl outline-none"
      />
    </div>
  );
}

Input.defaultProps = {
  value: undefined,
  label: "",
  placeholder: undefined,
  required: undefined,
  onChange: () => null,
};

export default Input;
