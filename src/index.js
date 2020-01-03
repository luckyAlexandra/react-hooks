import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import * as serviceWorker from './serviceWorker';

// import App from './course/useState/Demo.tsx';
// import AsyncDemo from './course/useState/AsyncDemo.tsx';
// import App from './course/useState/Rectangle';
// import App from './course/useEffect/demo01'
// import App from './course/useEffect/demo02'
// import App from './course/immer/index'

// import App from './course/tinyTest/demo-01.tsx'
// import App from './course/tinyTest/demo-02.tsx'
// import App from './course/tinyTest/demo-03.tsx'
// import App from './course/tinyTest/demo-04.tsx'
// import App from './course/tinyTest/demo-05.tsx'
// import App from './course/tinyTest/demo-before-lib.tsx'
import App from './course/tinyTest/demo-immutable.tsx'
// import App from './course/tinyTest/demo-immer.tsx'
// import App from './course/tinyTest/lib.tsx'


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
