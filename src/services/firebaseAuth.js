import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { get, getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const database = getDatabase(app);

export const logInGoogle = async () => {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  return signInWithPopup(auth, provider).catch(console.error);
};

export const logOut = async () => {
  return signOut(auth).catch(console.error);
};

// ⬇️ auth가 변경될 때마다 콜백 함수를 실행한다
export function onUserStateChange(callback) {
  onAuthStateChanged(auth, async (user) => {
    // 1. 사용자가 로그인한 경우
    const updatedUser = user ? await adminUser(user) : null;
    callback(updatedUser);
  });
}

async function adminUser(user) {
  // 2. 사용자가 어드민 권한을 가지고 있는지 확인
  // 3. {...user, isAdmin : true/false}
  return get(ref(database, "admins")) //
    .then((snapshot) => {
      if (snapshot.exists()) {
        const admins = snapshot.val();
        const isAdmin = admins.includes(user.uid);
        return { ...user, isAdmin };
      }
      return user;
    });
}

export function writeUserData(userId, name, email, imageUrl) {
  set(ref(database, "users/" + userId), {
    username: name,
    email: email,
    profile_picture: imageUrl,
  });
}
