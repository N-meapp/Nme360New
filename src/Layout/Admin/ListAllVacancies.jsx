import { useEffect, useState } from "react";
import BlogCardAdmin from "../../Components/Cards/BlogCardAdmin";
import axios from 'axios'
import CareersCard from "../../Components/Cards/CareersCard";
import CareerCardAdmin from "../../Components/Cards/CareerCardAdmin";

export default function ListAllVacancies(){

  const [isModalOpened,setIsModalOpened] = useState(false)
  const [vacancies,setVacancies] = useState([])


        useEffect(()=>{
            try {
                axios.get('http://localhost:3000/api/career').then((result)=>{
                  setVacancies(result.data.res)
                })
                
              } catch (error) {
                console.log(error);
                
              }
        },[isModalOpened])

    return(
        <>

<div className="w-[80%] mx-auto mt-20 mb-20">
          <div className="w-full h-fit gap-5 flex flex-wrap">
            {vacancies?.map((career, idx) => (
         <CareerCardAdmin card={career} setIsModalOpened={setIsModalOpened} />
            ))}
          </div>
        </div>

        </>
    )
}