import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@repo/ui/src/components/ui/avatar";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { cn } from "~src/lib/utils";
import { buttonVariants } from "@repo/ui/src/components/ui/button";
import { Menu } from "./menu";
export const Profile = () => {
  return (
    <Menu>
      <div
        className={cn(
          "flex items-center space-x-3",
          buttonVariants({
            variant: "ghost",
          })
        )}
      >
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="font-bold text-sm">Maziyar gholami</p>
        <CaretDownIcon />
      </div>
    </Menu>
  );
};
