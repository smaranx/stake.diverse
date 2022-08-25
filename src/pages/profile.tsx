import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";
import type { NextPageWithLayout } from "@/types";
import { useState } from "react";
import { useCopyToClipboard } from "@/lib/hooks/use-copy-to-clipboard";
import DashboardLayout from "@/layouts/_dashboard";
import Button from "@/components/ui/button";
import Image from "next/image";
import AnchorLink from "@/components/ui/links/anchor-link";
import { Copy } from "@/components/icons/copy";
import { Check } from "@/components/icons/check";
import AuthorInformation from "@/components/author/author-information";
import ProfileTab from "@/components/profile/profile-tab";
import Avatar from "@/components/ui/avatar";
// static data
import { authorData } from "@/data/static/author";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

const AuthorProfilePage: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = () => {
  let [copyButtonStatus, setCopyButtonStatus] = useState(false);
  let [_, copyToClipboard] = useCopyToClipboard();
  const handleCopyToClipboard = () => {
    copyToClipboard(authorData.wallet_key);
    setCopyButtonStatus(true);
    setTimeout(() => {
      setCopyButtonStatus(copyButtonStatus);
    }, 2500);
  };
  return (
    <>
      <NextSeo
        title="Profile"
        description="Deswap - React Next Web3 NFT Crypto Dashboard Template"
      />
      {/* Profile Cover Image */}
      <div className="sm:h-22 2xl:h-45 relative h-36 w-full overflow-hidden rounded-lg md:h-32 xl:h-40 3xl:h-[248px]">
        <Image
          src={authorData?.cover_image?.thumbnail}
          placeholder="blur"
          layout="fill"
          objectFit="cover"
          alt="Cover Image"
        />
      </div>
      <div className="align-center">
        {/* Profile Container */}
        <div className="mx-auto flex w-full shrink-0 flex-col md:px-4 xl:px-6 3xl:max-w-[1700px] 3xl:px-12">
          {/* Profile Image */}
          <Avatar
            size="xl"
            image={authorData?.avatar?.thumbnail}
            alt="Author"
            className="z-10 mx-auto -mt-12 dark:border-gray-500 sm:-mt-14 md:mx-0 md:-mt-16 xl:mx-0 3xl:-mt-20"
          />
          {/* Profile Info */}
          <div className="flex w-full flex-col pt-4 md:flex-row md:pt-10 lg:flex-row xl:pt-12">
            <div className="xl:w-514 shrink-0 border-dashed border-gray-200 pt-6 pb-9 dark:border-gray-700 md:-mt-2.5 md:pt-1.5 md:pb-0 md:pl-7 lg:pl-10 xl:pl-2 3xl:pl-16">
              <div className="text-center md:text-left">
                {/* Name */}
                <h2 className="text-xl font-medium tracking-tighter text-gray-900 dark:text-white xl:text-2xl">
                  {authorData?.name}
                </h2>

                {/* Username 
              <div className="mt-1 text-sm font-medium tracking-tighter text-gray-600 dark:text-gray-400 xl:mt-3">
                @{authorData?.user_name}
              </div>

              {/* User ID and Address */}
                <div className="mt-15 inline-flex h-9 items-center rounded-full bg-white shadow-card dark:bg-light-dark xl:mt-6">
                  {authorData?.id}
                  <div className="text w-28 grow-0 truncate text-ellipsis bg-center pl-4 text-xs text-gray-500 dark:text-gray-300 sm:w-32 sm:text-sm">
                    {authorData?.wallet_key}
                  </div>
                  <div
                    className="flex cursor-pointer items-center px-4 text-gray-500 transition hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    title="Copy Address"
                    onClick={handleCopyToClipboard}
                  >
                    {copyButtonStatus ? (
                      <Check className="h-auto w-3.5 text-green-500" />
                    ) : (
                      <Copy className="h-auto w-3.5" />
                    )}
                  </div>
                </div>
              </div>

              {/* Followers, Following and follow button 
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 border-y border-dashed border-gray-200 py-5 text-center dark:border-gray-700 md:justify-start md:text-left xl:mt-12 xl:gap-8 xl:py-6">
              <div>
                <div className="mb-1.5 text-lg font-medium tracking-tighter text-gray-900 dark:text-white">
                  {authorData?.following}
                </div>
                <div className="text-sm tracking-tighter text-gray-600 dark:text-gray-400">
                  Following
                </div>
              </div>

              <div>
                <div className="mb-1.5 text-lg font-medium tracking-tighter text-gray-900 dark:text-white">
                  {authorData?.followers}
                </div>
                <div className="text-sm tracking-tighter text-gray-600 dark:text-gray-400">
                  Followers
                </div>
              </div>

              <Button
                color="white"
                className="shadow-card dark:bg-light-dark md:h-10 md:px-5 xl:h-12 xl:px-7"
              >
                Follow
              </Button>
            </div>

            {/* Followed by */}

              <AuthorInformation
                className="pt-6 pb-9 md:-mt-2.5 md:pt-1.5 md:pb-0 md:pl-2 lg:pl-2 xl:pl-2 3xl:pl-3"
                data={authorData}
              />
            </div>

            {/*<div className="grow pt-6 pb-9 md:-mt-2.5 md:pt-1.5 md:pb-0 md:pl-7 lg:pl-10 xl:pl-14 3xl:pl-16">
            <ProfileTab />
            </div>*/}
          </div>
        </div>
      </div>
    </>
  );
};

AuthorProfilePage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default AuthorProfilePage;
