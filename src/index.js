import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './scss/common.scss';

// VIEWS
import MainView from './views/MainView';
import NotFoundView from './views/NotFoundView';

// ROUTER
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// REDUX

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import Thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer, { rootSaga } from './modules';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';

// const store = createStore(rootReducer, applyMiddleware(Thunk));

const customHistory = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware({
    context: {
        history: customHistory,
    },
}); // 사가 미들웨어를 만듭니다.

const store = createStore(
    rootReducer,
    // logger 를 사용하는 경우, logger가 가장 마지막에 와야합니다.
    composeWithDevTools(
        applyMiddleware(
            // ReduxThunk.withExtraArgument({ history: customHistory }),
            sagaMiddleware, // 사가 미들웨어를 적용하고
            logger,
        ),
    ),
); // 여러개의 미들웨어를 적용 할 수 있습니다.

sagaMiddleware.run(rootSaga); // 루트 사가를 실행해줍니다.
// 주의: 스토어 생성이 된 다음에 위 코드를 실행해야합니다.

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router history={customHistory}>
                <>
                    <Switch>
                        <Route exact path="/" component={MainView}></Route>
                        <Route path="*" component={NotFoundView}></Route>
                    </Switch>
                </>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
