/* eslint-disable @next/next/no-img-element */

function AvatarPreview({ account, formattedAccount, onDeactivate, avatarURL }) {
  return (
    <div className="flex border-white border-t lg:border-0 w-full items-center justify-between relative pt-4 lg:p-0 flex-row-reverse">
      <div
        tabIndex={0}
        role="button"
        onClick={onDeactivate}
        className="lg:absolute h-16 flex bg-pink-600 font-bold text-white z-10 top-0 right-0 px-8 lg:h-full lg:opacity-0 hover:opacity-100 rounded-lg text-lg items-center justify-center"
      >
        <span>DISCONNECT</span>
        <span className="hidden lg:inline mx-2">WALLET</span>
      </div>
      <div className="flex items-center flex-row-reverse lg:flex-row">
        <div className="font-bold text-xl mx-2">{formattedAccount}</div>
        <div className="w-16 h-16 rounded-full border-2 border-lime-300">
          <img
            className="w-full h-full object-cover"
            layout="responsive"
            alt={`Avatar image for account: ${account}`}
            src={avatarURL}
          />
        </div>
      </div>
    </div>
  );
}

export default AvatarPreview;
