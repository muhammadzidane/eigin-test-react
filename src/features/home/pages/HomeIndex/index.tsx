// React
import { useCallback, useEffect } from "react";

// Components
import { HomeCardSkeleton, HomeNewsCard } from "./components";

// Hooks
import { useHome } from "@/features/home/hooks";

const HomeIndex: React.FC = () => {
  // Hooks
  const { fetchHomeNews, dataHomeNews, isLoadingHomeNews } = useHome();
  const getHomeNews = useCallback(() => {
    void fetchHomeNews({ params: { sources: "techcrunch" } });
  }, [fetchHomeNews]);

  // Lifecycle
  useEffect(() => {
    getHomeNews();
  }, [getHomeNews]);

  return (
    <div className="w-full py-12 px-16 overflow-x-hidden">
      <h1 className="text-3xl font-bold mb-6">Latest News</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {isLoadingHomeNews ? (
          <HomeCardSkeleton />
        ) : (
          <>
            {dataHomeNews?.articles.map(
              ({ title, description, urlToImage }, articleIndex) => (
                <HomeNewsCard
                  key={articleIndex}
                  title={title}
                  description={description}
                  urlToImage={urlToImage}
                  readMoreUrl={title}
                />
              )
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default HomeIndex;
