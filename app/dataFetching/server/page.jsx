const datafetchsserver= async (props) =>{
    const searchParams= await props.searchParams
    const username= searchParams.name
    const res= await fetch(`https://api.genderize.io/?name=${username}`);
    const data= await res.json();
    console.log(data)
    console.log("hello")
    if(!username || username=="" ){

    return (
        <>
        
     <html>
        <body>
            
              <h1>please provide a name</h1>

        </body>
     </html>
        
        
        </>
    )


    }
    else{
           return (
        <>
        
     <html>
        <body>
            
              <h1>your gender is {data.gender}</h1>

        </body>
     </html>
        
        </>
    )
    }
}
export default datafetchsserver