import axios from "axios"
import { useEffect, useState } from "react"
import EnquiryCard from "../../Components/Cards/EnquiryCard"

export default function ListEnquiries(){
    const [enquiries,setEnquiries] = useState([])

    useEffect(()=>{
         try {
             axios.get('https://nme360.com/api/enquiry').then((result)=>{
                  setEnquiries(result.data.res)
                  
                })
                
              } catch (error) {
                console.log(error);
                
              }
    },[])

    return(
        <>
        <div className="w-[80%] mx-auto mt-20 mb-20">
                  <div className="w-full h-fit gap-5 flex flex-wrap">
                    {enquiries?.map((card, idx) => (
                 <EnquiryCard card={card} />
                    ))}
                  </div>
                </div>
        </>
    )
}