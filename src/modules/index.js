import { combineReducers } from 'redux';
import user, { userSaga } from './User';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
    // 리듀서들
    user,
});

export function* rootSaga() {
    yield all([userSaga()]);
}

export default rootReducer;
