// const dynamicrouteNested =async(props)=>{
// const name= await props.params;
// // console.log(name)
// console.log(props)

// return (
//     <>
//    <html>
//     <body>
//         <h1>dynamic route</h1>
//         <h2>user name: {name.username}</h2>
//         <h2>postid: {name.postid}</h2>
//     </body>
//    </html>
    
    
//     </>
// )
// }
// export default dynamicrouteNested

// ------------------------------------------------------ for client component
"use client"

import { use } from "react";

const dynamicrouteNested =(props)=>{
const name= use( props.params);
// console.log(name)
console.log(props)

return (
    <>
   <html>
    <body>
        <h1>dynamic route</h1>
        <h2>user name: {name.username}</h2>
        <h2>postid: {name.postid}</h2>
    </body>
   </html>
    
    
    </>
)
}
export default dynamicrouteNested
