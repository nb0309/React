import React from "react";
import { useTable, Column } from "react-table";
import { Module3Data } from "../types/Module3Types";

interface Module3ListProps {
  data?: Module3Data[]; // ✅ Make data optional to prevent undefined crash
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const Module3List: React.FC<Module3ListProps> = ({
  data = [], // ✅ Fallback to empty array
  onEdit,
  onDelete,
}) => {
  const columns = React.useMemo<Column<Module3Data>[]>(
    () => [
      {
        Header: "School Name",
        accessor: "SchoolName",
      },
      {
        Header: "School Address",
        accessor: "SchoolAddress",
      },
      {
        Header: "School Year",
        accessor: "SY",
      },
      {
        Header: "Section Name",
        accessor: "SectionName",
      },
      {
        Header: "Actions",
        Cell: ({ row }: { row: any }) => (
          <div>
            <button onClick={() => onEdit(row.original.id)}>Edit</button>
            <button onClick={() => onDelete(row.original.id)}>Delete</button>
          </div>
        ),
      },
    ],
    [onEdit, onDelete]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<Module3Data>({ columns, data });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()} key={column.id}>
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} key={row.id}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()} key={cell.column.id}>
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Module3List;
