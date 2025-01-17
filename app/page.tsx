"use client";
import React, { useState } from "react";
import Toolbar from "@/components/Toolbar";
import  Table  from "@/components/Table";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="min-h-screen">
      {/* Toolbar */}
      <Toolbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      {/* Table */}
      <div className="overflow-x-auto">
      <Table />
      </div>
    </div>
  );
}