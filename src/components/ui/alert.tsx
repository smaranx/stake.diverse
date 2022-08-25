import { useState } from "react";
import { Close } from "@/components/icons/close";

interface AlertProps {}

export default function Alert({
  children,
}: React.PropsWithChildren<AlertProps>) {
  let [isHidden, setIsHidden] = useState(false);

  if (!isHidden) {
    return (
      <div className="relative rounded-lg bg-white py-4 shadow-card pl-4 pr-8 dark:bg-light-dark sm:py-6 sm:pr-10 sm:pl-6">
        {children}

        <div
          className="absolute top-2 cursor-pointer p-2 text-gray-900 transition-all hover:scale-105 right-2 dark:text-white"
          onClick={() => setIsHidden(!isHidden)}
        >
          <Close className="h-auto w-3" />
        </div>
      </div>
    );
  } else {
    return null;
  }
}
