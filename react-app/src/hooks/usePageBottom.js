import { useEffect, useState } from "react"

const usePageBottom = ()=>{
  const [isBottom, setTimeout] = useState(false);

  useEffect(()=>{
    const handleScroll = ()=>{
      if(document.documentElement.getBoundingClientRect().bottom <= window,innerHeight){
       
       setBottom(true)

      }
    }
    document.addEventListener('scroll');
    return()=> document.removeEventListener('scrool', handleScroll)
  },[])

  return isBottom;
}

export default usePageBottom;