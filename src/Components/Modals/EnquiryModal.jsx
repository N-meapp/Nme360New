import { useState } from "react";

export default function EnquiryModal({ setIsModalOpened, title }) {
  const [username, setUsername] = useState();
  const [subject, setSubject] = useState(title);

  return (
    <div className="fixed inset-0 bg-[#ffffff4d] backdrop-blur-md z-50 overflow-auto">
      <div className="min-h-full w-full flex justify-center items-start py-10">
        <div className="w-[90%] max-w-xl rounded-xl bg-white p-6 flex flex-col gap-6">
          <h3 className="text-xl font-semibold mb-5 mt-2">Send Enquiry Form</h3>

          <div>
            <h3 className="text-sm">Full name</h3>
            <input className="w-full h-10 rounded-xl bg-[#ffffff] mt-2 border border-[#c4c4c4] px-3"></input>
          </div>

          <div>
            <h3 className="text-sm">Email Id</h3>
            <input className="w-full h-10 rounded-xl bg-[#ffffff] mt-2 border border-[#c4c4c4] px-3"></input>
          </div>

          <div>
            <h3 className="text-sm">Contact No.</h3>
            <input className="w-full h-10 rounded-xl bg-[#ffffff] mt-2 border border-[#c4c4c4] px-3"></input>
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

            <button className="px-5 py-3 w-full rounded-xl bg-[#3f37a5] text-white">
              <h3>Send</h3>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
