import { PropsWithClassName } from "types/global";

export interface CardProps {
  className?: string;
  title: string;
  icon: React.ReactNode;
  theme?: string;
}
export type CardRootProps = Pick<CardProps, "theme" | "title" | "icon"> &
  PropsWithClassName;
export type CardHeaderTitleProps = Omit<CardProps, "icon"> &
  Pick<CardProps, "title"> & {
    isEdit: boolean;
    setIsEdit: (isEdit: boolean) => void;
  };
