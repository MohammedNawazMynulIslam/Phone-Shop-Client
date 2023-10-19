
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDjgHBK0kv2a3H7W2C0OYPB6blLXSM2zME",
  authDomain: "phone-stop.firebaseapp.com",
  projectId: "phone-stop",
  storageBucket: "phone-stop.appspot.com",
  messagingSenderId: "790460207813",
  appId: "1:790460207813:web:d18cfe69d3fba566e056ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;