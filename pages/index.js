/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";
import Link from "next/link";

import { FaEthereum } from "react-icons/fa";

import TopNavigation from "@/components/TopNavigation";
import Button from "@/components/Button";

function HomePage() {
  return (
    <Fragment>
      <TopNavigation />
      <div className="mt-16 flex-grow">
        <strong className="leading-none font-waff text-5xl lg:text-[calc(12vmin+4rem)]">
          SEND {"—"} MINT
          <br />
          {"&"} WAFFR.
        </strong>
        <p className="text-3xl my-4 lg:text-5xl text-zinc-500">
          Waffr. A powerfull yet easy tool to delightfuly send, mint and
          visualize your tokens
        </p>
        <div className="flex mt-16 space-x-4">
          <Link passHref href="/send">
            <Button
              isLink
              withArrowIcon
              className="bg-purple-500 text-white h-16 !opacity-100"
            >
              OPEN DASHBOARD
            </Button>
          </Link>

          <Button
            href="https://ethereum.org/en/dapps/"
            isExternal
            isLink
            className="bg-zinc-900 h-16 space-x-6"
          >
            <div>BUILT ON ETHERUM</div> <FaEthereum />
          </Button>
        </div>
      </div>
    </Fragment>
  );
}

export default HomePage;
