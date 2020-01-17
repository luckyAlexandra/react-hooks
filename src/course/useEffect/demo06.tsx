// 顺序
import React, { useState, useEffect } from 'react';
import './style.scss';

export default function AnimateDemo() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounter(counter + 1);
    }, 300);
    console.log('effect:', timer);

    return () => {
      console.log('clear:', timer);
      clearTimeout(timer);
    }
  });

  console.log('before render');

  return (
    <div className="container">
      <div className="el">{counter}</div>
    </div>
  )
}
