import { CaretRightIcon } from "@radix-ui/react-icons";
import { PropsWithChildren } from "react";
import { Button } from "~src/components/ui/button";

interface Section {
  title: string;
  showmore: boolean;
  link?: string;
}
export const Section = ({
  title,
  showmore,
  link,
  children,
}: PropsWithChildren<Section>) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-2xl">{title}</h1>
        {showmore && (
          <Button variant={"ghost"}>
            Show More
            <CaretRightIcon />
          </Button>
        )}
      </div>
      {children}
    </div>
  );
};
