"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";

// Pagination control

interface PaginationControlsProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export default function PaginationControls({
  hasNextPage,
  hasPrevPage,
}: PaginationControlsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const path = usePathname();

  const droneType = searchParams.get("droneType");
  const droneName = searchParams.get("droneName");

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "12";

  // Creating new Url for previous page
  const previousPage = `${path}?${droneType ? `droneType=${droneType}` : ""}${
    droneName ? `&droneName=${droneName}` : ""
  }&page=${Number(page) - 1}&per_page=${per_page}`;

  // Creating new Url for next page
  const nextPage = `${path}?${droneType ? `droneType=${droneType}` : ""}${
    droneName ? `&droneName=${droneName}` : ""
  }&page=${Number(page) + 1}&per_page=${per_page}`;

  return (
    <div className="flex gap-2 justify-center pb-10">
      {hasPrevPage && (
        <button
          className="text-gray-500 border-2 border-gray-500 rounded-full hover:text-white hover:bg-gray-500 py-3 px-6"
          onClick={() => {
            router.push(previousPage);
          }}
        >
          prev page
        </button>
      )}
      {hasNextPage && (
        <button
          className="text-gray-500 border-2 border-gray-500 rounded-full hover:text-white hover:bg-gray-500 py-3 px-6"
          onClick={() => {
            router.push(nextPage);
          }}
        >
          next page
        </button>
      )}
    </div>
  );
}
