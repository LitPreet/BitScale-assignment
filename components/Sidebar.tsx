"use client";
import { sideBarItems } from "@/lib/utils";
import React, { useState } from "react";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`fixed top-16 left-0 h-full bg-white text-white z-10 border-r
        transition-all duration-300 ease-in-out
        ${isExpanded ? "w-64" : "w-16"}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="flex flex-col gap-2 justify-between p-3 h-[90%]">
        <div className="">
          {sideBarItems.slice(0, 3).map(({ name, Icon }) => (
            <div
              key={name}
              className={`flex items-center gap-4 p-2 cursor-pointer 
              rounded-lg hover:bg-gray-300 transition-all duration-300
              ${isExpanded ? "px-4" : "justify-center"}`}
            >
              <div className="min-w-[24px]">
                <Icon width={24} height={24} className="text-white" />
              </div>
              <span
                className={`whitespace-nowrap text-gray-600 transition-all duration-300
                ${
                  isExpanded
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10 absolute"
                }`}
              >
                {name}
              </span>
            </div>
          ))}
        </div>

        <div className="">
          {sideBarItems.slice(3).map(({ name, Icon }) => (
            <div
              key={name}
              className={`flex items-center gap-4 p-2 cursor-pointer 
              rounded-lg hover:bg-gray-300 transition-all duration-300
              ${isExpanded ? "px-4" : "justify-center"}`}
            >
              <div className="min-w-[24px]">
                <Icon width={24} height={24} className="text-white" />
              </div>
              <span
                className={`whitespace-nowrap text-gray-600 transition-all duration-300
                ${
                  isExpanded
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10 absolute"
                }`}
              >
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
