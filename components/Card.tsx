import { z } from "zod";
import Image from "next/image";
import { capitalizeFirstLetter, roundNumber } from "@/utils/utils";
import { Button } from ".";

// Card Component to be used on List Menus

const CardPropsSchema = z.object({
  ID: z.string(),
  Name: z.string(),
  Type: z.string(),
  Latitude: z.string(),
  Longitude: z.string(),
  droneType: z.string(),
});

type CardProps = z.infer<typeof CardPropsSchema>;

export default function Card({
  ID,
  Name,
  Type,
  Latitude,
  Longitude,
  droneType,
}: CardProps) {
  return (
    <>
      <div className="w-full">
        <div className="bg-white rounded-lg shadow-md p-4 flex">
          <div className="flex-shrink-0">
            <Image
              src="/drone.jpg"
              alt="drone card image"
              width={120}
              height={120}
              className="rounded-lg"
            />
          </div>
          <div className="ml-4">
            <h2 className="text-xl font-semibold">{Name}</h2>
            <p className="text-gray-600 text-xs">{`ID: ${ID}`}</p>
            <p className="text-gray-600 text-xs mt-1">{Type}</p>
            <div className="flex mt-3 text-center">
              <Button
                title={`Drone ${capitalizeFirstLetter(droneType)}`}
                link={`/drone/${droneType}/${droneType}/${roundNumber(
                  Longitude
                )}/${roundNumber(Latitude)}`}
                containerStyles="text-gray-600 text-xs border-gray-300 border-2 rounded-lg p-1 hover:bg-gray-500 hover:text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
