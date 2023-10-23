import { takeLatest, put, call } from "redux-saga/effects";
import {
  fetchServicesStart,
  fetchServicesSuccess,
  fetchServicesFailure,
} from "./servicesSlice";
import { firebaseApi } from "../../api/index";

function* fetchServicesWorker() {
  try {
    const services = yield call(firebaseApi.getCollection, "services");
    yield put(fetchServicesSuccess(services));
  } catch (error) {
    yield put(fetchServicesFailure(error.message));
  }
}

export function* watchFetchServices() {
  yield takeLatest(fetchServicesStart.type, fetchServicesWorker);
}
