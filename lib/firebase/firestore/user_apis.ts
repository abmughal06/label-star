import { setDoc, doc, getDoc, getDocs, collection } from "firebase/firestore";
import { firestore } from "../config";
// import  { customInitApp }  from "../firebase_admin";

const db = firestore;

// customInitApp();

export async function addData(colllection: string, id: any, data: any) {
    let result = null;
    let error = null;

    try {
        result = await setDoc(doc(db, colllection, id), data, {
            merge: true,
        });
    } catch (e) {
        error = e;
    }

    return { result, error };
}

export async function getDocument(collection: string, id: any) {
    let docRef = doc(db, collection, id);

    let result = null;
    let error = null;

    try {
        result = await getDoc(docRef);
    } catch (e) {
        error = e;
    }

    return { result, error };
}

export async function getCompleteCollection(collect: string) {
    let docRef = collection(db, collect);

    let result = null;
    let error = null;

    try {
        result = await getDocs(docRef);
    } catch (e) {
        error = e;
    }

    return { result, error };
}
