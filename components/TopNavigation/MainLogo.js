import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/logo.svg";

function MainLogo() {
  return (
    <Link href="/">
      <a>
        <Image src={logo} height="48" alt="Waffr logo image" />
      </a>
    </Link>
  );
}

export default MainLogo;
