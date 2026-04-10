"use client";

import { useQuery } from "@tanstack/react-query";
import { getOrdersData, getUserID } from "@/actions/order.action";

export const useOrders = () => {
  return useQuery({
    queryKey: ["Orders"],
    queryFn: async () => {
      const userID = await getUserID();
      if (userID) {
        const data = await getOrdersData(userID);

        return data;
      } else return null;
    },
    staleTime: 1000 * 60 * 5,
  });
};
