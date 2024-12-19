import React, { useEffect, useRef } from "react";
import { ArrowUpDown, MoveDown, MoveUp } from "lucide-react";
import { Column } from "@tanstack/react-table";

interface ColumnHeaderProps<T> {
  column: Column<T>;
  title: string;
  allowSort?: boolean;
  updateWidth?: (columnId: string, width: number) => void;
}

function ColumnHeader<T>({
  column,
  title,
  allowSort = false,
  updateWidth,
}: ColumnHeaderProps<T>) {
  const headerRef = useRef<HTMLDivElement>(null);
  const dir = column.getIsSorted();

  useEffect(() => {
    const width =
      headerRef.current?.parentNode instanceof HTMLElement
        ? headerRef.current.parentNode.clientWidth
        : null;

    if (width && updateWidth) {
      updateWidth(column.id, width);
    }
  }, [column.id, updateWidth]);

  return (
    <div ref={headerRef} className={`col-${column.id} flex gap-2 items-center`}>
      <p className="text-sm font-medium text-gray-900">{title}</p>

      {allowSort && (
        <div
          className="cursor-pointer hover:bg-gray-100 rounded transition-colors"
          onClick={() =>
            dir === "desc"
              ? column.clearSorting()
              : column.toggleSorting(dir === "asc")
          }
        >
          {dir === "asc" ? (
            <MoveUp className="h-4 w-4" />
          ) : dir === "desc" ? (
            <MoveDown className="h-4 w-4" />
          ) : (
            <ArrowUpDown className="h-4 w-4" />
          )}
        </div>
      )}
    </div>
  );
}

export default ColumnHeader;
