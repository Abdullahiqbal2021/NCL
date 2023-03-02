import React, { useEffect, useState } from 'react'
import Report1 from './Report1'
import Report2 from './Report2'


export default function Shuffle() {
  const [shuffle, setShuffle] = useState(true)
  useEffect(() => {
    const interval = window.setInterval(() => {
      setShuffle(prev => !prev);
    }, 120000);

    return () => {
      clearInterval(interval);
    }
  }, [shuffle])
  return (
    <>
      <div className="" style={{ display: shuffle ? "" : 'none' }}>
        <Report1 />
      </div>
      <div style={{ display: shuffle ? "none" : '' }}>
        <Report2 />
      </div>

    </>
  )
}
