import cx from "classnames";

function Button({ children, isPrimary, className }) {
  return (
    <div
      className={cx(
        className,
        "flex items-center uppercase font-bold px-8 py-4 rounded-lg space-x-2",
        isPrimary
          ? "bg-lime-300 text-black"
          : "text-white opacity-70 hover:opacity-100"
      )}
    >
      {children}
    </div>
  );
}

export default Button;
