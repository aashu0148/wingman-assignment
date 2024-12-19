"use client";

import { useEffect, useState } from "react";
import {
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
  Row,
  Column,
  SortingState,
  getFilteredRowModel,
  getSortedRowModel,
  getFacetedRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui/select";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@components/ui/button";
import ColumnHeader from "./ColumnHeader";

type DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  className?: string;
};

export default function DataTable<TData, TValue>({
  columns = [],
  data = [],
  className = "",
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [tableData, setTableData] = useState<{
    rows: TData[];
    columns: Column<any>[];
  }>({
    rows: data || [],
    columns: [],
  });

  const table = useReactTable({
    columns: tableData.columns,
    data: tableData.rows,
    state: { sorting },

    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    initialState: {
      sorting,
      pagination: {
        pageSize: 5,
      },
    },
  });

  const getColumnsData = (cols: Array<any>): Column<any>[] => {
    const newCols = cols.map((item) => {
      const obj = {
        ...item,
        header: item.headerRenderer
          ? item.headerRenderer
          : ({ column }: { column: any }) => (
              <ColumnHeader
                column={column}
                title={item.header || item.title}
                allowSort={item.allowSort || item.allowSort === undefined}
              />
            ),
        cell: item.cellRenderer
          ? item.cellRenderer
          : ({ row }: { row: Row<any> }) => {
              const value: any = row.getValue(item.key || item.accessorKey);

              return (
                <div
                  className={`flex items-center gap-1 ${
                    item.cellClassName || ""
                  }`}
                  style={{
                    minWidth: item.minWidth ? item.minWidth + "px" : "",
                    whiteSpace: item.noWrap ? "no-wrap" : "",
                  }}
                >
                  {typeof item.maxLength === "number" &&
                  typeof value === "string" &&
                  value.length > item.maxLength
                    ? value.slice(0, item.maxLength) + "..."
                    : (value as React.ReactNode)}
                </div>
              );
            },
        filterFn: item.allowFilter
          ? (row: Row<TData>, id: string, value: string | any) => {
              return value.includes(row.getValue(id));
            }
          : undefined,
        accessorKey: item.accessorKey || item.key,
        enableSorting: item.allowSort || item.allowSort === undefined,
      };

      return obj;
    });

    return newCols.filter((e) => e);
  };

  useEffect(() => {
    const colData = getColumnsData(columns);

    setTableData({
      rows: data,
      columns: colData,
    });
  }, [columns]);

  return (
    <div className={`${className} overflow-x-auto max-w-full`}>
      <Table className="min-w-[600px]">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableCell
                  key={header.id}
                  className="font-medium text-gray-500 p-4 bg-[#F9FAFB]"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              data-state={row.getIsSelected() && "selected"}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell
                  key={cell.id}
                  className="text-gray-600 text-sm sm:text-base px-4 py-4"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination Controls */}
      <div className="flex flex-wrap gap-2 items-center justify-between p-4">
        <div className="text-xs sm:text-sm text-gray-600">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </div>

        <div className="ml-auto flex items-center gap-4">
          <Select
            defaultValue={table.getState().pagination.pageSize + ""}
            onValueChange={(value) => table.setPageSize(parseInt(value))}
          >
            <SelectTrigger className="w-fit">
              <SelectValue placeholder="Select page size" />
            </SelectTrigger>
            <SelectContent>
              {[5, 10, 20, 30, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={pageSize + ""}>
                  {pageSize} per page
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="flex gap-2 items-center">
            <Button
              variant={"outline"}
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <ArrowLeft className="size-4" />
            </Button>
            <Button
              variant={"outline"}
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
