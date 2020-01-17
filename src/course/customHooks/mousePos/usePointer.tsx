import { useState } from 'react';

export default function usePointer () {
  const [position, setPosition] = useState({x: 0, y: 0})

  function handleMouseMove (ev: React.MouseEvent) {
    setPosition({x: ev.clientX, y: ev.clientY})
  }
  
  return {
    position,
    handleMouseMove
  }
}