import axios from 'axios'

interface Story {
  id?: number,
  ga_prefix?: string,
  hint?: string,
  image_hue?: string,
  title?: string,
  type?: string,
  url?: string,
  images?: string,
  image?: string
}

export interface Feed {
  date: string,
  stories: Story[],
  top_stories: Story[]
}

export function zhLastFeedApi() : Promise<Feed> {
  return axios.get('https://news-at.zhihu.com/api/4/news/latest').then(res => {
    return res.data
  })
}