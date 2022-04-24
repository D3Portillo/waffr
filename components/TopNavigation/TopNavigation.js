import Image from "next/image";
import Link from "next/link";

import { RiSendPlaneLine } from "react-icons/ri";
import { GiDiamondHard } from "react-icons/gi";

import Button from "@/components/Button";
import Profile from "@/components/Profile";
import logo from "@/assets/logo.svg"

function TopNavigation() {
  return (
    <div className="flex space-x-4 h-24 items-center">
      <Link href="/">
        <a>
          <Image src={logo} height="48" alt="Waffr logo image" />
        </a>
      </Link>
      <div className="bg-white w-px h-10" />
      <div className="flex items-center">
        <Link href="/send">
          <a>
            <Button>
              <div>SEND</div>
              <RiSendPlaneLine className="text-white" />
            </Button>
          </a>
        </Link>
        <Link href="/mint">
          <a>
            <Button>
              <div>MINT</div>
              <GiDiamondHard />
            </Button>
          </a>
        </Link>
      </div>
      <div className="flex-grow"></div>
      <Profile />
    </div>
  );
}
export default TopNavigation;
