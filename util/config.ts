import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
 
};

export const initializeFirebase = () => {
  const app = initializeApp(firebaseConfig);
  getAnalytics(app);
}