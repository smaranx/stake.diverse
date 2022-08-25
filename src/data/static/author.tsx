import CoverImage from "@/assets/images/1.jpg";
import AuthorImage from "@/assets/images/author.gif";
import { Instagram } from "@/components/icons/brands/instagram";
import { Twitter } from "@/components/icons/brands/twitter";
import User1 from "@/assets/images/avatar/4.png";
import User2 from "@/assets/images/avatar/2.png";
import User3 from "@/assets/images/avatar/3.png";
import User4 from "@/assets/images/avatar/1.png";
import User5 from "@/assets/images/avatar/6.png";
import { useContext } from "react";
import { WalletContext } from "@/lib/hooks/use-connect";
import Data from "@/data1.js";
import { render } from "@headlessui/react/dist/utils/render";

const Records = () => {
  //const dataa = Data.children;

  return Data;
};
const WalletAddress = () => {
  const { address } = useContext(WalletContext);
  return <>{address}</>;
};

const NFTQuantity = () => {
  let obj = Data.find(
    (x) => x.HolderAddress == useContext(WalletContext).address
  );

  return <>{obj?.Quantity}</>;
};

const NFTPercentage = () => {
  const obj = Data.find(
    (x) => x.HolderAddress == useContext(WalletContext).address
  );
  return <>{obj?.percentage}</>;
};

export const authorData = {
  name: "Diverse NFT",
  wallet_key: <WalletAddress />,

  cover_image: {
    id: 1,
    thumbnail: CoverImage,
    original: CoverImage,
  },
  avatar: {
    id: 1,
    thumbnail: AuthorImage,
    original: AuthorImage,
  } /*
  bio: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.",
  following: "1,504",
  followers: "1,845",
  followed_by: [
    {
      id: 1,
      name: "Thirtythree",
      slug: "thirtythree",
      avatar: {
        id: 1,
        thumbnail: User1,
        original: User1,
      },
    },
    {
      id: 2,
      name: "Thirtythree",
      slug: "thirtythree",
      avatar: {
        id: 1,
        thumbnail: User2,
        original: User2,
      },
    },
    {
      id: 3,
      name: "Thirtythree",
      slug: "thirtythree",
      avatar: {
        id: 1,
        thumbnail: User3,
        original: User3,
      },
    },
    {
      id: 4,
      name: "Thirtythree",
      slug: "thirtythree",
      avatar: {
        id: 1,
        thumbnail: User4,
        original: User4,
      },
    },
    {
      id: 5,
      name: "Thirtythree",
      slug: "thirtythree",
      avatar: {
        id: 1,
        thumbnail: User5,
        original: User5,
      },
    },
  ],*/,
  socials: [
    {
      id: 1,
      title: <NFTQuantity />,
      link: "",
      /*icon: <Twitter className="w-4" />,*/
    },
    {
      id: 2,
      title: "",
      link: "",
      /* icon: <Instagram className="w-4" />,*/
    },
  ],
  links: [
    {
      id: 1,
      title: "",
      link: <NFTPercentage />,
    },
    {
      id: 2,
      title: "",
      link: "",
    },
  ],
};
