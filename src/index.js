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

// import App from './course/tinyTest/test1.tsx'
// import App from './course/tinyTest/test2.tsx'
// import App from './course/tinyTest/test3.tsx'
// import App from './course/tinyTest/test4.tsx'
// import App from './course/tinyTest/test5.tsx'
// import App from './course/tinyTest/test6.tsx'
// import App from './course/tinyTest/immer.tsx'
import App from './course/tinyTest/immutable.tsx'


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
