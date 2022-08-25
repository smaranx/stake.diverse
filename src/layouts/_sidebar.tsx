import cn from "classnames";
import Logo from "@/components/ui/logo";
import Image from "next/image";
import { MenuItem } from "@/layouts/_layout-menu";
import Scrollbar from "@/components/ui/scrollbar";
import Button from "@/components/ui/button";
import routes from "@/config/routes";
import { useDrawer } from "@/components/drawer-views/context";
import { HomeIcon } from "@/components/icons/home";
import { FarmIcon } from "@/components/icons/farm";
import { PoolIcon } from "@/components/icons/pool";
import { ProfileIcon } from "@/components/icons/profile";
import { ExchangeIcon } from "@/components/icons/exchange";
import { VoteIcon } from "@/components/icons/vote-icon";
import { Close } from "@/components/icons/close";
import { CompassIcon } from "@/components/icons/compass";

//images
import ShapeImage from "@/assets/images/logo.png";

export const menuItems = [
  {
    name: "Home",
    icon: <HomeIcon />,
    href: routes.home,
  },

  {
    name: "Profile",
    icon: <ProfileIcon />,
    href: routes.profile,
  },
  {
    name: "Diverse Website",
    icon: <ProfileIcon />,
    href: "https://www.diverse.com.co",
  },
  {
    name: "OpenSea",
    icon: <ProfileIcon />,
    href: "https://opensea.io/collection/diversegenesis",
  },
  {
    name: "Twitter",
    icon: <ProfileIcon />,
    href: "https://twitter.com/diverse",
  },
  {
    name: "Instagram",
    icon: <ProfileIcon />,
    href: "https://www.instagram.com/diverse/",
  },
  /*
  /*
  {
    name: "Farm",
    icon: <FarmIcon />,
    href: routes.farms,
  },
  {
    name: "Swap",
    icon: <ExchangeIcon />,
    href: routes.swap,
  },
  {
    name: "Liquidity",
    icon: <PoolIcon />,
    href: routes.liquidity,
  },
  {
    name: "Explore NFTs",
    icon: <CompassIcon />,
    href: routes.search,
  },
  {
    name: "Explore",
    icon: <ProfileIcon />,
    href: routes.explore,
  },
  {
    name: "Vote",
    icon: <VoteIcon />,
    href: routes.proposals,
    dropdownItems: [
      {
        name: "Vote with pools",
        href: routes.proposals,
      },
      {
        name: "Create proposal",
        href: routes.createProposal,
      },
    ],
  },*/
  ,
  ,
];

type SidebarProps = {
  className?: string;
};

export default function Sidebar({ className }: SidebarProps) {
  const { closeDrawer } = useDrawer();
  return (
    <aside
      className={cn(
        "top-0 left-0 z-40 h-full w-full max-w-full border-r border-dashed border-gray-200 bg-body dark:border-gray-700 dark:bg-dark xs:w-80 xl:fixed  xl:w-72 2xl:w-80",
        className
      )}
    >
      <div className="relative flex h-24 items-center justify-between overflow-hidden px-6 py-4 2xl:px-8">
        <Image src={ShapeImage} alt="Shape image" />
        <Logo />
        <div className="md:hidden">
          <Button
            title="Close"
            color="white"
            shape="circle"
            variant="transparent"
            size="small"
            onClick={closeDrawer}
          >
            <Close className="h-auto w-2.5" />
          </Button>
        </div>
      </div>

      <Scrollbar style={{ height: "calc(100% - 96px)" }}>
        <div className="px-6 pb-5 2xl:px-8">
          <div className="mt-12">
            {menuItems.map((item, index) => (
              <MenuItem
                key={index}
                name={item.name}
                href={item.href}
                icon={item.icon}
                dropdownItems={item.dropdownItems}
              />
            ))}
          </div>

          {/*<div className="relative mt-20 hidden flex-col rounded-lg bg-gray-200 p-6 dark:bg-[#333E59] lg:flex">
            <div className="-mt-12">
              <Image src={ShapeImage} alt="Shape image" />
            </div>
            <h2 className="font-[20px] mt-5 mb-7 text-center font-semibold leading-8 text-light-dark dark:text-white">
              Explore the new Blockchain System
            </h2>
            <button className="h-12 rounded-lg bg-brand text-white">
              Try Now{" "}
            </button>
          </div>*/}
        </div>
      </Scrollbar>
    </aside>
  );
}
