"use client";
import { Fragment, PropsWithChildren, useState } from "react";
import { PropsWithClassName } from "types/global";
import { cn } from "~src/lib/utils";
import {
  CheckIcon,
  Cross1Icon,
  DotsVerticalIcon,
  QuestionMarkCircledIcon,
} from "@radix-ui/react-icons";
import { AnimatePresence } from "framer-motion";
import { CardRootProps } from "components/ui/card.props";
import { motion } from "framer-motion";
import { Input } from "~src/components/ui/input";
import { Menu } from "components/header/menu";
import { createContext } from "components/context/context";
import { IconPicker } from "components/ui/iconPicker";
import { Button } from "~src/components/ui/button";
interface CardContextType {
  isEdit: boolean;
  title: string;
  theme: string;
  icon: React.ReactNode;
}
const [CardContext, useCardContext] = createContext<CardContextType>({
  isEdit: false,
  title: "",
  theme: "bg-gray-100",
  icon: <Fragment />,
});
const CardRoot = ({
  className,
  children,
  theme = "bg-gray-100",
  title,
  icon,
}: PropsWithChildren<CardRootProps>) => {
  return (
    <CardContext isEdit={false} theme={theme} title={title} icon={icon}>
      <div className={cn(" w-64 rounded-xl p-[3px]", className, theme)}>
        {children}
      </div>
    </CardContext>
  );
};

const CardBody = ({
  className,
  children,
}: PropsWithChildren<PropsWithClassName>) => {
  return (
    <div
      className={cn(
        "bg-white min-h-[32px] rounded-xl rounded-tr-none p-2",
        className
      )}
    >
      {children}
    </div>
  );
};

const CardFooter = () => {
  return (
    <div className="flex items-center">
      <p className="text-xs font-normal mr-2">Last edited</p>
      <span className="text-xs font-thin">2 days ago</span>
      <div className="flex-1" />
      <QuestionMarkCircledIcon />
    </div>
  );
};

const CardHeder = ({ children }: PropsWithChildren) => {
  const [{ theme, icon }] = useCardContext();
  const [data, setData] = useCardContext();

  return (
    <div className="flex bg-white">
      <div
        className={cn(
          "flex-[2] py-1 flex items-center rounded-br-xl space-x-2  pr-2",
          theme
        )}
      >
        <div className="shrink-0" onClick={(e) => e.stopPropagation()}>
          <IconPicker onSelect={(ic) => setData({ icon: ic })}>
            <Button variant={"ghost"} className="p-2 h-4">
              {icon}
            </Button>
          </IconPicker>
        </div>

        {children}
      </div>
      <div
        className={cn(
          "h-full flex items-center transition-all duration-300",
          theme,
          {
            "flex-1": !data.isEdit,
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
  );
};

const CardTitle = () => {
  const [{ isEdit, title, theme }, update] = useCardContext();
  const [newTitle, setNewTitle] = useState(title);
  const setIsEdit = (edit: boolean) => {
    update({ isEdit: edit });
  };
  const showEdit = () => {
    setIsEdit(true);
  };
  const onSubmit = () => {
    setIsEdit(false);

    update({
      title: newTitle,
    });
  };
  const close = () => {
    setIsEdit(false);
    setNewTitle(title);
  };
  return (
    <Fragment>
      <AnimatePresence mode="sync">
        {isEdit ? (
          <div className=" flex items-center space-x-2 duration-300 transition-all">
            <Input
              className={cn(
                "p-0 bg-transparent border-0 outline-none focus-visible:ring-0  rounded-none focus-visible:ring-offset-0 font-bold text-base h-auto m-0",
                theme
              )}
              value={newTitle}
              onChange={(d) => setNewTitle(d.target.value)}
            />
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
              <CheckIcon className="text-green-900" onClick={onSubmit} />
            </motion.div>
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
              <Cross1Icon className="text-red-900" onClick={close} />
            </motion.div>
          </div>
        ) : (
          <motion.p
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="font-bold text-base"
            onDoubleClick={showEdit}
          >
            {title}
          </motion.p>
        )}
      </AnimatePresence>
    </Fragment>
  );
};
export default {
  Root: CardRoot,
  Header: CardHeder,
  Footer: CardFooter,
  Body: CardBody,
  Title: CardTitle,
};
