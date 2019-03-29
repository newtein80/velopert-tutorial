# https://velopert.com/3621

npm install -g create-react-app

create-react-app velopert-tutorial

npm start

---
- App.js

```JSX
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
```
첫번째 코드는 리액트와 그 내부의 Component 를 불러옵니다. 파일에서 JSX 를 사용하려면, 꼭 React 를 import 해주어야 합니다.  
그 아래에서는 같은 디렉토리에 있는 파일 logo.svg 과 App.css 파일을 불러왔습니다.  
이렇게, import 를 하는 것은, 우리가 webpack 을 사용하기에 가능한 작업입니다. 이렇게 불러오고나면 나중에 프로젝트를 빌드하게 됐을 때 웹팩에서 파일의 확장자에 따라 다른 작업을 하게 됩니다. CSS 파일을 불러오게되면, 나중에 프로젝트에서 사용한 프로젝트를 한 파일에 모두 결합해주는 작업을 진행하고, 자바스크립트 파일을 불러오게되면 모든 코드들이 제대로 로딩되게끔 순서를 설정하고 하나의 파일로 합쳐주죠. (나중에 다뤄볼 얘기지만 규칙에 따라 여러 파일로 분리해서 저장하는것도 가능합니다.) 그리고, svg 처럼 사전에 따로 설정을 되지 않은 확장자의 경우, 그냥 파일로서 불러온다음에 나중에 특정 경로에 사본을 만들어주게되고, 해당 사본의 경로를 텍스트로 받아오게 됩니다.

컴포넌트를 만드는 방법

```JSX
class App extends Component {
  ...
}
```
컴포넌트를 만드는 방법은 두가지가 있습니다.  
그 중 하나는 위처럼 클래스를 통해서 만드는 것입니다. 또 다른 방법은 함수를 통하여 컴포넌트를 만드는 방법이 있습니다.

```JSX
render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
```
클래스형태로 만들어진 컴포넌트에는 꼭, render 함수가 있어야 하구요,  
그리고 그 내부에서는 JSX 를 return 해주어야 합니다. 위에 보이는 HTML 같은 코드가 바로, JSX 입니다.

```JSX
export default App;
```
우리가 작성한 컴포넌트를 다른 곳에서 불러와서 사용 할 수 있도록 내보내기를 해줍니다.
---
index.js

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```
```javascript
import App from './App';
```
우리가 만든 컴포넌트를 불러올 때는 이렇게 import 를 사용해서 불러와줍니다.

```javascript
ReactDOM.render(<App />, document.getElementById('root'));
```
브라우저 상에 우리의 리액트 컴포넌트를 보여주기 위해서는 ReactDOM.render 함수를 사용합니다.  
첫번째 파라미터는 렌더링 할 결과물이고, 두번째 파라미터는 컴포넌트를 어떤 DOM 에 그릴지 정해줍니다.  
id 가 root 인 DOM 을 찾아서 그리도록 설정이 되어있는데요, 해당 DOM 은 public/index.html 파일에서 찾아보실 수 있습니다.  

index.html
```html
<div id="root"></div>
```
---
## JSX

# 꼭 닫혀야 하는 태그
ex) br 태그, input 태그 또한 무조건 닫혀야 한다.
# 감싸져 있는 엘리먼트
ex)
```javascript
class App extends Component {
  render() {
    return (
      <Fragment>
        <div>
          Hello
        </div>
        <div>
          Bye
        </div>
      </Fragment>
    );
  }
}
```
# JSX 안에 자바스크립트 값 사용하기
```javascript
class App extends Component {
  render() {
    const name = 'react';
    return (
      <div>
        hello {name}!
      </div>
    );
  }
}
```
---
const 는 ES6 에 도입된 키워드로서, 한번 선언하고 바뀌지 않는 값을 설정 할 때 사용됩니다.  
그리고, 바뀌게 될 수 있는 값은 let 을 사용하여 선언하죠.  
차이점  
var 은 scope 가 함수단위인데요:  
```javascript
function foo() {
  var a = 'hello';
  if (true) {
    var a = 'bye';
    console.log(a); // bye
  }
  console.log(a); // bye
}
```
반면 const 와 let 은 scope 가 블록 단위 입니다:  
```javascript
function foo() {
  let a = 'hello';
  if (true) {
    let a = 'bye';
    console.log(a); // bye
  }
  console.log(a); // hello
}
```
- ES6 에서는, var 을 쓸 일이 없구요, 값을 선언 후 바꿔야 할 땐 let, 그리고 바꾸지 않을 땐 const 를 사용하시면 됩니다.
---
# 조건부 렌더링

JSX 내부에서 조건부 렌더링을 할 때는 보통 삼항 연산자를 사용하거나, AND 연산자를 사용합니다.

반면에 if 문을 사용 할 수는 없어요 (사용하려면 [IIFE](https://developer.mozilla.org/ko/docs/Glossary/IIFE"IIFE")(즉시 실행 함수 표현) 을 사용해아합니다.)

- 삼항연산자
```javascript
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        {
          1 + 1 === 2 
            ? (<div>맞아요!</div>)
            : (<div>틀려요!</div>)
        }
      </div>
    );
  }
}

