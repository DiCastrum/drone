import { z } from "zod";
import Image from "next/image";
import { Card, PaginationControls, SearchBar } from "@/components";
import { parseCSV, filterDroneData } from "../../utils/index";

// Menu list page will have the search results.

const FilterPropsSchema = z.object({
  droneName: z.string().optional(),
  droneType: z.string().optional(),
  page: z.union([z.string(), z.array(z.string()), z.undefined()]),
  per_page: z.union([z.string(), z.array(z.string()), z.undefined()]),
});

const HomePropsSchema = z.object({
  searchParams: FilterPropsSchema,
});

type HomeProps = z.infer<typeof HomePropsSchema>;

export default async function Drone({ searchParams }: HomeProps) {
  const allDronesData = await parseCSV();
  const allDroneNameList: string[] = Array.from(
    new Set(allDronesData.map((item) => item.Name))
  );
  const filteredDronesData = filterDroneData(
    allDronesData,
    searchParams.droneName
  );

  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "12";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const pagedDronesData = filteredDronesData.slice(start, end);

  return (
    <main className="overflow-hidden container xl:max-w-7xl mx-auto">
      <div className="relative h-48 mx-10 lg:mx-20 mt-10">
        <Image
          src="/building.jpeg"
          alt="drone card image"
          fill
          className="rounded-lg border-2 border-yellow-400"
        />
      </div>
      <div className="leading-normal text-center">
        <h1 className="text-4xl lg:text-6xl  p-10 font-bold mt-10">
          Find your drone
        </h1>
        <p>Get all the data you need</p>
      </div>
      <div className="mt-12 max-w-sm flex mx-auto">
        <SearchBar droneList={allDroneNameList}></SearchBar>
      </div>
      {filteredDronesData.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-10 sm:px-20 md:px-4 py-4 my-10">
            {pagedDronesData.map((item) => (
              <Card
                key={item.ID}
                {...item}
                droneType={searchParams.droneType ? searchParams.droneType : ""}
              />
            ))}
          </div>
          <PaginationControls
            hasNextPage={end < filteredDronesData.length}
            hasPrevPage={start > 0}
          ></PaginationControls>
        </>
      ) : (
        <div className="flex flex-col my-10">
          <div className="flex mx-auto text-lg text-center text-gray-600 my-10">
            We are sorry but we do not find a drone
          </div>
          <Image
            src="/drone.jpg"
            alt="drone card image"
            width={220}
            height={220}
            className="rounded-lg my-4 mx-auto"
          />
        </div>
      )}
    </main>
  );
}
