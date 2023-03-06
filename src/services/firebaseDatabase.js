import { getDatabase, set, ref, get, child } from "firebase/database";
import { v4 as uuid } from "uuid";
import { app } from "./firebaseAuth";

const database = getDatabase(app);

export async function writeProductData(product, image) {
  const id = uuid();
  return set(ref(database, "products/" + id), {
    ...product,
    id,
    price: parseInt(product.price),
    image,
    options: product.options.split(","),
  });
}

export async function readProductData() {
  const dbRef = ref(database);
  return get(child(dbRef, "products"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        // Object.values => object의 value를 배열로 반환
        return Object.values(snapshot.val());
      } else {
        return [];
      }
    })
    .catch(console.error);
}

export async function storeCartProduct(state, option) {
  const { id } = state;
  return set(ref(database, "carts/" + id), {
    ...state,
    options: option,
  });
}

export async function readCartsData() {
  const dbRef = ref(database);
  return get(child(dbRef, "carts"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        // Object.values => object의 value를 배열로 반환
        return Object.values(snapshot.val());
      } else {
        return [];
      }
    })
    .catch(console.error);
}
