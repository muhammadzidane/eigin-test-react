// React
import React, { useCallback, useEffect, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

// Hooks
import { useHome } from "@/features/home/hooks";
import { HomeDetailSkeleton } from "./components";

const Homedetail: React.FC = () => {
  // Hooks
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { fetchHomeNews, dataHomeNews, isLoadingHomeNews } = useHome();
  const getHomeNews = useCallback(() => {
    void fetchHomeNews({
      params: { sources: "techcrunch", q: searchParams.get("q") },
    });
  }, [fetchHomeNews, searchParams]);

  const detailNews = useMemo(() => dataHomeNews?.articles[0], [dataHomeNews]);

  // Lifecycle
  useEffect(() => {
    getHomeNews();
  }, [getHomeNews]);

  // Methods
  const onClickBackToList = () => {
    navigate("/");
  };

  return (
    <div className="container mx-auto py-8">
      {isLoadingHomeNews ? (
        <HomeDetailSkeleton />
      ) : (
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src={detailNews?.urlToImage}
            alt="News Image"
            className="w-full h-64 object-cover object-center"
          />
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">{detailNews?.title}</h1>
            <p className="text-gray-500 text-sm mb-4">
              Author <span className="font-semibold">{detailNews?.author}</span>
            </p>
            <p className="text-gray-700 leading-relaxed">
              {detailNews?.description}
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              {detailNews?.content}
            </p>
            <div
              onClick={onClickBackToList}
              className="cursor-pointer text-blue-500 hover:underline mt-6 inline-block font-semibold"
            >
              Back to News List
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Homedetail;
