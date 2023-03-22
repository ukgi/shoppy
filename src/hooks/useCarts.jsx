import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useUserContext } from "../context/UserContextApi";
import {
  readCartsData,
  removeFromCart,
  storeCartProduct,
} from "../services/firebaseDatabase";

export default function useCarts() {
  const queryClient = useQueryClient();
  const { uid } = useUserContext();

  const cartsQuery = useQuery(["carts", uid || ""], () => readCartsData(uid), {
    staleTime: 1000 * 60 * 3000,
    enabled: !!uid,
  });

  const handleStoreUpdate = useMutation(
    (product) => storeCartProduct(uid, product),
    {
      onSuccess: () => queryClient.invalidateQueries(["carts", uid]),
    }
  );

  const handleDeleteItem = useMutation(
    ({ productId }) => removeFromCart(uid, productId),
    {
      onSuccess: () => queryClient.invalidateQueries(["carts", uid]),
    }
  );

  return {
    cartsQuery,
    handleDeleteItem,
    handleStoreUpdate,
  };
}
