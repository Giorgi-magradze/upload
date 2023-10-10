import { useEffect, useState } from "react"

const useCopyClipboard = ()=>{
  const [isCoped,setIsCopied] = useState(false)

  const copy = (value)=> {
    if(typeof value === 'nimber'|| typeof value ==='string'){
       navigator.clipboard.writeText(value);
       setIsCopied(true); 
    }else{
      console.log('type of value is incompatible')
    }
    
  }
  useEffect(()=>{
    let setTimeout;
    if(isCoped) {
  timeout = setTimeout (()=>setTimeout(false),3000)
    }
    return(){
      clearTimeout(timeout);
    }
  },[isCoped]) 

  return(isCoped,copy);
}

export default useCopyClipboard;