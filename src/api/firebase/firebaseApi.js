import {
  fetchCollection,
  addDocument,
  deleteDocument,
  updateDocument,
} from "../../utils/firebase";

export const getCollection = async (collectionName) => {
  const items = await fetchCollection(collectionName);
  return items;
};

export const createDocument = async (collectionName, document) => {
  await addDocument(collectionName, document);
};

export const updateDoc = async (
  collectionName,
  documentId,
  updatedDocument
) => {
  await updateDocument(collectionName, documentId, updatedDocument);
};

export const removeDocument = async (collectionName, id) => {
  await deleteDocument(collectionName, id);
};
