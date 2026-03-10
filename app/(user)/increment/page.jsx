import { useState } from "react"

const Increment= ()=>{
    const [inc, setinc]= useState(0)
    return(
        <>
        <button className="bg-amber-400 p-5" onClick={()=> setinc((prev)=>prev+1)}> add- {inc} </button>
 
        </>
    )
}
export default Increment