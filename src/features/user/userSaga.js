import { takeLatest, all, put, call } from "redux-saga/effects";

import {
  createUserDocumentFromAuth,
  getCurrentUser,
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  signOutUser,
} from "../../utils/firebase";
import {
  checkUserSession,
  signInFailed,
  signInSuccess,
  signOutFailed,
  signOutStart,
  signOutSuccess,
  signUpFailed,
  signUpStart,
  signUpSuccess,
} from "./userSlice";

export function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userSnapshot = yield call(createUserDocumentFromAuth, userAuth);

    console.log("Get User Snapshot");
    console.log({ id: userSnapshot.id, ...userSnapshot.data() });

    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);

    if (!userAuth) return;

    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield call(
      signInAuthUserWithEmailAndPassword,
      email,
      password
    );

    console.log("Sign In Success: ", user);

    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    console.log("Sign In Failed: ", error);

    yield put(signInFailed(error));
  }
}

export function* signUp({ payload: { email, password } }) {
  try {
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );

    console.log("Sign Up Success: ", user);
    yield put(signUpSuccess(user));
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      console.log("Sign In Start: ", { payload: { email, password } });

      yield call(signInWithEmail, { payload: { email, password } });
    }

    console.log("Sign Up Failed: ", error);

    yield put(signUpFailed(error));
  }
}

export function* signOut() {
  try {
    yield call(signOutUser);
    console.log("Sign Out Success");
    yield put(signOutSuccess());
  } catch (error) {
    console.log("Sign Out Failed");

    yield put(signOutFailed(error));
  }
}

export function* signInAfterSignUp({ payload: { user } }) {
  yield call(getSnapshotFromUserAuth, user);
}

export function* onCheckUserSession() {
  yield takeLatest(checkUserSession.type, isUserAuthenticated);
}

export function* onSignUpStart() {
  yield takeLatest(signUpStart.type, signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(signUpSuccess.type, signInAfterSignUp);
}

export function* onSignOutStart() {
  yield takeLatest(signOutStart.type, signOut);
}

export function* watchUserSagas() {
  yield all([
    call(onCheckUserSession),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ]);
}
