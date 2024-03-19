import React from "react";
import { Skeleton } from "antd";

const HomeCardSkeleton: React.FC = () => (
  <>
    {Array.from({ length: 6 }).map((_, index) => (
      <div key={index}>
        <Skeleton.Image
          active={true}
          className="!w-full"
          style={{ height: "192px" }}
        />
        <Skeleton.Input className="mt-2" active={true} />
        <Skeleton.Input className="mt-1" active={true} block />
        <Skeleton.Input className="mt-1" active={true} block />
      </div>
    ))}
  </>
);

export default HomeCardSkeleton;
