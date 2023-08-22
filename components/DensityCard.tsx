import { z } from "zod";

// Card Component to show on Density data

const DensityCardProps = z.object({
  id: z.number(),
  year: z.number(),
  label: z.number(),
});

type DensityCardType = z.infer<typeof DensityCardProps>;

export default function DensityCard({ id, year, label }: DensityCardType) {
  return (
    <>
      <div className="w-full">
        <div className="bg-white rounded-lg shadow-md p-4 flex">
          <div className="ml-4">
            <h2 className="text-xl font-semibold">{`ID: ${id}`}</h2>
            <p className="text-gray-600 text-xs">{`Year: ${year}`}</p>
            <p className="text-gray-600 text-xs mt-1">{`Label ${label}`}</p>
            <div className="flex mt-3 text-center"></div>
          </div>
        </div>
      </div>
    </>
  );
}
