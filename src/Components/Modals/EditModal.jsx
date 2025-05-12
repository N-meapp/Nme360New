import axios from "axios"
import { useState } from "react"
import Swal from "sweetalert2";

export default function EditModal({ isEditClicked, setIsEditClicked, blog,setIsModalOpened }) {
    

    const [title, setTitle] = useState(blog.title)
    const [description, setDescription] = useState(blog.description)
    const [date, setDate] = useState(blog.date)
    const [image, setImage] = useState(blog.image)
    const [isBlogAdded, setIsBlogAdded] = useState(false)


    const updateBlog = async () => {
        setIsBlogAdded(true)

        if (image != blog.image) {
            
            const formData = new FormData();
            formData.append('file', image)
            formData.append('upload_preset', 'nme360');
            formData.append('cloud_name', 'djedeaw0l');
           await axios.post('https://api.cloudinary.com/v1_1/djedeaw0l/upload', formData).then(async (res)=>{

            
                if (res?.data?.url) {
                    const data = { title: title, description: description, date: date, image: res.data.url, id: blog._id }
    
                    await axios.patch('http://localhost:3000/api/blog', data).then((result) => { 
                        if (result.data.status) {
            
                            Swal.fire({
                                title: "Blog added successfully!",
                                icon: "success",
                                draggable: true
                            });
                            setImage(null)
                            setDescription(null)
                            setTitle(null)
                            setDate(null)
                            setIsBlogAdded(false)
                            setIsModalOpened(false)
                            setIsEditClicked(false)
            
                        } else {
                            Swal.fire({
                                icon: "error",
                                title: "Oops...",
                                text: `Database error!`,
                            });
                        }
                    }).catch((error) => {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: `Database error`,
                        });
            
                    })
                }else{
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: `Image not uploaded`,
                    });
                }


            }).catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${error.response.data.error.message}`,
                });

            })
          
        }
        else{

            const data = { title: title, description: description, date: date, image: image, id: blog._id }
    
            await axios.patch('http://localhost:3000/api/blog', data).then((result) => { 
                if (result.data.status) {
    
                    Swal.fire({
                        title: "Blog added successfully!",
                        icon: "success",
                        draggable: true
                    });
                    setImage(null)
                    setDescription(null)
                    setTitle(null)
                    setDate(null)
                    setIsBlogAdded(false)
                    setIsModalOpened(false)
                    setIsEditClicked(false)
    
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: `Database error!`,
                    });
                }
            }).catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `Database error`,
                });
    
            })
        }



    }


    return (
        <>
            <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

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
                                    htmlFor="title"
                                >
                                    Title
                                </label>
                                <textarea
                                    className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="title"
                                    placeholder="Title"
                                    value={title}
                                    onChange={(e) => {
                                        setTitle(e.target.value)
                                    }}
                                ></textarea>

                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2 mt-4"
                                    htmlFor="description"
                                >
                                    Description
                                </label>
                                <textarea
                                    className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="description"
                                    placeholder="Description"
                                    value={description}
                                    onChange={(e) => {
                                        setDescription(e.target.value)
                                    }}
                                ></textarea>

                                <div className="mt-4 flex gap-4">
                                    <div>
                                        <label
                                            className="block text-gray-700 text-sm font-bold mb-2"
                                            htmlFor="image"
                                        >
                                            Image
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="image"
                                            type="file"
                                            onChange={(e) => {
                                                setImage(e.target.files[0]);
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label
                                            className="block text-gray-700 text-sm font-bold mb-2"
                                            htmlFor="date"
                                        >
                                            Date
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="date"
                                            type="date"
                                            onChange={(e) => {
                                                setDate(e.target.value)
                                            }}
                                        />
                                    </div>
                                </div>
                                {isBlogAdded ?
                                    <button className="w-fit py-3 px-5 rounded-full bg-gradient-to-r from-[#05BCF6]  to-[#036E90] font-semibold text-sm text-white mt-10 float-right">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-dasharray="16" stroke-dashoffset="16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3c4.97 0 9 4.03 9 9"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="16;0" /><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" /></path></svg></button> :
                                    <button onClick={() => {
                                        updateBlog()
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