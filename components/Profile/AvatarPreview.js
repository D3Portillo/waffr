/* eslint-disable @next/next/no-img-element */
import { MdClose } from "react-icons/md";

function AvatarPreview({ formattedAccount, onDeactivate, avatarURL }) {
  return (
    <div className="flex w-full items-center justify-between relative flex-row-reverse">
      <div
        tabIndex={0}
        role="button"
        onClick={onDeactivate}
        className="lg:absolute h-16 flex bg-zinc-900 font-bold text-white z-10 top-0 right-0 px-8 lg:h-full lg:opacity-0 hover:opacity-100 rounded-lg text-lg items-center justify-center"
      >
        <span>DISCONNECT</span>
        <span className="hidden lg:inline mx-2">WALLET</span>
        <span className="ml-2">
          <MdClose />
        </span>
      </div>
      <div className="flex items-center flex-row-reverse lg:flex-row">
        <div className="font-bold text-xl mx-2">{formattedAccount}</div>
        <div className="w-16 h-16 rounded-full border-2 border-lime-300">
          <img
            role="figure"
            className="w-full h-full object-cover"
            layout="responsive"
            alt=""
            src={avatarURL}
          />
        </div>
      </div>
    </div>
  );
}

export default AvatarPreview;
