import Footer from "@/components/footer";
import Navbar from "@/components/nav";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div>
      <Navbar />
      <section className="bg-[hsla(215,25%,27%,1)] p-[16px] md:p-[80px_50px] mx-[20px] md:mx-[80px] my-[140px] text-white rounded-[30px]">
        <h1 className="font-medium text-h1 leading-[100%] tracking-[-6%]">
          Request your offer
        </h1>
        <form>
          <div className="py-[50px] grid md:grid-cols-3 gap-[20px] md:gap-[50px_20px]">
            <input
              className="w-full h-[56px] rounded-[14px] border border-[hsla(215,20%,65%,1)] p-[16px] bg-[hsla(215,16%,47%,1)]"
              type="text"
              placeholder="*name"
            />
            <input
              className="w-full h-[56px] rounded-[14px] border border-[hsla(215,20%,65%,1)] p-[16px] bg-[hsla(215,16%,47%,1)]"
              type="text"
              placeholder="*last name"
            />
            <input
              className="w-full h-[56px] rounded-[14px] border border-[hsla(215,20%,65%,1)] p-[16px] bg-[hsla(215,16%,47%,1)]"
              type="date"
              placeholder="*project deadline"
            />
            <input
              className="w-full h-[56px] rounded-[14px] border border-[hsla(215,20%,65%,1)] p-[16px] bg-[hsla(215,16%,47%,1)]"
              type="text"
              placeholder="*phone"
            />
            <input
              className="w-full h-[56px] rounded-[14px] border border-[hsla(215,20%,65%,1)] p-[16px] bg-[hsla(215,16%,47%,1)]"
              type="text"
              placeholder="*email"
            />
            <input
              className="w-full h-[56px] rounded-[14px] border border-[hsla(215,20%,65%,1)] p-[16px] bg-[hsla(215,16%,47%,1)]"
              type="file"
              placeholder="*project uploads"
            />
          </div>
          <div className="flex">
            <input type="checkbox" />i have read the privacy policy
          </div>
          <button className="w-[291px] h-[52px] rounded-full bg-[hsla(210,40%,98%,1)] block mx-auto mt-[50px]">
            <div className="flex items-center justify-center gap-[10px]">
              <Image src="/assets/msg.svg" alt="send" width={22} height={18} />
              <p className="text-[hsla(222,47%,11%,1)] font-bold text-[20px] leading-[160%]">
                Send
              </p>
            </div>
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
}

export default page;
