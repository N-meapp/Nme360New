import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

export default function NavbarAdmin({setTab,tab}){
const dispatch = useDispatch()

  const handleLogout =()=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!"
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({ type: "ADMIN_LOGOUT"});
        Swal.fire({
          title: "Thank you",
          text: "You have been logged out",
          icon: "success",
        });
      }
    });
  }

    return(
        <>
          {/* Sidebar */}
    <div className="w-[20%] h-full bg-white">
      <div className="mx-auto mt-10 w-fit">
        <img
          className="object-contain w-32"
          src="/assets/Images/logo/logo.png" // Removed `/public` — not needed
          alt="Logo"
        />
      </div>
      <div className="w-full h-auto mt-10">
        <div
          onClick={() => {
            setTab('addblog');
          }}
          className={`${tab=='addblog'?'shadow-xl font-bold bg-[#f8f8f8]':'font-extralight'} w-full h-fit py-4 mx-auto border-t border-[#f5f4f4] transition-all cursor-pointer `}
        >
          <h3 className="text-sm text-center">Add blog</h3>
        </div>
        <div
          onClick={() => {
            setTab('editblogs');
          }}
          className={`${tab=='editblogs'?'shadow-xl font-bold bg-[#f8f8f8]':'font-extralight'} w-full h-fit py-4 mx-auto border-t border-[#f5f4f4] transition-all cursor-pointer `}
        >
          <h3 className="text-sm text-center">Edit blogs</h3>
        </div>
        <div
          onClick={() => {
            setTab('addvacancy');
          }}
          className={`${tab=='addvacancy'?'shadow-xl font-bold bg-[#f8f8f8]':'font-extralight'} w-full h-fit py-4 mx-auto border-t border-[#f5f4f4] transition-all cursor-pointer `}
        >
          <h3 className="text-sm text-center">Add Career</h3>
        </div>
        <div
          onClick={() => {
            setTab('editvacancies');
          }}
          className={`${tab=='editvacancies'?'shadow-xl font-bold bg-[#f8f8f8]':'font-extralight'} w-full h-fit py-4 mx-auto border-t border-[#f5f4f4] transition-all cursor-pointer `}
        >
          <h3 className="text-sm text-center">Edit careers</h3>
        </div>
        <div
          onClick={() => {
            setTab('listenquiries');
          }}
          className={`${tab=='listenquiries'?'shadow-xl font-bold bg-[#f8f8f8]':'font-extralight'} w-full h-fit py-4 mx-auto border-t border-[#f5f4f4] transition-all cursor-pointer `}
        >
          <h3 className="text-sm text-center">List enquiries</h3>
        </div>
        <div
          onClick={() => {
           handleLogout()
          }}
          className={`w-full h-fit py-4 mx-auto border-t border-[#f5f4f4] transition-all cursor-pointer text-[red] flex gap-3 justify-center`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.023 5.5a9 9 0 1 0 9.953 0M12 2v8" color="currentColor"/></svg>
          <h3 className="text-sm text-center">Logout</h3>
        </div>
      </div>
    </div>
        </>
    )
}