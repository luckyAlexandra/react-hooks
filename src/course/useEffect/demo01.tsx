import React, { useState, useEffect, useRef } from 'react'
import anime from 'animejs'
import './style.scss'

export default function AnimationDemo () {
  const [anime01, setAnime01] = useState(false)
  const [anime02, setAnime02] = useState(false)
  const element = useRef<any>()

  useEffect (() => {
    anime01 && !anime02 && animate01()
    anime02 && !anime01 && animate02()

    return (() => {
      console.log('xxx')
    })
  }, [anime01, anime02])

  function animate01 () {
    if (element) {
      anime({
        targets: element.current,
        translateX: 400,
        backgroundColor: '#FF8F42',
        borderRadius: ['0%', '50%'],
        complete: () => {
          setAnime01(false)
        }
      })
    }
  }

  function animate02 () {
    if (element) {
      anime({
        targets: element.current,
        translateX: 0,
        backgroundColor: '#FFF',
        borderRadius: ['50%', '0%'],
        easing: 'easeInOutQuad',
        complete: () => {
          setAnime02(false)
        }
      })
    }
  }

  function clickHandler () {
    setAnime01(true)
    setTimeout(setAnime02.bind(null, true), 500)
  }

  return (
    <div className="container" onClick={clickHandler}>
      <div className="el" ref={element}></div>
    </div>
  )
}