export default App;
```
이렇게 하면, 맞아요가 보여질 것입니다. 반면 1 + 1 === 2 부분을 1 + 1 === 3 으로 바꿔보세요. 그럼 틀려요가 나타납니다.

-  AND 연산자
```javascript
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        {
          1 + 1 === 2 && (<div>맞아요!</div>)
        }
      </div>
    );
  }
}

export default App;
```
삼항연산자는 true 일 때와 false 일 때 다른것들을 보여주고 싶을 떄 사용하는 반면,  
AND 연산자의 경우 단순히 우리의 조건이 true 일 때만 보여주고 false 경우 아무것도 보여주고 싶지 않을 때 사용합니다.


대부분의 상황엔 위의 방식으로 해결 할 수 있지만, 가끔씩은 좀 복잡한 조건을 작성해야 할 때도 있습니다.  
그러한 조건들은 웬만하면 JSX 밖에서 로직을 작성하는것이 좋습니다.  
하지만, 꼭 JSX 내부에서 작성해야 한다면, 이렇게 IIFE 를 사용합니다.


```javascript
import React, { Component } from 'react';

class App extends Component {
  render() {
    const value = 1;
    return (
      <div>
        {
          (function() {
            if (value === 1) return (<div>하나</div>);
            if (value === 2) return (<div>둘</div>);
            if (value === 3) return (<div>셋</div>);
          })()
        }
      </div>
    );
  }
}

export default App;
```
if 문 대신에 switch 문을 사용하셔도 상관 없습니다. 그리고 위 코드는 다음과 같이 쓸 수도 있습니다.

```javascript
(() => {
  if (value === 1) return (<div>하나</div>);
  if (value === 2) return (<div>둘</div>);
  if (value === 3) return (<div>셋</div>);
})()
```

여기서 사용된건 [화살표 함수](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/%EC%95%A0%EB%A1%9C%EC%9A%B0_%ED%8E%91%EC%85%98"화살표함수") 라고 부릅니다.  
화살표 함수는 this, arguments, super 개념이 없는 익명 함수입니다. 앞으로 ES6 에서 자주 사용하게 될 것입니다.

## style 과 className

우선, 스타일은 다음과 같이 작성 할 수 있습니다.

```javascript
import React, { Component } from 'react';

class App extends Component {
  render() {
    const style = {
      backgroundColor: 'black',
      padding: '16px',
      color: 'white',
      fontSize: '12px'
    };

    return (
      <div style={style}>
        hi there
      </div>
    );
  }
}

export default App;
```
html 에서는 그냥 텍스트형태로 ="backgroundColor: black; padding: 16px; ..." 이런식으로 작성했었지요?  
리액트에서는 객체 형태로 작성해주셔야 합니다.  
그리고 클래스를 설정하게 될 때에는 html 에서는 <div class="hello"> 이렇게 작성했었는데요,  
리액트 컴포넌트에서는 class 대신에 className 을 사용합니다.

# Post 3

리액트 컴포넌트에서 다루는 데이터는 두개로 나뉩니다.  
바로 props 와 state 인데요, 미리 요약하여 설명드리자면 props 는 부모 컴포넌트가 자식 컴포넌트에게 주는 값입니다.  
자식 컴포넌트에서는 props 를 받아오기만하고, 받아온 props 를 직접 수정 할 수 는 없습니다.  
반면에 state 는 컴포넌트 내부에서 선언하며 내부에서 값을 변경 할 수 있습니다.

```javascript
import React, { Component } from 'react';

class MyName extends Component {
  render() {
    return (
      <div>
        안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다.
      </div>
    );
  }
}

export default MyName;
```
자신이 받아온 props 값은 this. 키워드를 통하여 조회 할 수 있습니다.  
지금 name 이라는 props 를 보여주도록 설정해주었습니다. 

- App.js 수정
```javascript
import React, { Component } from 'react';
import MyName from './MyName';

class App extends Component {
  render() {
    return (
      <MyName name="리액트" />
    );
  }
}

export default App;
```
import 를 통하여 컴포넌트를 불러오고, 렌더링해보겠습니다.  
이렇게 컴포넌트를 만들고나면, 일반 태그를 작성하듯이, 작성해주면 됩니다.  
그리고 props 값은 name="리액트" 이런식으로 태그의 속성을 설정해주는 것 처럼 해주세요.