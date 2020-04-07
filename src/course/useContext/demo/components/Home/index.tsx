import React, {useState, useContext, useEffect} from 'react'
import {zhLastFeedApi, Feed} from './api'
import { ActivityIndicator, Carousel } from 'antd-mobile';
import { context } from '../../context';
import './style.scss'

export default function ZhihuFeed () {
  const [feed, setFeed] = useState<Feed>()
  const { setUnreadHome } = useContext(context)

  useEffect(() => {
    setUnreadHome(0)
    zhLastFeedApi().then(res => {
      setFeed(res)
    })
  }, [setUnreadHome])

  if (!feed) {
    return <div className="feed_container loading"><ActivityIndicator /></div>
  }

  const {stories, top_stories} = feed

  return (
    <div className="feed_container">
      <Carousel infinite autoplay dots={false}>
        {top_stories.map((item, i) => (
          <a className="top_feed_item" key={i} href={item.url} style={{backgroundImage: `url(${item.image})`}}>
            <div className="title">{item.title}</div>
          </a>
        ))}
      </Carousel>
      <div className="inner">
        {stories.map((item, i) => (
          <a className="feed_item" href={item.url} key={i}>
            <img src={item.images![0]} alt=""/>
            <div className="info">
              <div className="title">{item.title}</div>
              <div className="tip">{item.hint}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}