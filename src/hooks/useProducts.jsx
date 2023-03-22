import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  readProductData,
  writeProductData,
} from "../services/firebaseDatabase";

export default function useProducts() {
  const queryClient = useQueryClient();

  const productsQuery = useQuery(["products"], readProductData, {
    staleTime: 1000 * 60 * 3000,
  });

  const addProduct = useMutation(
    ({ product, url }) => writeProductData(product, url),
    {
      onSuccess: () => queryClient.invalidateQueries(["products"]),
    }
  );

  return { productsQuery, addProduct };
}
