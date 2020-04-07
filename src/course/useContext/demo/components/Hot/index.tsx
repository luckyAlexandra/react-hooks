import React, {useState, useContext, useEffect} from 'react'
import {topViewApi} from './api'
import { ActivityIndicator } from 'antd-mobile';
import { context } from '../../context';
import './style.scss'

export default function TopView () {
  const [feed, setFeed] = useState<string>()
  const { setUnreadHot } = useContext(context)


  useEffect(() => {
    setUnreadHot(0)
    topViewApi().then(res => {
      setFeed(res)
    })
  }, [setUnreadHot])

  if (!feed) {
    return <div className="feed_container loading"><ActivityIndicator /></div>
  }

  return (
    <div className="blog_container" dangerouslySetInnerHTML={{__html: feed}}>
    </div>
  )
}