import React, { useState } from 'react';
import {Slider} from 'antd-mobile';
import './index.scss'

interface Color {
  r: number,
  g: number,
  b: number
}

export default function Rectangle () {
  const [height, setHeight] = useState(10)
  const [width, setWidth] = useState(10)
  const [color, setColor] = useState<Color>({r: 0, g: 0, b:0})
  const [radius, setRadius] = useState<number>(0)

  const style = {
    height: `${height}px`,
    width: `${width}px`,
    backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`,
    borderRadius: `${radius}px`
  }

  return (
    <div className="container">
      <p>height:</p>
      <Slider
        min={10}
        max={300}
        onChange={(n) => setHeight(n || 0)}
      ></Slider>
      <p>width:</p>
      <Slider
        min={10}
        max={300}
        onChange={(n) => setWidth(n || 0)}      
        ></Slider>      
      <p>color R:</p>
      <Slider
        min={0}
        max={255}
        onChange={(n = 0) => setColor({...color, r: n})}    
      ></Slider>     
      <p>color G:</p>
      <Slider
        min={0}
        max={255}
        onChange={(n = 0) => setColor({...color, g: n})}    
      ></Slider>    
      <p>color B:</p>
      <Slider
        min={0}
        max={255}
        onChange={(n = 0) => setColor({...color, b: n})}        
      ></Slider>    
      <p>Radius:</p>
      <Slider
        min={0}
        max={150}
        onChange={(n = 0) => setRadius(n)}         
      ></Slider>   
      <div className="rectangle" style={style}></div> 
    </div>
  )
}
