const blog= async(props)=>{
const {slug}= await props.params
    console.log(slug)
return(
    <>
    <h1>hello  technology</h1>
    </>
)

}
export default blog