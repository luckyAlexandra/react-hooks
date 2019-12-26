import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import * as serviceWorker from './serviceWorker';

// import Counter from './course/useState/Demo.tsx';
// import AsyncDemo from './course/useState/AsyncDemo.tsx';
import App from './course/useState/Rectangle';
// import App from './course/useEffect/demo01'

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
