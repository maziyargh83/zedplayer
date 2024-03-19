"use client";
import { Fragment, useState } from "react";
import { Input } from "~src/components/ui/input";
import { cn } from "~src/lib/utils";
import { CheckIcon, Cross1Icon } from "@radix-ui/react-icons";
import { AnimatePresence, motion } from "framer-motion";
interface CardTitleProps {
  title: string;
  theme: string;
  onEdit?: (d: string) => void;
  isEdit: boolean;
  setIsEdit: (i: boolean) => void;
}
export const CardTitle = ({
  title,
  onEdit,
  isEdit,
  setIsEdit,
  theme,
}: CardTitleProps) => {
  const [newTitle, setNewTitle] = useState(title);
  const showEdit = () => {
    setIsEdit(true);
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
              <CheckIcon className="text-green-900" />
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
