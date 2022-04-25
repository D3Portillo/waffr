/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const LOGO_URL = "/logo.svg";

function MainLogo() {
  return (
    <Link href="/">
      <a>
        <img className="h-8" src={LOGO_URL} alt="Waffr logo image" />
      </a>
    </Link>
  );
}

export default MainLogo;
