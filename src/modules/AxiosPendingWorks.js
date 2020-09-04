const AXIOS_PENDING_WORKS_ADD = 'AXIOS_PENDING_WORKS_ADD';
const AXIOS_PENDING_WORKS_SUB = 'AXIOS_PENDING_WORKS_SUB';
const AXIOS_PENDING_WORKS_RESET = 'AXIOS_PENDING_WORKS_RESET';

const initialState = {
    pending: [],
    totalRequested: 0,
};

const reducer = (state = initialState, action) => {
    const idx = state.pending.indexOf(action.payload);
    switch (action.type) {
        case AXIOS_PENDING_WORKS_ADD:
            // console.log('request!', action.payload, state.pending);
            let __totalRequested = state.totalRequested;
            if (state.totalRequested !== 0 && state.pending === 0) {
                __totalRequested = 0;
            }
            if (idx < 0) {
                return {
                    pending: [...state.pending, action.payload],
                    totalRequested: __totalRequested + 1,
                };
            } else {
                return { ...state };
            }
        case AXIOS_PENDING_WORKS_SUB:
            // console.log('response!', action.payload, state.pending);
            if (idx >= 0) {
                state.pending.splice(idx, 1);
                return {
                    ...state,
                    pending: [...state.pending],
                };
            }
            return { ...state };
        case AXIOS_PENDING_WORKS_RESET:
            return { ...initialState };
        default:
            return { ...state };
    }
};

export const AddAxiosPendingWorks = (name) => ({
    type: AXIOS_PENDING_WORKS_ADD,
    payload: name,
});

export const SubAxiosPendingWorks = (name) => ({
    type: AXIOS_PENDING_WORKS_SUB,
    payload: name,
});

export const ResetAxiosPendingWorks = (name) => ({ type: AXIOS_PENDING_WORKS_RESET });

export default reducer;
