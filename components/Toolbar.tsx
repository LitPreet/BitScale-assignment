"use client";
import {
  ArrowDownUp,
  Download,
  Filter,
  Search,
  Share2,
  Trash2,
} from "lucide-react";
import React from "react";
import Grid from "@/public/assets/icons/grid.svg";
import Star from "@/public/assets/icons/star.svg";

interface ToolbarProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const Toolbar = ({ searchQuery, setSearchQuery }: ToolbarProps) => {
  return (
    <div className="p-4 flex flex-wrap gap-3 w-full items-center border-b border-gray-200">
      <div className="flex-1 flex flex-wrap gap-2 w-full sm:w-fit ">
        <div className="relative w-full sm:w-[350px]">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-9 pr-4 py-2 border rounded-md text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <button className="sm:px-3 sm:py-1.5 px-2 py-1 flex items-center gap-2 rounded-md text-xs text-gray-600 hover:bg-gray-100">
            <Grid />
            1/1 Row
          </button>
          <button className="sm:px-3 sm:py-1.5 px-2 py-1 flex items-center gap-2 rounded-md text-xs text-gray-600 hover:bg-gray-100">
            <Grid />
            1/1 Column
          </button>
          <button className="p-2 flex items-center gap-1 text-xs rounded-md hover:bg-gray-100">
            <Filter className="h-4 w-4 text-gray-600" />0 filter
          </button>
          <button className="p-2 flex items-center gap-1 text-xs rounded-md hover:bg-gray-100">
            <ArrowDownUp className="h-4 w-4 text-gray-600" />
            Sort
          </button>
        </div>
      </div>

      <div className="flex-2 flex gap-2 sm:w-fit w-full justify-end sm:justify-center">
        <button className="px-3 py-1 flex items-center gap-2 border rounded-md text-xs text-white bg-[#1F2A37] hover:bg-[#283443] duration-300">
          <Star className="text-white" />
          Enrich
        </button>
        <button className="p-2 rounded-full flex items-center gap-2 text-xs text-gray-600 hover:bg-gray-50">
          <Share2 className="h-5 w-5 text-gray-600" />
        </button>
        <button className="p-2 flex items-center gap-2 rounded-full text-xs text-gray-600 hover:bg-gray-50">
          <Download className="h-5 w-5 text-gray-600" />
        </button>
        <button className="p-2 flex items-center gap-2 rounded-full text-xs text-red-700 hover:bg-gray-50">
          <Trash2 className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
