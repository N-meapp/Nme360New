import axios from "axios";
import { useState } from "react"
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

export default function LoginPage(){

    const [username,setUsername] = useState(null)
    const [password,setPassword] = useState(null)

    const dispatch = useDispatch();

    const handleLogin =()=>{
        const data = {
            username:username,
            password:password
        }
        

        axios.post('http://localhost:3000/api/login',data).then((result)=>{
            if(result.data.status){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: result.data.message,
                    showConfirmButton: false,
                    timer: 1500
                  }).then(()=>{
                      dispatch({ type: "SET_ADMIN", payload: { username: username } });
                  })
            }else{
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${result.data.message}`,
                      });
            }
            
        })

    }

    return(
        <>
        <div className="w-full h-screen cursor-auto">

          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="/public/assets/Images/logo/logo.png"
            className="mx-auto h-24 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input
                onChange={(e)=>{
                    setUsername(e.target.value)
                }}
                  value={username}
                  className="block w-full rounded-md shadow-md bg-[#f6f6ff] px-3 py-1.5 text-base text-gray-900 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>
                
              </div>
              <div className="mt-2">
                <input
                type="password"
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                 
                  value={password}
                  className="block w-full rounded-md shadow-md bg-[#f6f6ff] px-3 py-1.5 text-base text-gray-900 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <button
              onClick={()=>{
                handleLogin()
              }}
                className="flex w-full justify-center rounded-md bg-gradient-to-r from-[#05BCF6]  to-[#036E90] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs"
              >
                Sign in
              </button>
            </div>
          </div>

         
        </div>
      </div>
        </div>
        </>
    )
}