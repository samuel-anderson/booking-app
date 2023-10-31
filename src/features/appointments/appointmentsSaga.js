import { takeLatest, put, call } from "redux-saga/effects";
import {
  fetchAppointmentsStart,
  fetchAppointmentsFailure,
  fetchAppointmentsSuccess,
} from "./appointmentsSlice";

import { firebaseApi } from "../../api/index";

function* fetchAppointmentsWorker() {
  try {
    const appointments = yield call(firebaseApi.getDocument, "appointments");

    yield put(fetchAppointmentsSuccess(appointments[0].data.items));
  } catch (error) {
    yield put(fetchAppointmentsFailure(error.message));
  }
}

export function* watchFetchAppointments() {
  yield takeLatest(fetchAppointmentsStart.type, fetchAppointmentsWorker);
}
