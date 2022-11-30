import { db } from "../firebase/firebase";
import { doc, setDoc } from "firebase/firestore"; 

const gatId = () => {
    return new Date().getTime() + '';
};

export const createYahrzeit = (data) => {
    return async (dispatch) => {
        const id = gatId();
        console.log(id);
        await setDoc(doc(db, "yahrzeit", new Date().getTime() + ''), data);
        // yahrzeitData.add({
        //     name: 'customerName',
        //     password: 'customerPassword',
        //   });
        // dispatch({ type: CHANGE_STATUS_POPUP, payload: { type: "Loading", yesOrNo: true } });
        // authAxios().post(`/events/create-event-by-type`, {
        //     data: obj
        // })
        //     .then((response) => {
        //         dispatch({ type: CREATE_EVETE_BY_TY, payload: response.data });
        //         dispatch({ type: CHANGE_STATUS_POPUP, payload: { type: "Loading", yesOrNo: false } });
        //         dispatch({
        //             type: CHANGE_STATUS_POPUP,
        //             payload: {
        //                 type: 'PopupSucceeded',
        //                 yesOrNo: true,
        //                 typeText: 'PopupSucceededData',
        //                 text: {
        //                     title: 'Awesome!',
        //                     message: 'Your event has been saved successfully, you can check all your Evnts on the "My Events" page.',
        //                     buttonText: 'OK',
        //                 },
        //             }
        //         });
        //         navigate('/my-events');

        //     })
        //     .catch(error => {
        //         console.log(error);
        //         dispatch({ type: CHANGE_STATUS_POPUP, payload: { type: "Loading", yesOrNo: false } });
        //         dispatch({
        //             type: CHANGE_STATUS_POPUP,
        //             payload: {
        //                 type: 'ErrorMessage',
        //                 yesOrNo: true,
        //                 typeText: 'ErrorMessageText',
        //                 text: {
        //                     message: error.response.data.error,
        //                     status: error.response.status,
        //                 },
        //             }
        //         });
        //     });
    }
};
