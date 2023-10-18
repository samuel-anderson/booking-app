import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "../config/firebase";

import {
  collection,
  query,
  getDocs,
  //updateDoc,
  deleteDoc,
  addDoc,
  doc,
} from "firebase/firestore";

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

export const fetchCollection = async (collectionName) => {
  const collectionRef = collection(db, collectionName);
  const q = query(collectionRef);

  //for testing error
  //await Promise.reject(new Error('whoop we received an error));
  const querySnapshot = await getDocs(q);
  const items = querySnapshot.docs.map((docSnapshot) => {
    return {
      id: docSnapshot.id,
      data: docSnapshot.data(),
    };
  });
  return items;
};

export const addDocument = async (collectionName, data) => {
  try {
    const collectionRef = collection(db, collectionName);
    await addDoc(collectionRef, data);
  } catch (error) {
    console.error("Error creating document:", error);
  }
};

export const deleteDocument = async (collectionName, id) => {
  try {
    const _document = doc(db, collectionName, id);
    await deleteDoc(_document);
  } catch (error) {
    console.error("Error creating document:", error);
  }
};

export const sendSMS = async ({
  clientName,
  professionalPhoneNumber,
  date,
  time,
  service,
}) => {
  try {
    fetch(
      "https://us-central1-crwn-clothing-db-b150d.cloudfunctions.net/sendSMS",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: professionalPhoneNumber,
          body: `You have an appt with ${clientName} - ${date} at ${time}. ${service}`,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  } catch (error) {
    console.error("Error creating document:", error);
  }
};
