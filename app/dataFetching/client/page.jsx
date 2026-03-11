// "use client"

// import { useSearchParams } from "next/navigation"
// import { useEffect, useState } from "react"

// const datafetchclient=  () =>{
//     const [usergender, setusergender]= useState({});

//     // const searchParams= await props.searchParams
//     // const username= searchParams.name
//     // const res= await fetch(`https://api.genderize.io/?name=${username}`);
//     // const data= await res.json();
//     // console.log(data)
//     // console.log("hello")

//     useEffect(()=>{
// const gender= async()=>{
//     const res= await fetch(`https://api.genderize.io/?name=${username}`);
//     const data= await res.json();
//     // console.log(data)
//     setusergender(data)
// };
// gender();


//     },[])









//     const params= useSearchParams()
//     const username= params.get("name");
    






//     if(!username || username=="" ){

//     return (
//         <>
        
//      <html>
//         <body>
            
//               <h1>please provide a name</h1>

//         </body>
//      </html>
        
        
//         </>
//     )


//     }
//     else{
//            return (
//         <>
        
//      <html>
//         <body>
//               <h1>your name is {username}</h1>
            
//               <h1>your gender is {usergender.gender}</h1>

//         </body>
//      </html>
        
//         </>
//     )
//     }
// }
// export default datafetchclient
// pages/index.js
// pages/index.js

'use client';

import dynamic from 'next/dynamic';

function InlineHeavy() {
  return <div>This is the inline heavy component!</div>;
}

const HeavyComponent = dynamic(() => Promise.resolve(InlineHeavy), {
  ssr: false,
  loading: () => <p>Loading inline...</p>,
});

export default function Page() {
  return (
   <html>
    <body>
         <div>
      <h1>Main Page</h1>
      <HeavyComponent />
    </div>
    </body>
   </html>
  );
}