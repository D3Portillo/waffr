/* eslint-disable @next/next/no-img-element */
import Button from "@/components/Button";

function Footer() {
  return (
    <div className="flex pb-6 pt-24 items-end lg:items-center">
      <div className="flex lg:items-center flex-wrap space-y-2 lg:space-y-0 lg:space-x-4 flex-col lg:flex-row">
        <a
          target="_blank"
          href="https://github.com/D3Portillo/waffr/wiki"
          rel="noopener noreferrer"
        >
          <Button className="!p-0">ROADMAP</Button>
        </a>
        <a
          target="_blank"
          href="https://getwaffle.io/"
          rel="noopener noreferrer"
        >
          <Button className="!p-0">FRAMEWORK</Button>
        </a>
        <a
          target="_blank"
          href="https://www.d3portillo.me/"
          rel="noopener noreferrer"
        >
          <Button className="!p-0">DEVELOPER</Button>
        </a>
      </div>
      <div className="flex flex-grow" />
      <div className="px-6">
        <img className="h-12" alt="WAFFR LOGO" src="/text-logo.svg" />
      </div>
    </div>
  );
}

export default Footer;
