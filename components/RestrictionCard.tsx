import { z } from "zod";
import { attributesRestrictionSchema } from "@/utils/utils";

// Card to use on Restriction Data

const RestrictionCardProps = z
  .object({
    id: z.number(),
  })
  .extend({ attributes: attributesRestrictionSchema });

type RestrictionCardType = z.infer<typeof RestrictionCardProps>;

export default function RestrictionCard({
  id,
  attributes,
}: RestrictionCardType) {
  return (
    <>
      <div className="w-full lg:flex">
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col gap-1">
          <h2 className="text-xl font-semibold mb-2">{`ID: ${id}`}</h2>
          <p className="text-gray-600 text-xs">
            <span className="font-bold">Name:</span>
            {` ${attributes.auth_name_en[0]}`}
          </p>
          <p className="text-gray-600 text-xs mt-1">
            <span className="font-bold">Zone:</span>
            {` ${attributes.zone_name_en}`}
          </p>
          <p className="text-gray-600 text-xs mt-1">
            <span className="font-bold">Reason:</span>
            {` ${attributes.zone_reason_id}`}
          </p>
          <p className="text-gray-600 text-xs mt-1">
            <span className="font-bold">Restriction:</span>
            {` ${attributes.zone_restriction_en}`}
          </p>
          <p className="text-gray-600 text-xs mt-1">
            <span className="font-bold">Message:</span>
            {` ${attributes.zone_message_en}`}
          </p>
          <p className="text-gray-600 text-xs mt-1">
            <span className="font-bold">Link:</span>
            {` ${attributes.auth_url_en[0]}`}
          </p>
          <p className="text-gray-600 text-xs mt-1">
            <span className="font-bold">Service:</span>
            {` ${attributes.auth_service_en[0]}`}
          </p>
          <p className="text-gray-600 text-xs mt-1">
            <span className="font-bold">Contact:</span>
            {` ${
              attributes.auth_phone.length > 0
                ? attributes.auth_phone[0]
                : "no contact info"
            }`}
          </p>
          <p className="text-gray-600 text-xs mt-1">
            <span className="font-bold">Permanent:</span>
            {` ${attributes.time_permanent}`}
          </p>
        </div>
      </div>
    </>
  );
}
