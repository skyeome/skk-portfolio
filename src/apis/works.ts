import { db } from "@/libs/firebase";
import {
  Timestamp,
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";

export interface WorkInfo {
  size: string;
  name: string;
  title: string;
  image: string;
  desc: string;
  link: string;
  member: string;
  period: string;
  fe_github: string;
  be_github: string;
  stacks: string[];
  features: string[];
  createdAt: Timestamp;
}

export const getWorksList = async () => {
  const portfolios: WorkInfo[] = [];
  const q = query(collection(db, "portfolio"), orderBy("createdAt", "asc"));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs;
  data.forEach((doc) => {
    portfolios.push(doc.data() as WorkInfo);
  });
  return portfolios;
};
