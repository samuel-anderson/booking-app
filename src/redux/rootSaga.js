import { all, call } from "redux-saga/effects";
import { watchFetchProfessionals } from "../features/professionals/professionalsSaga";
import { watchFetchServices } from "../features/services/servicesSaga";

export default function* rootSaga() {
  yield all([call(watchFetchProfessionals), call(watchFetchServices)]);
}
