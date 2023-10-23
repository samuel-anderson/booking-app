import { takeLatest, put, call } from "redux-saga/effects";
import {
  fetchShopDataStart,
  fetchShopDataSuccess,
  fetchShopDataFailure,
} from "./shopSlice";

import { setProfessionals } from "../professionals/professionalsSlice";
import { setServices } from "../services/servicesSlice";

import { firebaseApi } from "../../api/index";

function* fetchShopWorker() {
  try {
    const shop_data = yield call(firebaseApi.getCollection, "barber_shop");

    yield put(fetchShopDataSuccess());

    const professionals = shop_data.find((document) => {
      return document.id === "professionals";
    });

    const services = shop_data.find((document) => {
      return document.id === "services";
    });

    yield put(setProfessionals(professionals.data.items));
    yield put(setServices(services.data.items));
  } catch (error) {
    yield put(fetchShopDataFailure(error.message));
  }
}

export function* watchFetchShop() {
  yield takeLatest(fetchShopDataStart.type, fetchShopWorker);
}
