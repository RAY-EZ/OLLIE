import React,{useEffect, useState} from 'react'


export default function Timer(){
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const [time, updateTime] = useState(new Date());
  
  useEffect(()=>{
    setInterval(()=>{
      updateTime(new Date())
    }, 1000)
  },[])

  return (
    <>
      <p>{`${days[time.getDay()]} ${time.getHours() % 12} : ${time.getMinutes()} : ${time.getSeconds()}`}</p>
    </>
  )
}