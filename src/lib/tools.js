import { isNullOrUndefined } from 'core-util-is';

export const getQueriesFromURL = (url) => {
    if (isNullOrUndefined(url)) {
        // 데이터 있음
        return {};
    } else {
        // 데이터 없음
        if (url.indexOf('?') < 0) {
            return {};
        } else {
            const _rawQueries = url.split('?')[1].split('&');
            let _queries = {};
            _rawQueries.forEach((query) => {
                const _splited = query.split('=');
                _queries[_splited[0]] = _splited[1];
            });

            return _queries;
        }
    }
};
