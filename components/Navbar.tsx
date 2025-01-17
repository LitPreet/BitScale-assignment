"use client";
import { ArrowLeft } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between fixed top-0 left-0 right-0 items-center p-4 border-b border-gray-200 bg-white z-20">
      <div className="flex items-center gap-2">
        <ArrowLeft className="w-5 h-5 text-gray-400" />
        <span className="text-sm text-gray-600">{"Name of the File"}</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="relative">
          <input type="checkbox" className="sr-only" />
          <div
            className={`w-10 h-5 ${
              true ? "bg-green-500" : "bg-gray-200"
            } rounded-full shadow-inner transition-colors`}
          >
            <div
              className={`absolute w-4 h-4 bg-white rounded-full transition-transform duration-200 ease-in-out top-[2px] ${
                true ? "right-[2px]" : "left-[2px]"
              }`}
            ></div>
          </div>
        </div>
        <span className="text-sm text-[#0E9F6E] mr-3 sm:mr-5">Auto Save</span>
        <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-medium">
          P
        </div>
      </div>
    </div>
  );
};

export default Navbar;
