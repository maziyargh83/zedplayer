"use client";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { CardTitle } from "components/card/cardTitle";
import { Menu } from "components/header/menu";
import { PropsWithChildren, useState } from "react";
import { cn } from "~src/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
interface CardProps {
  className?: string;
  title: string;
  icon: React.ReactNode;
  theme?: string;
  containerClassName?: string;
}
export const Card = ({
  className,
  children,
  icon,
  title,
  theme = "bg-gray-100",
  containerClassName,
}: PropsWithChildren<CardProps>) => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className={cn(" w-64 rounded-xl p-[3px]", className, theme)}>
      <div className="flex bg-white">
        <div
          className={cn(
            "flex-[2] py-1 flex items-center rounded-br-xl space-x-2  pr-2",
            theme
          )}
        >
          <AnimatePresence>
            {!isEdit && (
              <motion.div
                exit={{
                  scale: 0,
                }}
                initial={{
                  scale: 0,
                }}
                animate={{
                  scale: 1,
                }}
              >
                {icon}
              </motion.div>
            )}
          </AnimatePresence>
          <CardTitle
            title={title}
            theme={theme}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
          />
        </div>
        <div
          className={cn(
            "h-full flex items-center transition-all duration-300",
            theme,
            {
              "flex-1": !isEdit,
            }
          )}
        >
          <Menu>
            <div className="flex-1 h-full flex items-center justify-end px-1 pt-2 bg-white rounded-t-xl">
              <DotsVerticalIcon />
            </div>
          </Menu>
        </div>
      </div>
      <div
        className={cn(
          "bg-white min-h-[32px] rounded-xl rounded-tr-none p-2",
          containerClassName
        )}
      >
        {children}
      </div>
    </div>
  );
};
