import axios from "axios"
import { useState } from "react"
import { data } from "react-router-dom"
import Swal from 'sweetalert2'


export default function AddVacancy() {

    const [position, setPosition] = useState('')
    const [skills, setSkills] = useState('')
    const [experience, setExperience] = useState('')
    const [isVacancyAdded, setIsVacancyAdded] = useState(false)

    const addVacancy = async () => {
        setIsVacancyAdded(true)

            const data = { position: position, skills: skills, experience:experience }

                await axios.post('https://nme360.com/api/career', data).then((result) => {
                    if (result.data.status) {

                        Swal.fire({
                            position: "Vacancy added successfully!",
                            icon: "success",
                            draggable: true
                        });
                        setSkills(null)
                        setPosition(null)
                        setExperience(null)
                        setIsVacancyAdded(false)

                    } else {
                        Swal.fire({
                            icon: "error",
                            position: "Oops...",
                            text: `Database error!`,
                        });
                    }
                }).catch((error) => {
                    Swal.fire({
                        icon: "error",
                        position: "Oops...",
                        text: `Database error`,
                    });

                })



            }
      

    return (
        <>
            <div className="w-[60%] mx-auto mt-20">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="position"
                >
                    Position
                </label>
                <input
                    className="shadow appearance-none border rounded-2xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="position"
                    placeholder="position"
                    value={position}
                    onChange={(e) => {
                        setPosition(e.target.value)
                    }}
                ></input>

                <label
                    className="block text-gray-700 text-sm font-bold mb-2 mt-4"
                    htmlFor="skills"
                >
                    skills
                </label>
                <input
                    className="shadow appearance-none border rounded-2xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="skills"
                    placeholder="skills"
                    value={skills}
                    onChange={(e) => {
                        setSkills(e.target.value)
                    }}
                ></input>
                <label
                    className="block text-gray-700 text-sm font-bold mb-2 mt-4"
                    htmlFor="experience"
                >
                    Experience
                </label>
                <input
                    className="shadow appearance-none border rounded-2xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="experience"
                    placeholder="experience"
                    value={experience}
                    onChange={(e) => {
                        setExperience(e.target.value)
                    }}
                ></input>
                {isVacancyAdded ?
                    <button className="w-fit py-3 px-5 rounded-full bg-gradient-to-r from-[#05BCF6]  to-[#036E90] font-semibold text-sm text-white mt-10 float-right">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-dasharray="16" stroke-dashoffset="16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3c4.97 0 9 4.03 9 9"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="16;0" /><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" /></path></svg></button> :
                    <button onClick={() => {
                        addVacancy()
                    }} className="w-fit py-3 px-5 rounded-full bg-gradient-to-r from-[#05BCF6]  to-[#036E90] font-semibold text-sm text-white mt-10 float-right">Add</button>
                }
            </div>
        </>
    )
}