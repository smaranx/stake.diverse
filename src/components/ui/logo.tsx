import Image from "next/image";
import AnchorLink from "@/components/ui/links/anchor-link";
import { useIsMounted } from "@/lib/hooks/use-is-mounted";
import { useIsDarkMode } from "@/lib/hooks/use-is-dark-mode";

const Logo: React.FC<React.SVGAttributes<{}>> = (props) => {
  const isMounted = useIsMounted();
  const { isDarkMode } = useIsDarkMode();

  return (
    <AnchorLink
      href="/"
      className="flex w-28 outline-none sm:w-32 4xl:w-36"
      {...props}
    >
      {/*<span className="relative flex overflow-hidden">
        {isMounted && isDarkMode && (
          <Image src={darkLogo} alt="Logo" priority />
        )}
        {isMounted && !isDarkMode && (
          <Image src={lightLogo} alt="Logo" priority />
        )}
        </span>*/}
    </AnchorLink>
  );
};

export default Logo;
