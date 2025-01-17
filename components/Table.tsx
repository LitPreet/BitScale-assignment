"use client";
import { useTable } from "@/app/providers/contextProvider";
import { Plus } from "lucide-react";
import { useCallback,  useState } from "react";
import Image from "next/image";
import Gpt from "@/public/assets/icons/gpt.png";
import Play from "@/public/assets/icons/play.svg";
import PlayCircle from "@/public/assets/icons/play_circle.svg";
import Yellow from "@/public/assets/icons/image 54.svg";
import BMW from "@/public/assets/icons/Content.png";

const Table = () => {
  const { data, columns, addRow, addColumn } =
    useTable();
  const [addedRow, setAddedRow] = useState(false);
  const totalRows = 16;

  const rows = Array.from({ length: totalRows }, (_, index) => data[index] || {});

  const handleAddColumn = useCallback(() => {
    const columnName = prompt("Enter column name:");
    if (columnName) {
      addColumn({
        key: columnName.toLowerCase().replace(/\s+/g, "_"),
        label: columnName,
        sortable: true,
      });
    }
  }, [addColumn]);

  const nonNullIdCount = data.filter((row) => row.id !== null).length;

  return (
    <div className="min-h-screen">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse ">
          <colgroup>
            {columns.map((c) => (
              <col className={`w-[${c.width || "auto"}]`} key={Math.random()} />
            ))}
            {columns.length > 5 && <col className="w-auto" />}
          </colgroup>
          <thead>
            <tr className="bg-gray-50">
              {columns.map((column, i) => (
                <th
                  key={i}
                  style={{ width: column.width || "auto" }}
                  className="px-2 py-2 text-left text-sm font-medium text-gray-600 border-b border-r border-gray-200 cursor-pointer w-1/4"
                >
                  <div className="flex items-center gap-2 justify-between">
                    <div className="flex items-center gap-2">
                      {i === 2 && (
                        <span className="bg-black w-5 h-5 rounded flex items-center justify-center text-xs text-white font-medium">
                          A
                        </span>
                      )}
                      {i === 3 && (
                        <Image src={Gpt} className="h-4 w-4" alt="gpt" />
                      )}
                      {i === 4 && <Yellow className="h-4 w-4" />}
                      <span className="truncate">{column.label}</span>
                    </div>
                    {i === 4 && <Play className="flex-shrink-0" />}
                  </div>
                </th>
              ))}
              <th className="px-2 py-2 text-left text-sm font-medium text-gray-600 border-b border-gray-200">
                <button
                  onClick={handleAddColumn}
                  className="flex items-center gap-1 text-gray-500 hover:text-gray-700"
                >
                  <Plus className="h-4 w-4" />
                  Add Column
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row: any, index: number) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="px-2 py-1.5 text-sm text-gray-600 border-r border-gray-200 truncate">
                  {row.id}
                </td>
                <td className="px-2 py-1.5 text-sm text-gray-600 border-r border-gray-200 text-center">
                  {row.timestamp && (
                    <PlayCircle className=" mx-auto cursor-pointer hover:text-blue-600" />
                  )}
                </td>
                <td className="px-2 py-1.5 text-sm text-gray-600 border-r border-gray-200 truncate">
                  {row.timestamp}
                  {nonNullIdCount === index && (
                    <button
                      onClick={() => {
                        addRow();
                        setAddedRow(true); // After click, set the state to true to hide the button for all subsequent rows
                      }}
                      className="flex items-center gap-2 rounded-md text-sm text-gray-600 hover:bg-gray-50"
                    >
                      <Plus className="h-4 w-4" />
                      Add Row
                    </button>
                  )}
                </td>
                <td className="px-2 py-1.5 text-sm text-gray-600 border-r border-gray-200">
                  <div className="flex items-center gap-1 truncate">
                    {row.status}
                  </div>
                </td>
                <td className="px-2 py-1.5 text-sm text-gray-600 border-r border-gray-200">
                  <div className="flex items-center gap-2 truncate">
                    <div className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center text-xs">
                      {row.companyInfo && (
                        <Image src={BMW} alt="bmw" className="h-4 w-4" />
                      )}
                    </div>
                    <span className="truncate">{row.companyInfo}</span>
                  </div>
                </td>
                <td className="px-2 py-1.5 text-sm text-gray-600">
                  {row.additionalInfo || ""}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
