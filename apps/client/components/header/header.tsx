import { Profile } from "components/header/profile";
import { Search } from "components/header/search";
import { LinkNone1Icon } from "@radix-ui/react-icons";
import { FiDownloadCloud } from "react-icons/fi";
import Link from "next/link";
export const Header = () => {
  return (
    <div className="p-4 flex items-center">
      <div className="flex-1 flex space-x-1 items-center">
        <h1 className="font-black">ZED CLOUD</h1>
        <LinkNone1Icon />
      </div>
      <div className="flex-1">
        <Search />
      </div>
      <div className="flex-1 justify-end flex items-center">
        <Link href={"/downloads"}>
          <FiDownloadCloud />
        </Link>
        <Profile />
      </div>
    </div>
  );
};
