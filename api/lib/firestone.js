import app from "./firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore(app);

export default db;