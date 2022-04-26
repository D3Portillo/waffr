import { useRouter } from "next/router";

import { RiSendPlaneLine } from "react-icons/ri";
import { GiDiamondHard } from "react-icons/gi";

import Profile from "@/components/Profile";
import MainLogo from "./MainLogo";
import RouteItem from "./RouteItem";

function TopNavigation() {
  const router = useRouter();
  return (
    <div
      className="flex lg:space-x-4 py-8 items-center flex-wrap justify-end"
      style={{
        minHeight: "9rem",
      }}
    >
      <div className="flex items-center w-full lg:w-auto">
        <MainLogo />
        <div className="bg-white w-px h-10 opacity-20 ml-4 hidden lg:block" />
        <div className="flex-grow"></div>
        <RouteItem href="/send" currentRoute={router.route}>
          <div>TRANSFER</div>
          <RiSendPlaneLine className="text-white" />
        </RouteItem>
        <RouteItem href="/mint" currentRoute={router.route}>
          <div>MINT</div>
          <GiDiamondHard />
        </RouteItem>
      </div>
      <div className="flex-grow"></div>
      <div className="w-full flex justify-end lg:w-auto my-2 border-white border-opacity-20 border-t lg:border-0">
        <Profile />
      </div>
    </div>
  );
}
export default TopNavigation;
