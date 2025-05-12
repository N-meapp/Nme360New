import axios from "axios"
import { useState } from "react"
import Swal from "sweetalert2";

export default function EditCareerModal({ isEditClicked, setIsEditClicked, career, setIsModalOpened }) {


    const [position, setPosition] = useState(career.position)
    const [skills, setSkills] = useState(career.skills)
    const [experience, setExperience] = useState(career.experience)
    const [image, setImage] = useState(career.image)
    const [isCareerAdded, setIsCareerAdded] = useState(false)

    const updateCareer = async () => {
        setIsCareerAdded(true)

        const data = { position: position, skills: skills, experience: experience, id: career._id }

        await axios.patch('http://localhost:3000/api/career', data).then((result) => {
            if (result.data.status) {

                Swal.fire({
                    title: "career added successfully!",
                    icon: "success",
                    draggable: true
                });
                setImage(null)
                setSkills(null)
                setPosition(null)
                setExperience(null)
                setIsCareerAdded(false)
                setIsModalOpened(false)
                setIsEditClicked(false)

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
            <div className="relative z-10 cursor-auto" aria-labelledby="modal-position" role="dialog" aria-modal="true">

                <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-[60%] p-10">
                            <div onClick={() => {
                                setIsEditClicked(false)
                                setIsModalOpened(false)
                            }} className="absolute w-10 h-10 bg-[#ffffff] top-2 rounded-full shadow-md right-2 p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="red" d="M16.95 8.464a1 1 0 0 0-1.414-1.414L12 10.586L8.464 7.05A1 1 0 1 0 7.05 8.464L10.586 12L7.05 15.536a1 1 0 1 0 1.414 1.414L12 13.414l3.536 3.536a1 1 0 1 0 1.414-1.414L13.414 12z" /></svg>
                            </div>
                            <div className=" mx-auto">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="position"
                                >
                                    Position
                                </label>
                                <input
                                    className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                                    className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                                    className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="experience"
                                    placeholder="experience"
                                    value={experience}
                                    onChange={(e) => {
                                        setExperience(e.target.value)
                                    }}
                                ></input>
                                {isCareerAdded ?
                                    <button className="w-fit py-3 px-5 rounded-full bg-gradient-to-r from-[#05BCF6]  to-[#036E90] font-semibold text-sm text-white mt-10 float-right">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-dasharray="16" stroke-dashoffset="16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3c4.97 0 9 4.03 9 9"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="16;0" /><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" /></path></svg></button> :
                                    <button onClick={() => {
                                        updateCareer()
                                    }} className="w-fit py-3 px-5 rounded-full bg-gradient-to-r from-[#05BCF6]  to-[#036E90] font-semibold text-sm text-white mt-10 float-right">Save</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}