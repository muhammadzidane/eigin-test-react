import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { HomeNewsCard } from ".."; // Adjust the import path as needed
import { useNavigate } from "react-router-dom";

// Mock the useNavigate hook
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("HomeNewsCard Component", () => {
  const mockProps = {
    title: "Test Title",
    description: "Test Description",
    urlToImage: "https://via.placeholder.com/400x200",
    readMoreUrl: "test-url",
  };

  it("renders with correct content when all props are provided", () => {
    const { getByText, getByAltText } = render(<HomeNewsCard {...mockProps} />);

    expect(getByText(mockProps.title)).toBeInTheDocument();
    expect(getByText(mockProps.description)).toBeInTheDocument();
    expect(getByAltText("card")).toBeInTheDocument();
  });

  it("renders with default image when urlToImage & readMoreUrl are not provided", () => {
    const { getByAltText } = render(
      <HomeNewsCard
        title={mockProps.title}
        description={mockProps.description}
        // urlToImage & readMoreUrl not provided intentionally
      />
    );

    const defaultImage = "https://via.placeholder.com/400x200";
    expect(getByAltText("card")).toHaveAttribute("src", defaultImage);
  });

  it("navigates to detail page on clicking Read more", () => {
    const navigateMock = jest.fn();
    useNavigate.mockReturnValue(navigateMock);

    const { getByText } = render(<HomeNewsCard {...mockProps} />);

    fireEvent.click(getByText("Read more"));
    expect(navigateMock).toHaveBeenCalledWith(
      `/detail?q=${mockProps.readMoreUrl}`
    );
  });
});
