"use client";

import { z } from "zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// Search Bar component control position, form and submit on Menu pages

import SearchDrone from "./SearchDrone";
import { updateSearchParams } from "../utils/utils";

const SearchBarPropsSchema = z.object({
  droneList: z.array(z.string()),
});

type SearchBarProps = z.infer<typeof SearchBarPropsSchema>;

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-12 z-10 ${otherClasses}`}>
    <Image
      src={"/magnifying-glass.svg"}
      alt={"magnifying glass"}
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = ({ droneList }: SearchBarProps) => {
  const [droneName, setDroneName] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateSearchParams(router, droneName.toLowerCase());
  };

  return (
    <form
      className="flex items-center justify-start  w-full relative  max-w-3xl"
      onSubmit={handleSearch}
    >
      <div className="flex items-center justify-start w-full relative max-w-3xl mx-4">
        <SearchDrone
          droneName={droneName}
          setDroneName={setDroneName}
          droneList={droneList}
        />
        <SearchButton otherClasses="" />
      </div>
    </form>
  );
};

export default SearchBar;
