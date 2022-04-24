import Link from "next/link";

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
export default RouteItem;
