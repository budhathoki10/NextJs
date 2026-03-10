"use client"

import { useEffect, useState } from "react"
import Increment from "../increment/page"
const fetchData=async()=>{
const res= await fetch("https://jsonplaceholder.typicode.com/posts")
const data= await res.json()
return data

}



const ClientComp= ()=>{
    const [Post,setPost]= useState([]);

    useEffect(()=>{
const getPosts=async ()=>{
    const datas= await fetchData();
    setPost(datas)
};
getPosts()
    },[])
return(
    <>
     
  <Increment></Increment>
<p>ddeddededed</p>
     <button className= "p-5 bg-amber-50" onClick={()=>alert("hello")}>click me</button>
          <ul className="mt-5">
        {Post.map((post) => (
          <li key={post.id} className="border-b py-2">
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

    
    </>
)
}
export default ClientComp