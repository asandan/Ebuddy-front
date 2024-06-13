import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();

export const handleSignOut = async () => {
  try {
    await signOut(auth);
  } catch (e) {
    console.error(e);
  }
}