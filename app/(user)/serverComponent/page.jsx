const servercomp= async ()=>{

const res= await fetch("https://jsonplaceholder.typicode.com/posts")
const data= await res.json()
return(
    <>
       <ul className="mt-5">
        {data.map((post) => (
          <li key={post.id} className="border-b py-2">
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </>
)
}
export default servercomp