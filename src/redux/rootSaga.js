import { all, call } from "redux-saga/effects";

import { watchFetchShop } from "../features/shop/shopSaga";
import { watchFetchAppointments } from "../features/appointments/appointmentsSaga";
import { watchSendSMS } from "../features/sms/smsSaga";
import { watchUserSagas } from "../features/user/userSaga";

export default function* rootSaga() {
  yield all([
    call(watchFetchShop),
    call(watchFetchAppointments),
    call(watchSendSMS),
    call(watchUserSagas),
  ]);
}
