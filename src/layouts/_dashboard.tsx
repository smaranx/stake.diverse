import { useState } from "react";
import cn from "classnames";
import { useWindowScroll } from "@/lib/hooks/use-window-scroll";
import { FlashIcon } from "@/components/icons/flash";
import Hamburger from "@/components/ui/hamburger";
import ActiveLink from "@/components/ui/links/active-link";
import { useIsMounted } from "@/lib/hooks/use-is-mounted";
import { useDrawer } from "@/components/drawer-views/context";
// import Sidebar from '@/layouts/dashboard/_sidebar';
import Sidebar from "@/layouts/_sidebar";
import WalletConnect from "@/components/nft/wallet-connect";

{
  /*function NotificationButton() {
  return (
    <ActiveLink href="/notifications">
      <div className="relative flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-gray-100 bg-white text-brand shadow-main transition-all hover:-translate-y-0.5 hover:shadow-large focus:-translate-y-0.5 focus:shadow-large focus:outline-none dark:border-gray-700 dark:bg-light-dark dark:text-white sm:h-12 sm:w-12">
        <FlashIcon className="h-auto w-3 sm:w-auto" />
        <span className="absolute top-0 right-0 flex h-3 w-3 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-80" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-brand/90" />
        </span>
      </div>
    </ActiveLink>
  );
}*/
}

function HeaderRightArea() {
  return (
    <div className="relative order-last flex shrink-0 items-center gap-3 sm:gap-6 lg:gap-8">
      {/*<NotificationButton />*/}
      <WalletConnect />
    </div>
  );
}

export function Header() {
  const { openDrawer } = useDrawer();
  const isMounted = useIsMounted();
  let windowScroll = useWindowScroll();
  let [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 right-0 z-30 w-full transition-all duration-300 xl:pl-72 2xl:pl-80 ${
        isMounted && windowScroll.y > 10
          ? "h-16 bg-gradient-to-b from-white to-white/80 shadow-card backdrop-blur dark:from-dark dark:to-dark/80 sm:h-20"
          : "h-16 sm:h-24"
      }`}
    >
      <div className="flex h-full items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10 3xl:px-12">
        <div className="flex items-center">
          <div className="mr-1 block sm:mr-3 xl:hidden">
            <Hamburger
              isOpen={isOpen}
              onClick={() => openDrawer("DASHBOARD_SIDEBAR")}
              variant="transparent"
              className="dark:text-white"
            />
          </div>
        </div>

        <HeaderRightArea />
      </div>
    </nav>
  );
}

interface DashboardLayoutProps {
  contentClassName?: string;
}

export default function Layout({
  children,
  contentClassName,
}: React.PropsWithChildren<DashboardLayoutProps>) {
  return (
    <div className="xl:pl-72 2xl:pl-80">
      <Header />
      <Sidebar className="hidden xl:block" />

      <main
        className={cn(
          "min-h-[100vh] px-4 pt-24 pb-16 sm:px-6 sm:pb-20 lg:px-8 xl:px-10 xl:pb-24 3xl:px-12",
          contentClassName
        )}
      >
        {children}
      </main>
    </div>
  );
}
