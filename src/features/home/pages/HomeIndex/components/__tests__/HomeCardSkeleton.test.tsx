// React Test
import React from "react";
import { render } from "@testing-library/react";

// Components
import { HomeCardSkeleton } from "..";

describe("HomeCardSkeleton Component", () => {
  it("renders skeleton elements correctly", () => {
    const { container } = render(<HomeCardSkeleton />);

    const skeletonImages =
      container.getElementsByClassName("ant-skeleton-image");
    const skeletonInputs =
      container.getElementsByClassName("ant-skeleton-input");

    expect(skeletonImages.length).toBe(6);
    expect(skeletonInputs.length).toBe(18);
  });
});
