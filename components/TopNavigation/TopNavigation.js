import { useRouter } from "next/router";

import { RiSendPlaneLine } from "react-icons/ri";
import { GiDiamondHard } from "react-icons/gi";

import Profile from "@/components/Profile";
import MainLogo from "./MainLogo";
import RouteItem from "./RouteItem";

function TopNavigation() {
  const router = useRouter();
  return (
    <div className="flex space-x-4 py-8 items-center flex-wrap justify-end">
      <div className="flex items-center">
        <MainLogo />
        <div className="bg-white w-px h-10 opacity-20 ml-2" />
        <RouteItem href="/send" currentRoute={router.route}>
          <div>SEND</div>
          <RiSendPlaneLine className="text-white" />
        </RouteItem>
        <RouteItem href="/mint" currentRoute={router.route}>
          <div>MINT</div>
          <GiDiamondHard />
        </RouteItem>
      </div>
      <div className="flex-grow"></div>
      <div className="my-2">
        <Profile />
      </div>
    </div>
  );
}
export default TopNavigation;
