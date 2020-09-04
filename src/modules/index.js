import { combineReducers } from 'redux';
import user, { userSaga } from './User';
import pendingWorks from './AxiosPendingWorks';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
    // 리듀서들
    user,
    pendingWorks,
});

export function* rootSaga() {
    yield all([userSaga()]);
}

export default rootReducer;
