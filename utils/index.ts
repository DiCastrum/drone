import fs from "fs";
import path from "path";
import Papa from "papaparse";
import { z } from "zod";

export const CSVItemSchema = z.object({
  ID: z.string(),
  Name: z.string(),
  Type: z.string(),
  Latitude: z.string(),
  Longitude: z.string(),
});

export type CSVItem = z.infer<typeof CSVItemSchema>;

export async function parseCSV(): Promise<CSVItem[]> {
  const filePath = path.join(process.cwd(), "public", "assets.csv");
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const parsedData = Papa.parse<CSVItem>(fileContent, {
    header: true,
    skipEmptyLines: true,
  });

  return parsedData.data;
}

export function filterDroneData(
  parsedData: CSVItem[],
  filterName?: string
): CSVItem[] {
  let filteredData = parsedData;

  if (filterName) {
    filteredData = parsedData.filter(
      (item) => item.Name.toLowerCase() === filterName.toLowerCase()
    );
  }

  return filteredData;
}
