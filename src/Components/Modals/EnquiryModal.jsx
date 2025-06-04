import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

export default function EnquiryModal({ setIsModalOpened, title }) {
  const [username, setUsername] = useState();
  const [subject, setSubject] = useState(title);

  const [fullName, setFullName] = useState()
  const [email, setEmail] = useState()
  const [number, setNumber] = useState()
  const [description, setDescription] = useState()
  const [isSubmitted, setIsSubmitted] = useState()


  const handleSubmit = async () => {
    setIsSubmitted(true)
    const formData = new FormData();
    formData.append('fullName', fullName);
    formData.append('email', email);
    formData.append('number', number);
    formData.append('description', description);
    formData.append('position', subject);
    formData.append('status', 'enquiry')

    try {
      const response = await axios.post('https://nme360.com/api/send-mail', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response);

      if (response.data.success) {
        setIsSubmitted(false)
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Applied Successfully!",
          showConfirmButton: false,
          timer: 1500
        });
      }
    } catch (error) {
      console.error(error);
    }
  };



  return (
    <div className="fixed inset-0 bg-[#ffffff4d] backdrop-blur-md z-50 overflow-auto">
      <div className="min-h-full w-full flex justify-center items-start py-10">
        <div className="w-[90%] max-w-xl rounded-xl bg-white p-6 flex flex-col gap-6">
          <h3 className="text-xl font-semibold mb-5 mt-2">Send Enquiry Form</h3>

          <div>
            <h3 className="text-sm">Full name</h3>
            <input
              onChange={(e) => {
                setFullName(e.target.value)
              }}
              value={fullName}
              className="w-full h-10 rounded-xl bg-[#ffffff] mt-2 border border-[#c4c4c4] px-3"></input>
          </div>

          <div>
            <h3 className="text-sm">Email Id</h3>
            <input
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              value={email}
              className="w-full h-10 rounded-xl bg-[#ffffff] mt-2 border border-[#c4c4c4] px-3"></input>
          </div>

          <div>
            <h3 className="text-sm">Contact No.</h3>
            <input
              onChange={(e) => {
                setNumber(e.target.value)
              }}
              value={number}
              className="w-full h-10 rounded-xl bg-[#ffffff] mt-2 border border-[#c4c4c4] px-3"></input>
          </div>

          <div>
            <h3 className="text-sm">Subject</h3>
            <input
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              value={subject}
              className="w-full h-10 rounded-xl bg-[#ffffff] mt-2 border border-[#c4c4c4] px-3"
            ></input>
          </div>

          <div>
            <h3 className="text-sm">Message</h3>
            <textarea
              onChange={(e) => {
                setDescription(e.target.value)
              }}
              value={description}
              onResize="auto"
              className="w-full rounded-xl bg-[#ffffff] mt-2 border border-[#c4c4c4] px-3"
            ></textarea>
          </div>

          <div className="w-full flex gap-2">
            <button
              onClick={() => {
                setIsModalOpened(false);
              }}
              className="px-5 py-3 w-full rounded-xl border-[red] border text-black"
            >
              <h3>Cancel</h3>
            </button>

            <button onClick={handleSubmit} className="px-5 py-3 w-full rounded-xl bg-[#3f37a5] text-white">
              <h3>Send</h3>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
