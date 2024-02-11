import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Panel {
  children: ReactNode;
  className?: string;
  title?: string;
}

export const Panel = ({ children, className, title }: Panel) => {
  return (
    <div
      className={twMerge(
        "rounded-lg bg-gray-50 border border-gray-300 h-full w-full",
        className,
      )}
    >
      {title && <h2 className="text-lg font-bold">{title}</h2>}

      <div>{children}</div>
    </div>
  );
};
