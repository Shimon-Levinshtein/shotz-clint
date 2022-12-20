import { db } from "../../firebase/firebase";
import { doc, getDoc, setDoc, collection, getDocs, deleteDoc, updateDoc, query, where } from "firebase/firestore";
import { CLOSE_SCREEN, OPEN_SCREEN } from "../../actions/screenHandle";

export const GET_LIST_YAHRZEIT = 'GET_LIST_YAHRZEIT';
export const ADD_TO_LIST_YAHRZEIT = 'ADD_TO_LIST_YAHRZEIT';
export const EDIT_TO_LIST_YAHRZEIT = 'EDIT_TO_LIST_YAHRZEIT';
export const DELETE_FROM_LIST_YAHRZEIT = 'DELETE_FROM_LIST_YAHRZEIT';


export const getAllYahrzeits = () => {
    return async (dispatch) => {
        dispatch({ type: OPEN_SCREEN, payload: { screenName: 'spinner' } });
        const querySnapshot = await getDocs(collection(db, "yahrzeit"));
        const data = [];
        querySnapshot.forEach((doc) => {
            const obj = doc.data();
            obj.id = doc.id
            data.push(obj);
        });
        dispatch({ type: CLOSE_SCREEN, payload: { screenName: 'spinner' } });
        dispatch({ type: GET_LIST_YAHRZEIT, payload: data });
    };
};

export const getYahrzeitsByDate = ({ day, month }) => {
    return async (dispatch) => {
        console.log('getYahrzeitsByDate.....');

        const docRef = collection(db, "yahrzeit");

        const q = query(docRef, where("hebDate.day", "==", day), where("hebDate.month", "==", month));

        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    };
};

const gatId = () => {
    return new Date().getTime() + '';
};

export const createYahrzeit = (data, navigate) => {
    return async (dispatch) => {
        dispatch({ type: OPEN_SCREEN, payload: { screenName: 'spinner' } });
        const id = gatId();
        await setDoc(doc(db, "yahrzeit", new Date().getTime() + ''), data, { merge: true });
        const docRef = doc(db, "yahrzeit", id);
        const docYahrzeit = await getDoc(docRef);
        if (docYahrzeit.exists()) {
            dispatch({
                type: ADD_TO_LIST_YAHRZEIT, payload: {
                    data: docYahrzeit.data(),
                    id,
                }
            });
            navigate('/yahrzeit', {
                state: {
                    idYahrzeit: id,
                }
            })
        } else {
            alert.show("לא הצליחה לשמור!");
        };
        dispatch({ type: CLOSE_SCREEN, payload: { screenName: 'spinner' } });
    };
};

export const editYahrzeit = (data, navigate) => {
    return async (dispatch) => {
        dispatch({ type: OPEN_SCREEN, payload: { screenName: 'spinner' } });
        const id = data.id;
        const docRef = doc(db, "yahrzeit", id);
        await updateDoc(docRef, data, { merge: true });
        const docYahrzeit = await getDoc(docRef);
        if (docYahrzeit.exists()) {
            dispatch({
                type: EDIT_TO_LIST_YAHRZEIT, payload: {
                    data: docYahrzeit.data(),
                    id,
                }
            });
            navigate('/yahrzeit', {
                state: {
                    idYahrzeit: id,
                }
            })
        } else {
            alert.show("לא הצליחה לשמור שינויים!");
        };
        dispatch({ type: CLOSE_SCREEN, payload: { screenName: 'spinner' } });
    };
};

export const deleteYahrzeitById = id => {
    return async (dispatch) => {
        dispatch({ type: OPEN_SCREEN, payload: { screenName: 'spinner' } });
        const docRef = doc(db, "yahrzeit", id);
        await deleteDoc(docRef);
        dispatch({ type: DELETE_FROM_LIST_YAHRZEIT, payload: id });
        dispatch({ type: CLOSE_SCREEN, payload: { screenName: 'spinner' } });
    };
};

