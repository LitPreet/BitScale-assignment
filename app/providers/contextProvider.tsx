"use client";
import { Loader, SquareArrowOutUpRight, TriangleAlert } from "lucide-react";
import { createContext, ReactNode, useContext, useReducer } from "react";
import Gpt from "@/public/assets/icons/gpt.png";
import Play from "@/public/assets/icons/play.svg";
import Yellow from "@/public/assets/icons/image 54.svg";
import { StaticImageData } from "next/image";

export interface DataRow {
  id: number | null;
  timestamp: string;
  status: string | ReactNode;
  companyInfo: string;
  [key: string]: any;
}

export interface Column {
  key: string;
  label: string;
  icon?: StaticImageData;
  icon2?: StaticImageData;
  sortable?: boolean;
  width?: string;
}
interface TableState {
  data: DataRow[];
  columns: Column[];
}

type TableAction =
  | { type: "SET_DATA"; payload: DataRow[] }
  | { type: "ADD_ROW" }
  | { type: "ADD_COLUMN"; payload: Column }
  | { type: "REMOVE_COLUMN"; payload: string }
  | { type: "SORT_DATA"; payload: { key: string; direction: "asc" | "desc" } };

interface TableContextType extends TableState {
  setData: (data: DataRow[]) => void;
  addRow: () => void;
  addColumn: (column: Column) => void;
  removeColumn: (key: string) => void;
  sortData: (key: string, direction: "asc" | "desc") => void;
}

const initialState: TableState = {
  data: [
    {
      id: 1,
      timestamp: "Oct 12, 2024 at 14:08 PM",
      status: (
        <>
          <Loader className="h-4 w-4" /> Loading data, Please wait
        </>
      ),
      companyInfo: "Apple Evaluation - Account r...",
    },
    {
      id: 2,
      timestamp: "Oct 12, 2024 at 14:08 PM",
      status: (
        <>
          <TriangleAlert className="text-red-500 w-4 h-4" />
          cell data size exceeds limit
        </>
      ),
      companyInfo: "BMW Evaluation - Relevancy check",
    },
    {
      id: 3,
      timestamp: "Oct 12, 2024 at 14:08 PM",
      status: (
        <>
          <SquareArrowOutUpRight className="text-blue-600 h-4 w-4" />
          https://www.linkedin.com/bitS...
        </>
      ),
      companyInfo: "Google Evaluation - Lievancy check",
    },
    ...Array.from({ length: 12 }, () => ({
      id: null,
      timestamp: "",
      status: <></>,
      companyInfo: "",
    })),
  ],
  columns: [
    { key: "id", label: "ID", sortable: true, width: "2%" },
    { key: "io", label: "", sortable: true, width: "2%" },
    { key: "timestamp", label: "Input Column", sortable: true, width: "8%" },
    {
      key: "status",
      label: "Action Column",
      icon: Gpt,
      sortable: true,
      width: "20%",
    },
    {
      key: "companyInfo",
      label: "Enrich Company",
      icon: Yellow,
      icon2: Play,
      sortable: true,
      width: "20%",
    },
  ],
};

const TableContext = createContext<TableContextType | undefined>(undefined);

function tableReducer(state: TableState, action: TableAction): TableState {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "ADD_ROW":
      const updatedData = [...state.data];
      const firstNullIdIndex = updatedData.findIndex((row) => row.id === null);

      if (firstNullIdIndex !== -1) {
        updatedData[firstNullIdIndex] = {
          id: firstNullIdIndex + 1,
          timestamp: new Date().toLocaleString(),
          status: "New Entry",
          companyInfo: "New Company",
        };
      } else {
        updatedData.push({
          id: state.data.length + 1,
          timestamp: new Date().toLocaleString(),
          status: "New Entry",
          companyInfo: "New Company",
        });
      }

      return {
        ...state,
        data: updatedData,
      };
    case "ADD_COLUMN":
      return {
        ...state,
        columns: [...state.columns, action.payload],
      };
    case "REMOVE_COLUMN":
      return {
        ...state,
        columns: state.columns.filter((col) => col.key !== action.payload),
      };
    default:
      return state;
  }
}

export function TableProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(tableReducer, initialState);

  const value = {
    ...state,
    setData: (data: DataRow[]) => dispatch({ type: "SET_DATA", payload: data }),
    addRow: () => dispatch({ type: "ADD_ROW" }),
    addColumn: (column: Column) =>
      dispatch({ type: "ADD_COLUMN", payload: column }),
    removeColumn: (key: string) =>
      dispatch({ type: "REMOVE_COLUMN", payload: key }),
    sortData: (key: string, direction: "asc" | "desc") =>
      dispatch({ type: "SORT_DATA", payload: { key, direction } }),
  };

  return <TableContext.Provider value={value}>{children}</TableContext.Provider>;
}

export function useTable() {
  const context = useContext(TableContext);
  if (context === undefined) {
    throw new Error("useTable must be used within a TableProvider");
  }
  return context;
}
