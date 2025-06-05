import axios from "axios"
import { array } from "prop-types"
import { useState } from "react"
import { data } from "react-router-dom"
import Swal from "sweetalert2"

export default function ApplyForJob() {

    const [fullName, setFullName] = useState()
    const [email, setEmail] = useState()
    const [number, setNumber] = useState()
    const [resume, setResume] = useState()
    const [description, setDescription] = useState()
    const [position, setPosition] = useState()
    const [isSubmitted, setIsSubmitted] = useState()



    const handleSubmit = async () => {

        const alertArray = document.getElementsByClassName('alert')
        console.log(alertArray[0].innerText,'alerrtt');

        let isValid = true

        for (let i = 0; i < alertArray.length; i++) {
            if (alertArray[i].innerText) {
                console.log('false');
                isValid = false
            }else{
                console.log('true');
                
            }
        }


        


        if (email && fullName && number && resume && position && isValid) {
            setIsSubmitted(true)
            const formData = new FormData();
            formData.append('fullName', fullName);
            formData.append('email', email);
            formData.append('number', number);
            formData.append('description', description);
            formData.append('position', position);
            formData.append('resume', resume); // resume should be a File object

            try {
                const response = await axios.post('http://localhost:3000/api/send-mail', formData, {
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
        }

    };

    const validateData = (type) => {
        if (type == 'name') {
            if (!fullName) {
                return 'Required *'
            } else if (!/^[A-Za-z\s]+$/.test(fullName)) {
                console.log(fullName, 'full nameee');
                
                return 'The name entered is invalid.'
            } else {
                
                return ''
            }
        } else if (type == 'email') {
            if (!email) {
                return 'Required *'
            } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
                console.log(email, 'full nameee');
                
                return 'The e-mail address entered is invalid.'
            } else {

                
                return ''
            }

        } else if (type == 'phone') {
            if (!number) {
                return 'Required *'
            } else if (!/^(?:\+?\d{1,3}[-.\s]?)?(?:\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/.test(number)) {
                console.log(number, 'full nameee');
                
                return 'The phone number entered is invalid.'
            } else {

                
                return ''
            }

        } else if (type == 'position') {

            if (!position) {
                return 'Required *'
            } else if (!/^[A-Za-z0-9-]+$/.test(position)) {
                console.log(position, 'full nameee');
                
                return 'The position entered in invalid.'
            } else {

                
                return ''
            }

        }
    }

    const handleChangeResume = (value) => {
        const file = value;
        if (!file) return;

        // 1. Check file type
        const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        if (!allowedTypes.includes(file.type)) {
            alert('Invalid file type.');
            
            return;
        }

        // 2. Check file extension (extra precaution)
        const extension = file.name.split('.').pop().toLowerCase();
        if (!['pdf', 'doc', 'docx'].includes(extension)) {
            alert('Invalid file extension.');
            
            return;
        }

        // 3. Check file size (e.g., max 5MB)
        const maxSizeInMB = 5;
        if (file.size > maxSizeInMB * 1024 * 1024) {
            alert('File too large.');
            
            return;
        }
        setResume(file)

    }


    return (
        <>

            <div
                className="w-4/5 p-6 md:p-10 shadow-md rounded-lg mt-10 md:mt-20 mx-auto bg-white">

                {/* <input type="hidden" name="_captcha" value="false"></input>
                <input type="hidden" name="_next" ></input> */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 rounded-lg">


                    <div className="w-full">
                        <label className="block text-[#8D8D8D] text-sm">Full Name</label>
                        <input type="text" name="name" required
                            onChange={(e) => {
                                setFullName(e.target.value)
                            }}
                            className="w-full border-b-2 border-gray-300 focus:border-black outline-none py-2"></input>

                        <span className=" text-[12px] text-[red] alert">{validateData('name')}</span>
                    </div>


                    <div className="w-full">
                        <label className="block text-[#8D8D8D] text-sm">Email</label>
                        <input type="email" name="email" required
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            className="w-full border-b-2 border-gray-300 focus:border-black outline-none py-2"></input>
                        <span className=" text-[12px] text-[red] alert ">{validateData('email')}</span>

                    </div>


                    <div className="w-full">
                        <label className="block text-[#8D8D8D] text-sm">Phone Number</label>
                        <input type="tel" name="phone" required
                            onChange={(e) => {
                                setNumber(e.target.value)
                            }}
                            className="w-full border-b-2 border-gray-300 focus:border-black outline-none py-2"></input>
                        <span className=" text-[12px] text-[red] alert ">{validateData('phone')}</span>

                    </div>

                    <div className="w-full">
                        <label className="block text-[#8D8D8D] text-sm">Position Applied For</label>
                        <input type="text" name="position" required
                            onChange={(e) => {
                                setPosition(e.target.value)
                            }}
                            className="w-full border-b-2 border-gray-300 focus:border-black outline-none py-2"></input>
                        <span className=" text-[12px] text-[red] alert ">{validateData('position')}</span>

                    </div>


                    <div className="w-full md:col-span-2">
                        <label className="block text-[#8D8D8D] text-sm">Upload Resume</label>
                        <input type="file" name="attachment" accept=".pdf,.doc,.docx"
                            onChange={(e) => {
                                handleChangeResume(e.target.files[0])
                            }}
                            className="w-full border-b-2 border-gray-300 focus:border-black outline-none py-2"></input>
                    </div>


                    <div className="w-full md:col-span-2">
                        <label className="block text-[#8D8D8D] text-sm">Why should we hire you?</label>
                        <textarea name="message" rows="4"
                            onChange={(e) => {
                                setDescription(e.target.value)
                            }}
                            className="w-full border-b-2 border-gray-300 focus:border-black outline-none py-2"></textarea>
                    </div>
                </div>


                {isSubmitted ?
                    <button
                        className="w-full bg-black text-white py-3 md:py-4 text-base md:text-lg hover:bg-gray-700 mt-6 rounded-lg flex gap-2 items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="2 4" stroke-dashoffset="6" d="M12 21c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9"><animate attributeName="stroke-dashoffset" dur="0.6s" repeatCount="indefinite" values="6;0" /></path><path stroke-dasharray="32" stroke-dashoffset="32" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.1s" dur="0.4s" values="32;0" /></path><path stroke-dasharray="10" stroke-dashoffset="10" d="M12 16v-7.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="10;0" /></path><path stroke-dasharray="6" stroke-dashoffset="6" d="M12 8.5l3.5 3.5M12 8.5l-3.5 3.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="6;0" /></path></g></svg>
                        <h3>Submitting</h3>
                    </button> :
                    <button onClick={() => {
                        handleSubmit()
                    }}
                        className="w-full bg-black text-white py-3 md:py-4 text-base md:text-lg hover:bg-gray-700 mt-6 rounded-lg">
                        Submit
                    </button>
                }

            </div>

        </>
    )
}