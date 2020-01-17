import { useState, useEffect } from 'react';

export default function useInitial<T, P> (
  api: (params: P) => Promise<T>,
  params: P,
  defaultData: T
) {
  const [loading, setLoading] = useState(true)
  const [response, setResponse] = useState(defaultData)
  const [errMsg, setErrmsg] = useState('')

  useEffect(() => {
    if (!loading) return
    getData()
  }, [loading])

  function getData () {
    api(params).then(res => {
      setResponse(res)
    }).catch(e => {
      setErrmsg(e)
    }).finally(() => {
      setLoading(false)
    })
  }

  return {
    loading,
    setLoading,
    response,
    errMsg
  }
} 

// 在页面中使用
// export default function FunctionDemo() {
//     // 只需要传入api， 对应的参数与返回结果的初始默认值即可
//     const {loading, setLoading, response, errMsg} = useInitial(api, {id: 10}, {});
// }

// 当我们想要刷新页面，只需要执行一句代码即可
// setLoading(true)