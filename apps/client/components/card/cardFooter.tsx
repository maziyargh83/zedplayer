import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";

export const CardFooter = () => {
  return (
    <div className="flex items-center">
      <p className="text-xs font-normal mr-2">Last edited</p>
      <span className="text-xs font-thin">2 days ago</span>
      <div className="flex-1" />
      <QuestionMarkCircledIcon />
    </div>
  );
};
