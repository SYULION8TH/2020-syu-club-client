import { UserAPI } from '../api';
import { reducerUtils, handleAsyncActions, createPromiseSaga } from '../lib/asyncUtils';
import { takeEvery } from 'redux-saga/effects';

// ACTION TYPES

const GET_USER_INFO = 'GET_USER_INFO';
const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS';
const GET_USER_INFO_ERROR = 'GET_USER_INFO_ERROR';

export const getUserInfo = () => ({ type: GET_USER_INFO });

const getUserInfoSaga = createPromiseSaga(GET_USER_INFO, UserAPI.getUserInfo);

export function* userSaga() {
    yield takeEvery(GET_USER_INFO, getUserInfoSaga);
}

// 3번째 인자를 사용하면 withExtraArgument 에서 넣어준 값들을 사용 할 수 있습니다.
export const goToHome = () => (dispatch, getState, { history }) => {
    history.push('/');
};

// initialState 쪽도 반복되는 코드를 initial() 함수를 사용해서 리팩토링 했습니다.
const initialState = {
    info: reducerUtils.initial(),
};

export default function user(state = initialState, action) {
    switch (action.type) {
        case GET_USER_INFO:
        case GET_USER_INFO_SUCCESS:
        case GET_USER_INFO_ERROR:
            return handleAsyncActions(GET_USER_INFO, 'info', true)(state, action);
        default:
            return state;
    }
}
