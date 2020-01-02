import React, { useState, useEffect } from 'react'
import './style.scss'

export default function Demo () {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounter(counter + 1)
    }, 5000)
    console.log('effect:', timer)

    return () => {
      console.log('clear:', timer)
      clearTimeout(timer)
    }
  }) 
  //传入[]后虽然解决了循环渲染的问题，但是会提示警告：
  // React Hook useEffect has a missing dependency: 'counter'. Either include it or remove the dependency array. You can also do a functional update 'setCounter(c => ...)' if you only need 'counter' in the 'setCounter' call  react-hooks/exhaustive-deps

  return (
    <div className="container">
      <div className="el">{counter}</div>
    </div>
  )
}


// import React, { useState, useEffect } from 'react';
// import './style.scss';

// export default function AnimateDemo() {
//   const [counter, setCounter] = useState(0);

//   // DOM渲染完成之后副作用执行
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setCounter(counter + 1);
//     }, 300);
//     console.log('effect:', timer);

//     return () => {
//       console.log('clear:', timer);
//       clearTimeout(timer);
//     }
//   });

//   console.log('before render');

//   return (
//     <div className="container">
//       <div className="el">{counter}</div>
//     </div>
//   )
// }
