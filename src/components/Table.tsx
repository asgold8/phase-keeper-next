import { ReactNode } from "react";

const Table = ({ children }: { children: ReactNode }) => {
  return <table className="min-w-full">{children}</table>;
};

export default Table;
