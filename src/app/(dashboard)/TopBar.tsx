import { Tag } from "lucide-react";

import { PieChartIcon, ChatMessageIcon } from "@lib/svgIcons";

export default function TopBar() {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between border-b-[1px] p-2 sm:py-4 sm:px-6 bg-white">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2  p-1 rounded-full">
          <button
            className={`flex items-center gap-2 text-xs py-2 px-3 sm:px-4 sm:py-3 sm:text-lg font-medium rounded-full bg-[#CCFBEF] shadow-sm text-gray-900`}
          >
            <PieChartIcon className="size-4 sm:size-5" />
            Summary
          </button>
          <button
            className={`flex items-center gap-2 text-xs py-2 px-3 sm:px-4 sm:py-3 sm:text-lg font-medium rounded-full text-gray-450 hover:text-gray-700`}
          >
            <Tag className="size-4 sm:size-5 " />
            Sales
          </button>
          <button
            className={`flex items-center gap-2 text-xs py-2 px-3 sm:px-4 sm:py-3 sm:text-lg font-medium rounded-full text-gray-450 hover:text-gray-700`}
          >
            <ChatMessageIcon className="size-4 sm:size-5 " />
            Chats
          </button>
        </div>
      </div>
    </div>
  );
}
