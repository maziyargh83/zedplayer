import { Profile } from "components/header/profile";
import { Search } from "components/header/search";
import { LinkNone1Icon } from "@radix-ui/react-icons";
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
      <div className="flex-1 justify-end flex">
        <Profile />
      </div>
    </div>
  );
};
