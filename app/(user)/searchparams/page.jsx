const products= async(props)=>{
   const param= await props.searchParams
   console.log(param)
  return (
    <div>this is search params</div>
  )
}

export default products