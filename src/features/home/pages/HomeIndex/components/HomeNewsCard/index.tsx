// React
import React from "react";
import { useNavigate } from "react-router-dom";

// Interfaces
import { type IHomeNewsCard } from "./interfaces";

const HomeNewsCard: React.FC<IHomeNewsCard> = ({
  title,
  description,
  urlToImage = "https://via.placeholder.com/400x200",
  readMoreUrl = "#",
}) => {
  const navigate = useNavigate();

  const onClickDetail = () => {
    navigate(`/detail?q=${readMoreUrl}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
      <div>
        <img
          src={urlToImage}
          alt="card"
          className="w-full h-48 object-cover object-center"
        />
      </div>
      <div className="flex flex-col flex-1 justify-between p-6">
        <div>
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-700">{description}</p>
        </div>
        <div
          onClick={onClickDetail}
          className="cursor-pointer text-blue-500 hover:underline mt-2 inline-block font-semibold"
        >
          Read more
        </div>
      </div>
    </div>
  );
};

export default HomeNewsCard;
