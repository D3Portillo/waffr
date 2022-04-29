import Link from "next/link";
import PropTypes from "prop-types";

import Button from "@/components/Button";

function RouteItem({ children, href, currentRoute }) {
  const isActive = href == currentRoute;
  return (
    <Link href={href}>
      <a>
        <Button
          className={
            isActive &&
            "opacity-100 underline underline-offset-4 decoration-lime-300 "
          }
        >
          {children}
        </Button>
      </a>
    </Link>
  );
}

RouteItem.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  currentRoute: PropTypes.string.isRequired,
};

export default RouteItem;
