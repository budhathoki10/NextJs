const dynamicroute =async(props)=>{
    const name= await props.params;
console.log(name)

return (
    <>
   <html>
    <body>
        <h1>dynamic route</h1>
        <h2>user name: {name.username}</h2>
    </body>
   </html>
    
    
    </>
)
}
export default dynamicroute