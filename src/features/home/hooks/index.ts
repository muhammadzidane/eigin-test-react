// RTK
import { useLazyHomeNewsQuery } from "../redux/rtk";

export const useHome = () => {
  const [
    fetchHomeNews,
    {
      data: dataHomeNews,
      isLoading: isLoadingHomeNews,
      isFetching: isFetchingHomeNews,
    },
  ] = useLazyHomeNewsQuery();

  return {
    // Lazy
    fetchHomeNews,
    dataHomeNews,
    isLoadingHomeNews,
    isFetchingHomeNews,
  };
};
