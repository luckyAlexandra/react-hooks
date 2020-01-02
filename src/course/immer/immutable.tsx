import React from 'react'
import {fromJS, Map} from 'immutable'

export default function Demo () {
  const map1 = Map({ a: 1, b: 2, c: 3 });
  const map2 = map1.set('b', 50);
  console.log(map1.get('b') + " vs. " + map2.get('b')); // 2 vs. 50


  let immutableObj = fromJS ({a: 1});
  let immutableObj2 = immutableObj.set ('a', 2);
  console.log(immutableObj.get('a') + ' vs. ' + immutableObj2.get('a')) // 1 vs. a

  return [
    <div key="a"></div>
  ]
}