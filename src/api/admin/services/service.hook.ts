import { useQuery } from "@tanstack/react-query";
import { getServices } from "./service.api";

const useGetService = () => {
  const serviceInfo = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
    select: (data) => {
      const services = data.data.map((item) => ({
        id: item._id,
        name: item.name,
        description: item.description,
        price: item.price,
      }));
      return services;
    },
    // gcTime: 5000, // kotokkhon data cache kore rakhbe.
    // staleTime: 2000, //  Infinity  use korle refetch hobe na.
  });
  return serviceInfo;
};

export default useGetService;
