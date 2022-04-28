import cx from "classnames";
import { IoArrowForward } from "react-icons/io5";

function Button({ children, isPrimary, className, onClick, withArrowIcon }) {
  const wrappedChildren = Array.isArray(children) ? (
    children
  ) : (
    <div>{children}</div>
  );
  return (
    <button
      onClick={onClick}
      className={cx(
        className,
        "flex cursor-pointer justify-center items-center uppercase font-bold px-8 py-4 rounded-lg space-x-2",
        isPrimary
          ? "bg-lime-300 text-black"
          : "text-white opacity-70 hover:opacity-100"
      )}
    >
      {wrappedChildren}
      {withArrowIcon && <IoArrowForward className="text-white text-[125%]" />}
    </button>
  );
}

export default Button;
