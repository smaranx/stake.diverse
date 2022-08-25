import ListCard from "@/components/ui/list-card";
import Avalanche from "@/assets/images/avalanche.svg";
import Anchor from "@/assets/images/anchor.svg";
import Cappasity from "@/assets/images/cappasity.svg";
import PancakeBunny from "@/assets/images/pancake-bunny.svg";
import Ethereum from "@/assets/images/currency/ethereum.svg";
import { SearchIcon } from "@/components/icons/search";
const searchFilter = [
  { id: 1, name: "AVALANCHE", logo: Avalanche },
  { id: 2, name: "ETHEREUM", logo: Ethereum },
  { id: 3, name: "CAPPASITY", logo: Cappasity },
  { id: 4, name: "ANCHOR", logo: Anchor },
  { id: 5, name: "PANCAKEBUNNY", logo: PancakeBunny },
];

export default function TransactionSearchForm() {
  return (
    <div className="block">
      <form
        className="relative flex w-full rounded-full"
        noValidate
        role="search"
      >
        <label className="flex flex-1 items-center">
          <input
            className="h-12 w-full rounded-full border border-gray-200 py-1 text-sm text-gray-900 placeholder:text-gray-600 focus:border-gray-900 focus:outline-none pr-5 pl-11 dark:border-gray-600 dark:bg-light-dark dark:text-white dark:placeholder:text-gray-400 dark:focus:border-gray-500 sm:pl-14 xl:pl-16"
            placeholder="Filter by protocol, token, event, etc..."
            autoComplete="off"
            type="search"
          />
          <div className="absolute flex h-full w-10 items-center justify-center text-gray-600 left-0 pl-2  dark:text-white sm:w-14 sm:pl-3  xl:w-16">
            <SearchIcon className="h-4 w-4" />
          </div>
        </label>
      </form>
      <div className="mt-4 flex flex-wrap gap-3 sm:mt-5 lg:mt-6">
        {searchFilter?.map((item) => (
          <div key={item?.id} role="button">
            <ListCard
              item={item}
              className="shrink-0 rounded-full p-2 transition-transform hover:-translate-y-0.5 hover:bg-gray-50 focus:-translate-y-0.5 focus:bg-gray-50 pr-5"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
