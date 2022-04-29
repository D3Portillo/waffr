import PropTypes from "prop-types";

import { noOp } from "@/lib/utils/helpers";

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

Input.propTypes = {
  label: PropTypes.node.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  value: undefined,
  placeholder: undefined,
  required: undefined,
  onChange: noOp,
};

export default Input;
