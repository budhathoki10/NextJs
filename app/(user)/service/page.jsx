import style from "./service.module.css"
import {Metadata} from "next";
export const metadata={
    title:"Service datas",
    description: 'this is my service page',
    authors:[{name:"kushal"},{name:"ram"}],
    keywords:["nextjs","react js","full stack"],
    icons:{
icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPf7Zd52iiZhHEs79-OwLrWqSp0yoWASvQag&s"
    }
}
const service= ()=>{
    
    return <h2 className={style.classes}>service.jsx</h2>
}
export default service; 
