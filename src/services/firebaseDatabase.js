import { getDatabase, set, ref, get, child } from "firebase/database";

import { app } from "./firebaseAuth";

const database = getDatabase(app);

export async function writeProductData(productId, product, setUpload) {
  set(ref(database, "products/" + productId), product) //
    .then(() => {
      setUpload((prev) => !prev);
      setTimeout(() => setUpload(false), 3000);
    })
    .catch(console.error);
}

export async function readProductData(setProducts) {
  const dbRef = ref(database);
  get(child(dbRef, "products"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        // console.log(snapshot.val());
        let object = snapshot.val();
        let array = Object.keys(object).map((item) => object[item]);
        console.log(array);
        setProducts(array);
      } else {
        console.log("No data available");
      }
    })
    .catch(console.error);
}
