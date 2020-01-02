import React, { useState, useEffect } from 'react'

const recordListApi = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        success: true,
        data: [1, 2, 3]
      })
    }, 300)
  })
}

export default function Demo () {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log('loading', loading)
    if (loading) {
      recordListApi().then(res => {
        // @ts-ignore
        setList(res.data)
        setLoading(false)
      })
    }
  }, [loading])

  return (
    <div className="container">
      <button onClick={() => setLoading(true)}>点击刷新</button>
      <div>{list.map(item => item)}</div>
    </div>
  )
}