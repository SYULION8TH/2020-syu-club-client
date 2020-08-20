# 동아리 연합회 클라이언트 부

멋쟁이 사자처럼 동아리 연합회 프로젝트의 클라이언트 부 입니다.

## 요구 사항

본 프로젝트를 진행하려면, 최신인 stable한 버전의 `node`가 설치되어 있어야 합니다.

## 작업 순서

모든 작업은 해당 저장소의 [project 탭](https://github.com/SYULION8TH/2020-syu-club-client/projects)에 공유될 예정 입니다.
업무가 등록되면, 이슈 탭에도 등록될 예정이니 각 작업을 확인해보고 진척정도를 알려주시면 됩니다.

> 작업 처리에 관련된 항목은 실제 예제와 함께 다시 업로드 될 예정 입니다.

## 개발 명령어

-   `yarn run start` : 개발 서버를 실행합니다
-   `yarn run build` : 현재 상태 내용을 빌드합니다.

## 공통 사항

-   컴포넌트, 변수의 이름은 되도록 카멜케이스를 따르도록 합니다.
-   모든 화면은 반복적으로 사용되는 `component`와 각 페이지를 의미하는 `view`로 나뉩니다.
-   prettier를 사용합니다. 저장시 자동으로 정렬되도록 설정해둡니다. (vs code의 "editor.formatOnSave" 항목을 true로 설정)
-   ~master 브랜치에는 업로드하지 않고, 기능 개발시 브랜치를 만들어 pull request를 작성하도록 합니다~ (아직 미적용 입니다.)
-   커밋 메시지는 되도록 첫줄은 간단하게 작성 후 줄 바꿈하여 상세한 내용을 작성하도록 합니다.

## View 개발

[react code snippet](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) 확장 툴을 사용하고, 기본 뼈대는 `rafce`를 기준으로 합니다.
해당 구조는 링크에서 확인해볼 수 있습니다.

## 프로젝트 구조

### 1. api 폴더

api 통신부 내용들만 포함됩니다. 기능 단위로 파일을 만들게되며, 파일의 이름은 `기능명.api.js`로 만들게 됩니다. 각 api는 작성된 후
해당 폴더에 `index.js`에 등록되어야 하고, 기능명과 동일한 이름으로 추가해줍니다. 이때 이름의 첫 문자는 대문자이어야 합니다. API를 불러와 사용하는 예제는 다음과 같습니다.

```jsx
import { QnaAPI } from '../../api';
import React, { useEffect } from 'react'

const Component = ()=>{
    const fn = async ()=>{
        const result = await QnaAPI.fetchQna();
        console.log(result);
    }
    useEffect(()=>{
        fn();
    },[]);
    return <div><div>;
}
```

### 2. components 폴더

한 페이지 이상 자주 반복되거나, 대다수의 `route`에서 반복적으로 노출되는 요소들을 모아둡니다. 컴포넌트 이름의 폴더를 만든 후 `index.js`에
등록합니다.

컴포넌트를 만들고 , `props`가 필요하다면 `prop-types`를 참조해 `proptypes`를 미리 선언해둡니다.

### 3. lib 폴더

모든 `component` 혹은 `view`에서 데이터를 다루거나 할 때 필요한 공통 함수들을 모아둡니다. 대다수 작업자들은 불러와 사용하도록 합니다.

### 4. scss 폴더

현재 `scss`파일들은 모두 `view` 폴더 혹은 `component` 폴더 안에서 각각 가지고 작업하게 되어있으나 모든 페이지에 적용되어야 하거나 모든 컴포넌트에서 사용할 수 있는 `mixin` 혹은 `전역 변수`로 사용되는 항목들은 이 폴더에 모아둡니다.

### 5. views 폴더

주소에 매칭되는 실제 페이지들을 모아둡니다. 각 폴더의 이름은 카멜케이스로 작성되며, 각 폴더에는 페이지 파일을 모두 작성해둔 `index.jsx` 파일을 가져야 합니다. 그리고 각 페이지에서 복잡한 항목을 포함하게 되어 컴포넌트로 분리하게 될 경우 카멜케이스로 `jsx`파일을 만들어 불러와 사용하도록 합니다.
