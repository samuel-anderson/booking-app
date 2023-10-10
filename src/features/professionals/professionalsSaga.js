import { takeLatest, put, call } from "redux-saga/effects";
import {
  fetchProfessionalsStart,
  fetchProfessionalsSuccess,
  fetchProfessionalsFailure,
} from "./professionalsSlice";
import { firebaseApi } from "../../api/index";

function* fetchProfessionalsWorker() {
  try {
    const professionals = yield call(
      firebaseApi.getCollection,
      "professionals"
    );
    yield put(fetchProfessionalsSuccess(professionals));
  } catch (error) {
    yield put(fetchProfessionalsFailure(error.message));
  }
}

export function* watchFetchProfessionals() {
  yield takeLatest(fetchProfessionalsStart.type, fetchProfessionalsWorker);
}
