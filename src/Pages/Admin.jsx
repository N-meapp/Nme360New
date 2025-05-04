import { useState } from "react";
import BlogCard from "../Components/Cards/BlogCard";
import BlogCardAdmin from "../Components/Cards/BlogCardAdmin";

export default function Admin() {

    const [tab,setTab] = useState('addblog')

  return (
    <>
    <div className="flex h-screen w-full fixed">
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
          className="w-full h-fit py-4 border-t border-[#d4d2d2] cursor-pointer"
        >
          <h3 className="text-sm text-center">Add blog</h3>
        </div>
        <div
          onClick={() => {
            setTab('editblogs');
          }}
          className="w-full h-fit py-4 border-y border-[#d4d2d2] cursor-pointer"
        >
          <h3 className="text-sm text-center">Edit blogs</h3>
        </div>
      </div>
    </div>
  
    {/* Main Content (scrollable) */}
    <div className="w-[80%] h-screen overflow-auto bg-[#f5f4f4] px-4">
      {tab === 'addblog' ? (
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
              />
            </div>
          </div>
        </div>
      ) : tab === 'editblogs' ? (
        <div className="w-[80%] mx-auto mt-20 mb-20">
          <div className="w-full h-fit gap-5 flex flex-wrap">
            {[3, 5, 5, 5, 5].map((_, idx) => (
              <BlogCardAdmin key={idx} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  </div>
  
    </>
  );
}
