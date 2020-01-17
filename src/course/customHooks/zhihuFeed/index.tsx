import React from 'react'
import useFeed from './useFeed'
import { ActivityIndicator, Carousel } from 'antd-mobile';
import './style.scss';


// 执行如下指令，禁用chrome跨域限制
// open -a "Google Chrome" --args --disable-web-security  --user-data-dir
export default function ZhFeed () {
  const feed = useFeed()

  if (!feed) {
    return <div className="feed_container loading"><ActivityIndicator /></div>
  }

  const {stories, top_stories} = feed

  return (
    <div className="feed_container">
      <Carousel infinite autoplay dots={false}>
        {top_stories.map((item, i) => (
          <a className="top_feed_item" key={i} href={item.url}>
            <img src={item.image} alt="" />
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