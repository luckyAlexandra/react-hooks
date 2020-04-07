import React, {useContext, useState} from 'react'
import {context, AppProvider} from './context'
import Home from './components/Home/index'
import Hot from './components/Hot/index'
import Setting from './components/Setting/index'
import { Badge } from 'antd-mobile'
import './index.scss'

// 执行如下指令，禁用chrome跨域限制
// open -a "Google Chrome" --args --disable-web-security  --user-data-dir

function App () {
  const {unreadHome, unreadHot} = useContext(context)
  const [tabIndex, setTabIndex] = useState(0)

  return (
    <div className="use_context_container">
      <div className="tab_wrapper">
        <Badge text={unreadHome} style={{ marginLeft: 42 }}>
          <div onClick={() => setTabIndex(0)}>首页</div>
        </Badge>
        <Badge text={unreadHot} style={{ marginLeft: 42 }}>
          <div onClick={() => setTabIndex(1)}>热门</div>
        </Badge>
        <div onClick={() => setTabIndex(2)}>设置</div>
      </div>
      <div className="content_wrapper">
        {tabIndex === 0 && (<Home />)}
        {tabIndex === 1 && (<Hot />)}
        {tabIndex === 2 && (<Setting />)}
      </div>
    </div>
  )
}

export default () => (
  <AppProvider>
    <App />
  </AppProvider>
)