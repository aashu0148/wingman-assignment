import React from "react";
import Image from "next/image";

import DataTable from "@components/DataTable/DataTable";
import { getProducts } from "@apis/products";
import { getDateFormatted, getTimeFormatted } from "@lib/utils";
import { UpRightIcon } from "@lib/svgIcons";

async function Orders() {
  const products = await getProducts();

  const columns = [
    {
      key: "productDiv",
      header: "Product",
      allowSort: false,
    },
    {
      key: "date",
      header: "Date",
      allowSort: false,
    },
    {
      key: "price",
      header: "Price",
    },
    {
      key: "availabilityStatus",
      header: "Status",
    },
    {
      key: "actions",
      header: " ",
      allowSort: false,
    },
  ];

  const tableData = products.map((product: any) => ({
    ...product,
    productDiv: (
      <div className="flex items-center gap-3 w-[300px]">
        <div>
          <div className="w-10 h-10 rounded-lg overflow-hidden relative">
            <Image
              src={product.thumbnail}
              alt={product.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
        <span className="text-sm sm:text-base text-gray-900 text-ellipsis overflow-hidden whitespace-nowrap">
          {product.title}
        </span>
      </div>
    ),
    date: (
      <div className="flex flex-col gap-[2px]">
        <p className="text-sm sm:text-base">
          {getDateFormatted(product.meta?.updatedAt)}
        </p>
        <span className="text-xs">
          {getTimeFormatted(product.meta?.updatedAt)}
        </span>
      </div>
    ),
    actions: (
      <div className="text-gray-450 hover:text-gray-700 flex gap-2 items-center justify-end text-xs cursor-pointer w-fit">
        View Chart <UpRightIcon className="size-3" />
      </div>
    ),
  }));

  return (
    <div className="dw-[calc(100%-50px)] overflow-hidden bg-white rounded-lg border-[0.5px] drop-shadow-sm">
      <DataTable
        columns={columns}
        data={tableData}
        className="w-[300px] sm:w-full"
      />
    </div>
  );
}

export default Orders;
