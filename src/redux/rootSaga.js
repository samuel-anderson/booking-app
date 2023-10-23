import { all, call } from "redux-saga/effects";

import { watchFetchShop } from "../features/shop/shopSaga";

export default function* rootSaga() {
  yield all([call(watchFetchShop)]);
}
