import { useEffect, useState } from "react";
import EditModal from "../Modals/EditModal";
import axios from "axios";
import Swal from "sweetalert2";
import EditCareerModal from "../Modals/EditCareerModal";

export default function CareerCardAdmin({ card,setIsModalOpened }) {



  const [isEditClicked,setIsEditClicked] = useState(false)


useEffect(()=>{
setIsModalOpened(false)
},[])

const handleDelete =async () =>{

  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then(async (result) => {
    if (result.isConfirmed) {
      
      await axios.delete('http://localhost:3000/api/career',{
        params: {
          id: card._id
        }
      }).then((result) => {
        
          if(result.data.status){
            Swal.fire({
              title: "Deleted!",
              text: "card has been deleted.",
              icon: "success"
            });
            setIsModalOpened(true)
          }          
      })
    }
  });

  
  }
  return (
    <>
      <div className="w-56 md:w-[12rem] rounded-2xl overflow-hidden shadow-lg shrink-0 bg-white p-4 relative flex flex-col justify-between">
      {/* <div className="relative bg-white w-[95%] min-h-40 p-6 rounded-xl shadow-md transform transition hover:scale-105"> */}
      <div>
            <div className="absolute bottom-0 left-0 w-full"></div>
            <div className="flex justify-between items-center ">
                <h3 className="text-xl font-semibold">{card.position}</h3>
                <i className="fas fa-plus cursor-pointer text-gray-600 toggle-icon"></i>
            </div>
            <p className="text-gray-600 mt-2">{card.skills}</p>
            <p className="text-gray-700 mt-3"><strong>Experience: </strong>{ card.experience}</p>
      </div>
        <div className=" mt-8 flex justify-between bottom-2">
          <button onClick={()=>{
            setIsEditClicked(true)
            setIsModalOpened(true)
          }} className="px-3 py-2 rounded-full text-black w-fit">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>
          </button>
          <button onClick={handleDelete} className="px-3 py-2 rounded-full text-black w-fit">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
          </button>

        </div>
        </div>
      {/* </div> */}
      {isEditClicked?
      <EditCareerModal isEditClicked={isEditClicked} setIsEditClicked={setIsEditClicked} career={card} setIsModalOpened={setIsModalOpened} />:null
      }
    </>
  )
}

