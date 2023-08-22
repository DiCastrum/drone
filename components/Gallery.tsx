"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { updateSearchParams } from "@/utils/utils";
import { Button } from ".";

// Gallery component, uses Image on the left and text on the right side

export default function Gallery() {
  const router = useRouter();

  const handleSearch = (e: any, value: string) => {
    e.preventDefault();
    const droneType = value;
    updateSearchParams(router, "", value);
  };

  return (
    <>
      <section className="container xl:max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 sm:gap-x-8 py-8 px-10 text-center">
        <div className="relative w-full h-64 z-0">
          <Image src="/tablet.jpeg" alt="gallery image" fill />
        </div>
        <div className="col-span-2 sm:col-span-1 md:col-span-2 border-t-4 sm:border-l-4 sm:border-t-0 border-yellow-400 px-4">
          <h2 className="text-4xl leading-normal pt-2 md:pt-6 px-2">
            Look for Your Drone
          </h2>
          <p>Are you looking for Density or Restrictions</p>
          <div className="flex flex-col md:flex-row justify-center mx-auto mt-10 gap-4">
            <Button
              title="Drone Density"
              containerStyles="text-yellow-400 border-2 border-yellow-400 rounded-full hover:text-white hover:bg-yellow-400"
              value="density"
              handleClick={(e) => handleSearch(e, "density")}
            ></Button>
            <Button
              title="Drone Restrictions"
              containerStyles="text-yellow-400 border-2 border-yellow-400 rounded-full hover:text-white hover:bg-yellow-400"
              value="restriction"
              handleClick={(e) => handleSearch(e, "restriction")}
            ></Button>
          </div>
        </div>
      </section>
    </>
  );
}
