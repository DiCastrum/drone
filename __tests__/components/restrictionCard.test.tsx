import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import RestrictionCard from "../../components/RestrictionCard";

describe("RestrictionCard component", () => {
  const mockProps = {
    id: 123,
    attributes: {
      zone_name_en: "Zone",
      zone_reason_id: "Reason",
      zone_restriction_en: "Restriction",
      zone_message_en: "Message",
      auth_url_en: ["Link"],
      auth_name_en: ["Name"],
      auth_service_en: ["Service"],
      auth_phone: ["123-456-7890"],
      time_permanent: "yes",
    },
  };

  it("renders correctly with given props", () => {
    render(<RestrictionCard {...mockProps} />);

    // Test if rendered content matches the expected values
    expect(screen.getByText(`ID: ${mockProps.id}`)).toBeInTheDocument();
    expect(
      screen.getByText(`${mockProps.attributes.auth_name_en[0]}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`${mockProps.attributes.zone_name_en}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`${mockProps.attributes.zone_reason_id}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`${mockProps.attributes.zone_restriction_en}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`${mockProps.attributes.zone_message_en}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`${mockProps.attributes.auth_url_en[0]}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`${mockProps.attributes.auth_service_en[0]}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`${mockProps.attributes.auth_phone[0]}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`${mockProps.attributes.time_permanent}`)
    ).toBeInTheDocument();
  });
});
