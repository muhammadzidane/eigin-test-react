import React from "react";
import { Skeleton } from "antd";

const HomeDetailSkeleton: React.FC = () => {
  return (
    <div>
      <Skeleton.Image
        active={true}
        className="!w-full"
        style={{ height: "192px" }}
      />
      <Skeleton.Input className="mt-3" active={true} />
      <Skeleton.Input className="mt-3" active={true} block />
      <Skeleton.Input className="mt-1" active={true} block />
      <Skeleton.Input className="mt-1" active={true} block />
      <Skeleton.Input className="mt-1" active={true} block />
    </div>
  );
};

export default HomeDetailSkeleton;
