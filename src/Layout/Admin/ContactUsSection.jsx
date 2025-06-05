import axios from "axios"
import { useState } from "react"
import Swal from "sweetalert2"

export default function ContactUsSection() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async () => {
        setIsSubmitted(false)

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

        if (firstName && lastName && email && number && subject && message && isValid) {

            console.log('aaahhhhaai');
            
            const data = {
                name: `${firstName}  ${lastName}`,
                email: email,
                number: number,
                subject: subject,
                message: message
            }
            console.log(data, 'dattaa');


            try {
                const response = await axios.post('http://localhost:3000/api/enquiry', data);

                console.log(response);

                if (response.data) {
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


    }


    const validateData = (type,name) => {
        if (type == 'name') {
            if (!name) {
                return 'Required *'
            } else if (!/^[A-Za-z\s]+$/.test(name)) {
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



    return (
        <>
            <div>
                <div class="flex flex-wrap -mx-2 mb-4">
                    <div class="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                        <label class="block text-[#8D8D8D] text-[12px]">
                            First Name
                        </label>
                        <input
                            type="text"
                            class="w-full border-b-2 border-gray-300 focus:border-black outline-none py-2"
                            onChange={(e) => {
                                setFirstName(e.target.value)
                            }}
                            value={firstName}
                        ></input>
                        <span className=" text-[12px] text-[red] alert">{validateData('name',firstName)}</span>
                    </div>
                    <div class="w-full md:w-1/2 px-2">
                        <label class="block text-[#8D8D8D] text-[12px]">
                            Last Name
                        </label>
                        <input
                            type="text"
                            class="w-full border-b-2 border-gray-300 focus:border-black outline-none py-2"
                            onChange={(e) => {
                                setLastName(e.target.value)
                            }}
                            value={lastName}
                        ></input>
                        <span className=" text-[12px] text-[red] alert">{validateData('name',lastName)}</span>

                        
                    </div>
                </div>
                <div class="flex flex-wrap -mx-2 mb-4">
                    <div class="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                        <label class="block text-[#8D8D8D] text-[12px]">
                            Email
                        </label>
                        <input
                            class="w-full border-b-2 border-gray-300 focus:border-black outline-none py-2"
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                            value={email}
                        ></input>
                         <span className=" text-[12px] text-[red] alert">{validateData('email')}</span>
                    </div>
                    <div class="w-full md:w-1/2 px-2">
                        <label class="block text-[#8D8D8D] text-[12px]">
                            Phone Number
                        </label>
                        <input
                            type="text"
                            class="w-full border-b-2 border-gray-300 focus:border-black outline-none py-2"
                            onChange={(e) => {
                                setNumber(e.target.value)
                            }}
                            value={number}
                        ></input>
                         <span className=" text-[12px] text-[red] alert">{validateData('phone')}</span>
                    </div>
                </div>
                <div class="mb-4">
                    <h3 class="font-semibold text-[1.5rem]">Select Subject?</h3>
                    <div class="row enquiry mt-3">
                        <div class="flex col-lg-3 enquiry-box">
                            <input
                                type="radio"
                                name="subject"
                                class="mr-2 "
                                value='General Inquiry'
                                checked
                                onClick={(e) => {
                                    setSubject(e.target.value)
                                }}
                            ></input>
                            <label class="mr-4 ">General Inquiry</label>
                        </div>
                        <div class="flex col-lg-3 enquiry-box">
                            <input
                                type="radio"
                                name="subject"
                                class="mr-2 "
                                checked
                                value='Development'
                                onClick={(e) => {
                                    setSubject(e.target.value)
                                }}
                            ></input>
                            <label class="mr-4">Development</label>
                        </div>
                        <div class="flex col-lg-3 enquiry-box">
                            <input
                                type="radio"
                                name="subject"
                                class="mr-2 "
                                checked
                                value='Designing'
                                onClick={(e) => {
                                    setSubject(e.target.value)
                                }}
                            ></input>
                            <label class="mr-4">Designing</label>
                        </div>
                        <div class="flex col-lg-3 enquiry-box">
                            <input
                                type="radio"
                                name="subject"
                                class="mr-2 "
                                checked
                                value='Hardware'
                                onClick={(e) => {
                                    setSubject(e.target.value)
                                }}
                            ></input>
                            <label>Hardware </label>
                        </div>
                    </div>
                </div>
                <h1>
                    <div class="mb-5 pt-10 ">
                        <label class="block text-[#8D8D8D] text-[12px]">
                            Message
                        </label>
                        <textarea
                            class="w-full h-[40px] border-b-2 border-gray-300 focus:border-black outline-none py-2"
                            rows="4"
                            placeholder="Write your message.."
                            onChange={(e) => {
                                setMessage(e.target.value)
                            }}
                            value={message}
                        ></textarea>
                    </div>

                    {isSubmitted ?
                        <button
                            onClick={() => {
                                handleSubmit()
                            }}
                            class="bg-black text-white px-4 h-[50px] w-[205px] mt-8 rounded-[4px] flex gap-2 items-center justify-center"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="2 4" stroke-dashoffset="6" d="M12 21c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9"><animate attributeName="stroke-dashoffset" dur="0.6s" repeatCount="indefinite" values="6;0" /></path><path stroke-dasharray="32" stroke-dashoffset="32" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.1s" dur="0.4s" values="32;0" /></path><path stroke-dasharray="10" stroke-dashoffset="10" d="M12 16v-7.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="10;0" /></path><path stroke-dasharray="6" stroke-dashoffset="6" d="M12 8.5l3.5 3.5M12 8.5l-3.5 3.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="6;0" /></path></g></svg>
                            Sending
                        </button> :
                        <button
                            onClick={() => {
                                handleSubmit()
                            }}
                            class="bg-black text-white px-4 h-[50px] w-[205px] mt-8 rounded-[4px] items-center"
                        >
                            Send Message
                        </button>

                    }
                </h1>
            </div >
        </>
    )
}