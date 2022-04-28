import { useEffect } from "react";
import cx from "classnames";

import { IoArrowForward } from "react-icons/io5";

function Button({
  children,
  isPrimary,
  className,
  onClick,
  withArrowIcon,
  isLink,
  isExternal,
  href,
}) {
  const wrappedChildren = Array.isArray(children) ? (
    children
  ) : (
    <div>{children}</div>
  );

  const Container = (props) =>
    isLink ? <a {...props} /> : <button {...props} />;

  useEffect(() => {
    if (isExternal & !isLink) {
      console.warn("Button.js: Provided isExternal but isLink=false");
    }
  }, [isExternal, isLink]);

  return (
    <Container
      target={isExternal ? "_blank" : undefined}
      href={isLink ? href : undefined}
      onClick={isLink ? undefined : onClick}
      rel={isLink ? "noopener noreferrer" : undefined}
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
    </Container>
  );
}

Button.defaultProps = {
  children: null,
  isPrimary: false,
  className: "",
  onClick: () => null,
  withArrowIcon: false,
  isLink: false,
  isExternal: false,
  href: "",
};

export default Button;
