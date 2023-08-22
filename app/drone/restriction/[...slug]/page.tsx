import { z } from "zod";
import { Button, RestrictionCard } from "@/components";
import { RestrictionDataProps, fetchRestrictionDrone } from "@/utils/utils";

// Dynamic Restriction page

const PagePropsSchema = z.object({
  params: z.object({
    slug: z.array(z.string()),
  }),
});

type PageProps = z.infer<typeof PagePropsSchema>;

export default async function locationPage({ params: { slug } }: PageProps) {
  const droneData = await fetchRestrictionDrone(slug[1], slug[2]);
  const droneRestrictionData: RestrictionDataProps = droneData.success
    ? droneData.data
    : [];

  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <div className="container xl:max-w-7xl mx-auto">
          <h1 className="text-4xl lg:text-6xl  p-10 font-bold text-center">
            Restrictions at the chosen location
          </h1>
          <h2 className="text-2xl  p-10 font-bold text-center">
            Data on restrictions for your location
          </h2>
          {droneRestrictionData && droneRestrictionData.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 px-10">
              {droneRestrictionData.map((item) => (
                <RestrictionCard
                  key={item.id}
                  id={item.id}
                  attributes={item.attributes}
                ></RestrictionCard>
              ))}
            </div>
          ) : (
            <div className="flex mx-auto max-w-2xl pt-8 px-4 justify-center">
              <div className="text-2xl text-gray-800 font-bold bg-white rounded-lg shadow-md p-6 justify-center">
                We are sorry!! No results found for that location
              </div>
            </div>
          )}
          <div className="flex justify-center py-10">
            <Button
              title="Go back"
              containerStyles="text-gray-500 border-2 border-gray-500 rounded-full hover:text-white hover:bg-gray-500 py-3 px-6"
              link={`/drone/?droneType=${slug[0]}`}
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
}
