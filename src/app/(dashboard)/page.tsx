import React from "react";

import TopBar from "./TopBar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui/select";
import StatCard from "@components/StatCard/StatCard";

import Insights from "./Insights";
import Orders from "./Orders";
import { ChatIcon, CoinIcon, CoinsIcon, PiggyBankIcon } from "@lib/svgIcons";
import { Check, TagIcon } from "lucide-react";

function page() {
  const days = [
    {
      label: "7 days",
      value: 7,
    },
    {
      label: "14 days",
      value: 14,
    },
    {
      label: "30 days",
      value: 30,
    },
    {
      label: "90 days",
      value: 90,
    },
  ];

  return (
    <div className="flex flex-col sm:gap-8 gap-4">
      <TopBar />

      <div className="px-2 sm:px-8 sm:pb-8 pb-4">
        <div className="flex flex-col gap-8 sm:gap-14 sm:py-8 sm:px-6 py-4 px-3 border rounded-lg sm:rounded-3xl bg-white">
          <div className="flex flex-col gap-8">
            <div className="flex justify-between items-center">
              <h1 className="text-xl sm:text-3xl font-medium">At a glance</h1>
              <Select defaultValue="7">
                <SelectTrigger className="w-fit">
                  <SelectValue placeholder="Select days" />
                </SelectTrigger>
                <SelectContent>
                  {days.map((day) => (
                    <SelectItem key={day.value} value={day.value + ""}>
                      {day.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6">
              <StatCard
                icon={ChatIcon}
                label="CONSULTATIONS"
                value="24"
                changePercent={12}
              />
              <StatCard
                icon={TagIcon}
                label="ORDERS PLACED"
                value="12"
                changePercent={-15}
              />
              <StatCard
                icon={Check}
                label="CONVERSION"
                value="50%"
                changePercent={15}
              />
              <StatCard
                icon={CoinsIcon}
                label="TOTAL SALES VALUE"
                value="$2,400"
                changePercent={9}
              />
              <StatCard
                icon={CoinIcon}
                label="AVG ORDER VALUE"
                value="$240"
                changePercent={-4}
              />
              <StatCard
                icon={PiggyBankIcon}
                label="COMMISSION PAID"
                value="$240"
                changePercent={23}
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:gap-8">
            <h1 className="text-xl sm:text-3xl font-medium">Insights</h1>
            <Insights />
          </div>

          <div className="flex flex-col gap-4 sm:gap-8">
            <h1 className="text-xl sm:text-3xl font-medium">Orders</h1>
            <Orders />
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default page;
