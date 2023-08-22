"use client";

import { z } from "zod";
import Image from "next/image";
import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";

// Search Bar to be used on SearchBar main component, have the structure, styles and filtering queries.

const SearchDroneNamePropsSchema = z.object({
  droneList: z.array(z.string()),
  droneName: z.string(),
  setDroneName: z.function(z.tuple([z.string()], z.void())),
});

type SearchDroneNameProps = z.infer<typeof SearchDroneNamePropsSchema>;

const SearchDrone = ({
  droneList,
  droneName,
  setDroneName,
}: SearchDroneNameProps) => {
  const [query, setQuery] = useState("");
  const [filteredDroneList, setFilteredDroneList] = useState(droneList);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setQuery(newQuery);

    const filteredList =
      newQuery === ""
        ? droneList
        : droneList.filter((item) =>
            item
              .toLowerCase()
              .replace(/\s+/g, "")
              .startsWith(newQuery.toLowerCase())
          );

    setFilteredDroneList(filteredList);
  };

  return (
    <div className="flex-1 max-sm:w-full flex justify-start items-center">
      <Combobox value={droneName} onChange={setDroneName}>
        <div className="relative w-full">
          {/* Button for the combobox. Click on the icon to see the complete dropdown */}
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/drone.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="drone logo"
            />
          </Combobox.Button>

          {/* Input field for searching */}
          <Combobox.Input
            className="w-full h-[48px] pl-12 p-4 rounded-full max-sm:rounded-full bg-light-white outline-none cursor-pointer text-sm border-2"
            displayValue={(item: string) => item}
            onChange={handleInputChange} // Update the search query when the input changes
            placeholder="Drone Name..."
          />

          {/* Transition for displaying the options */}
          <Transition
            as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")} // Reset the search query after the transition completes
          >
            <Combobox.Options
              className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              static
            >
              {filteredDroneList.length === 0 && query !== "" ? (
                <Combobox.Option
                  value={query}
                  className="cursor-default select-none py-2 pl-10 pr-4"
                >
                  Create "{query}"
                </Combobox.Option>
              ) : (
                filteredDroneList.map((item) => (
                  <Combobox.Option
                    key={item}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-blue-500 text-white" : "text-gray-900"
                      }`
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {item}
                        </span>

                        {/* Show an active blue background color if the option is selected */}
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-purple"
                            }`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchDrone;
