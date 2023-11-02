import { takeLatest, put, call } from "redux-saga/effects";
import { sendSMSStart, sendSMSSuccess, sendSMSFailure } from "./smsSlice";
import { setIsCartFinished } from "../cart/cartSlice";

import { smsApi } from "../../api/index";

function* sendSMSWorker(action) {
  try {
    const { cart, clientInfo } = action.payload;
    const { success } = yield call(smsApi.submitBooking, cart, clientInfo);

    if (success) {
      yield put(sendSMSSuccess());
      yield put(setIsCartFinished(success));
    } else yield put(sendSMSFailure("Trouble with sending SMS to Barber."));
  } catch (error) {
    yield put(sendSMSFailure(error.message));
  }
}

export function* watchSendSMS() {
  yield takeLatest(sendSMSStart.type, sendSMSWorker);
}
