import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getMessaging, getToken } from "firebase/messaging";
import { firebaseConfig } from "../config/firebase";

import {
  collection,
  query,
  getDocs,
  updateDoc,
  deleteDoc,
  addDoc,
  doc,
} from "firebase/firestore";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
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

/**************** **************** **************** **************** */
/**************** **************** **************** **************** */
const messaging = getMessaging(app);

export const requestForToken = () => {
  return getToken(messaging, {
    vapidKey:
      "BHBuYSNaHECd59Ek8fc2Wix3cmmm3OrMcdeeaEhbMh9Qb2wN6-oNLW_n6EclwNZyqDmG1SvjmHVXV6RTTgxOWwo",
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        // Perform any other neccessary action with the token
      } else {
        // Show permission request UI
        console.log(
          "No registration token available. Request permission to generate one."
        );
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
    });
};
