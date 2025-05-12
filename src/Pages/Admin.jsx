import { useState } from "react";
import BlogCard from "../Components/Cards/BlogCard";
import BlogCardAdmin from "../Components/Cards/BlogCardAdmin";
import NavbarAdmin from "../Layout/Admin/NavbarAdmin";
import AddBlog from "../Layout/Admin/AddBlog";
import ListAllBlogs from "../Layout/Admin/ListAllBlogs";
import AddVacancy from "../Layout/Admin/AddVacancy";
import ListAllVacancies from "../Layout/Admin/ListAllVacancies";
import ListEnquiries from "../Layout/Admin/ListEnquiries";

export default function Admin() {

    const [tab,setTab] = useState('addblog')


  return (
    <>
    <div className="flex h-screen w-full fixed cursor-auto">
  
  <NavbarAdmin setTab={setTab} tab={tab} />
  
    {/* Main Content (scrollable) */}
    <div  className="w-[80%] h-screen overflow-auto bg-[#f5f4f4] px-4">
      {tab === 'addblog' ? (
        <AddBlog />
      ) : tab === 'editblogs' ? (
       <ListAllBlogs />
      ) : tab === 'addvacancy' ? (
        <AddVacancy />
       ): tab === 'editvacancies' ? (
        <ListAllVacancies />
       ): tab === 'listenquiries' ? (
        <ListEnquiries />
       ):null}
    </div>
  </div>
  
    </>
  );
}
