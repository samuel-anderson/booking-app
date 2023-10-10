import {
  fetchCollection,
  addDocument,
  deleteDocument,
} from "../../utils/firebase";

export const getCollection = async (collectionName) => {
  const items = await fetchCollection(collectionName);
  return items;
};

export const createDocument = async (collectionName, document) => {
  await addDocument(collectionName, document);
};

export const removeDocument = async (collectionName, id) => {
  await deleteDocument(collectionName, id);
};
