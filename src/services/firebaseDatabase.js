import { getDatabase, set, ref, get, child, remove } from "firebase/database";
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

export async function storeCartProduct(userId, product) {
  return set(ref(database, `carts/${userId}/${product.id}`), product);
}

export async function removeFromCart(userId, productId) {
  return remove(ref(database, `carts/${userId}/${productId}`));
}

export async function readCartsData(userId) {
  const dbRef = ref(database);
  return get(child(dbRef, `carts/${userId}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        // Object.values => object의 value를 배열로 반환
        // 값들을 배열로 읽어올 때 사용
        return Object.values(snapshot.val() || {});
      } else {
        return [];
      }
    })
    .catch(console.error);
}
