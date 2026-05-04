import { ReactNode } from "react";

const TableContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col w-full h-full max-w-full rounded-md border-4 border-blue-700 overflow-hidden">
      {children}
    </div>
  );
};

export default TableContainer;
