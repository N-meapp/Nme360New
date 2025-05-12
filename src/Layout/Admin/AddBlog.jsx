import axios from "axios"
import { useState } from "react"
import { data } from "react-router-dom"
import Swal from 'sweetalert2'


export default function AddBlog() {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [image, setImage] = useState()
  const [isBlogAdded, setIsBlogAdded] = useState(false)

  const addBlog = async () => {
    setIsBlogAdded(true)
    const formData = new FormData();

    formData.append('file', image)

    formData.append('upload_preset', 'nme360');
    formData.append('cloud_name', 'djedeaw0l');

    await axios.post('https://api.cloudinary.com/v1_1/djedeaw0l/upload', formData).then(async (res) => {

      const data = { title: title, description: description, date: date, image: null }

      if (res?.data?.url) {
        const imageUrl = res.data.url
        data.image = imageUrl

        await axios.post('http://localhost:3000/api/blog', data).then((result) => {
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
    }).catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.response.data.error.message}`,
      });

    })
  }


  return (
    <>
      <div className="w-[60%] mx-auto mt-20">
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
            addBlog()
          }} className="w-fit py-3 px-5 rounded-full bg-gradient-to-r from-[#05BCF6]  to-[#036E90] font-semibold text-sm text-white mt-10 float-right">Add blog</button>
        }
      </div>
    </>
  )
}