import { z } from "zod";

export const updateSearchParams = (
  router: any,
  droneName?: string,
  droneType?: string
) => {
  // Create a new URLSearchParams object using the current URL search parameters
  const searchParams = new URLSearchParams(window.location.search);

  // Update or delete the 'droneName' search parameter based on the 'droneName' value
  if (droneName) {
    searchParams.set("droneName", droneName);
  } else {
    searchParams.delete("droneName");
  }

  // Update the 'droneType' search parameter based on the 'droneType' value
  if (droneType) {
    searchParams.set("droneType", droneType);
  }

  // Delete pagination
  searchParams.delete("page");
  searchParams.delete("per_page");

  // Generate the new pathname with the updated search parameters
  const newPathname = `/drone?${searchParams.toString()}`;

  router.push(newPathname);
};

export function roundNumber(numString: string, decimalPlaces = 5) {
  const num = parseFloat(numString);
  const roundedNum = num.toFixed(decimalPlaces);
  return roundedNum;
}

export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

//Fetch function

const attributesDensitySchema = z.object({
  number: z.number(),
  i_year: z.number(),
  reli: z.number(),
  label: z.number(),
});

export const attributesRestrictionSchema = z.object({
  zone_name_en: z.string(),
  zone_reason_id: z.string(),
  zone_restriction_en: z.string(),
  zone_message_en: z.string(),
  auth_url_en: z.array(z.string()),
  auth_name_en: z.array(z.string()),
  auth_service_en: z.array(z.string()),
  auth_phone: z.array(z.string()),
  time_permanent: z.string(),
});

const dataSchema = z.object({
  layerBodId: z.string(),
  layerName: z.string(),
  featureId: z.number(),
  id: z.number(),
  attributes: attributesDensitySchema,
});

const dataDensitySchema = dataSchema.extend({
  attributes: attributesDensitySchema,
});

const dataRestrictionSchema = dataSchema.extend({
  attributes: attributesRestrictionSchema,
});

export const densityDataSchema = z.array(dataDensitySchema).nullable();
export const restrictionDataSchema = z.array(dataRestrictionSchema).nullable();

export type DensityDataProps = z.infer<typeof densityDataSchema>;
export type RestrictionDataProps = z.infer<typeof restrictionDataSchema>;

export async function fetchDensityDrone(longitude: string, latitude: string) {
  try {
    const url = `https://api3.geo.admin.ch/rest/services/api/MapServer/identify?layers=all:ch.bfs.volkszaehlung-bevoelkerungsstatistik_einwohner&geometryType=esriGeometryPoint&sr=4326&lang=en&returnGeometry=false&tolerance=0&geometry={"x": ${longitude}, "y": ${latitude}}`;

    const response = await fetch(url);
    const data = await response.json();

    const parsedData = densityDataSchema.safeParse(data.results);

    return parsedData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function fetchRestrictionDrone(
  longitude: string,
  latitude: string
) {
  try {
    // https://api3.geo.admin.ch/rest/services/api/MapServer/identify?layers=all:ch.bazl.einschraenkungen-drohnen&geometryType=esriGeometryPoint&sr=4326&lang=en&returnGeometry=false&tolerance=0&geometry={"x": 8.56383,"y": 47.45539}
    // https://api3.geo.admin.ch/rest/services/api/MapServer/identify?layers=all:ch.bazl.einschraenkungen-drohnen&geometryType=esriGeometryPoint&sr=4326&lang=en&returnGeometry=false&tolerance=0&geometry={"x": ${longitude}, "y": ${latitude}}
    const url = `https://api3.geo.admin.ch/rest/services/api/MapServer/identify?layers=all:ch.bazl.einschraenkungen-drohnen&geometryType=esriGeometryPoint&sr=4326&lang=en&returnGeometry=false&tolerance=0&geometry={"x": ${longitude}, "y": ${latitude}}`;
    const response = await fetch(url);
    const data = await response.json();

    const parsedData = restrictionDataSchema.safeParse(data.results);

    return parsedData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
