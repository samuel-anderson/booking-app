import { all, call } from "redux-saga/effects";

import { watchFetchShop } from "../features/shop/shopSaga";
import { watchFetchAppointments } from "../features/appointments/appointmentsSaga";

export default function* rootSaga() {
  yield all([call(watchFetchShop), call(watchFetchAppointments)]);
}
