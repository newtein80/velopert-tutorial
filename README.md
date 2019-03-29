# https://velopert.com/3621

npm install -g create-react-app

create-react-app velopert-tutorial

npm start

```JSX
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
```
첫번째 코드는 리액트와 그 내부의 Component 를 불러옵니다. 파일에서 JSX 를 사용하려면, 꼭 React 를 import 해주어야 합니다.  
그 아래에서는 같은 디렉토리에 있는 파일 logo.svg 과 App.css 파일을 불러왔습니다.  
이렇게, import 를 하는 것은, 우리가 webpack 을 사용하기에 가능한 작업입니다. 이렇게 불러오고나면 나중에 프로젝트를 빌드하게 됐을 때 웹팩에서 파일의 확장자에 따라 다른 작업을 하게 됩니다. CSS 파일을 불러오게되면, 나중에 프로젝트에서 사용한 프로젝트를 한 파일에 모두 결합해주는 작업을 진행하고, 자바스크립트 파일을 불러오게되면 모든 코드들이 제대로 로딩되게끔 순서를 설정하고 하나의 파일로 합쳐주죠. (나중에 다뤄볼 얘기지만 규칙에 따라 여러 파일로 분리해서 저장하는것도 가능합니다.) 그리고, svg 처럼 사전에 따로 설정을 되지 않은 확장자의 경우, 그냥 파일로서 불러온다음에 나중에 특정 경로에 사본을 만들어주게되고, 해당 사본의 경로를 텍스트로 받아오게 됩니다.
