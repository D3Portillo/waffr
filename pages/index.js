/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";
import Link from "next/link";

import { FaEthereum } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";

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
          <Link href="/send">
            <a>
              <Button className="bg-purple-500 text-white h-16 !opacity-100">
                <div>OPEN DASHBOARD</div>
                <IoArrowForward className="text-white text-2xl" />
              </Button>
            </a>
          </Link>
          <a
            className="hidden lg:block"
            target="_blank"
            href="https://metamask.io/download/"
            rel="noopener noreferrer"
          >
            <Button className="bg-zinc-900 h-16 space-x-6">
              <div>BUILT ON ETHERUM</div> <FaEthereum />
            </Button>
          </a>
        </div>
      </div>

      <div className="flex pb-6 pt-24 items-end lg:items-center">
        <div className="flex lg:items-center flex-wrap space-y-2 lg:space-y-0 lg:space-x-4 flex-col lg:flex-row">
          <a>
            <Button className="!p-0">ROADMAP</Button>
          </a>
          <a>
            <Button className="!p-0">FRAMEWORK</Button>
          </a>
          <a>
            <Button className="!p-0">DEVELOPER</Button>
          </a>
        </div>
        <div className="flex flex-grow" />
        <div className="px-6">
          <img className="h-12" alt="WAFFR LOGO" src="/text-logo.svg" />
        </div>
      </div>
    </Fragment>
  );
}

export default HomePage;
