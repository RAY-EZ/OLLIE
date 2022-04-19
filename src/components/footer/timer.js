import React,{useEffect, useState, useRef} from 'react'


export default function Timer(){
  const daysRef = useRef()
  daysRef.current = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const [time, updateTime] = useState(new Date());
  
  useEffect(()=>{ 
    const id = setInterval(()=>{
      updateTime(new Date())
    }, 1000)

    return ()=>{
      console.log('function called')
      clearInterval(id)
    }
  },[])

  return (
    <>
      <p>{`${daysRef.current[time.getDay()]} ${time.getHours() % 12} : ${time.getMinutes()} : ${time.getSeconds()}`}</p>
    </>
  )
}