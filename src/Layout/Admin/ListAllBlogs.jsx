import { useEffect, useState } from "react";
import BlogCardAdmin from "../../Components/Cards/BlogCardAdmin";
import axios from 'axios'

export default function ListAllBlogs(){

  const [blogs,setBlogs] = useState([])
  const [isModalOpened,setIsModalOpened] = useState(false)


  useEffect(()=>{

    try {

      axios.get('https://nme360.com/api/blog').then((result)=>{
        setBlogs(result.data.res)
        
      })
      
    } catch (error) {
      console.log(error);
      
    }
  },[isModalOpened])

    return(
        <>

<div className="w-[80%] mx-auto mt-20 mb-20">
          <div className="w-full h-fit gap-5 flex flex-wrap">
            {blogs?.map((blog, idx) => (
              <BlogCardAdmin blog={blog} key={idx} setIsModalOpened={setIsModalOpened} isModalOpened={isModalOpened} />
            ))}
          </div>
        </div>

        </>
    )
}