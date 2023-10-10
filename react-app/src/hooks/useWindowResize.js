import { useEffect, useState } from "react"

const useWindowResize =()=>{
  const[withd,setWithd] = useState(doxument.documentElement.getBoundringReact().withd);
  const[height,setHeight] = useState(doxument.documentElement.getBoundringReact().height);

  useEffect(()=>{
    const handleResize = ()=>{
     
      setWithd(document.documentElement.getBoundingClientReact().withd)
      setHeight(document.documentElement.getBoundingClientReact().height)

    }
  })


}

export default useWindowResize;