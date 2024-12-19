"use client";

import React from "react";
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

import { ChatIcon, BarsIcon } from "@lib/svgIcons";
import { TrendingUp } from "lucide-react";

function Insights() {
  const weeklyData = [
    { day: "Mon", incoming: 25, answered: 20, experts: 6 },
    { day: "Tue", incoming: 42, answered: 31, experts: 9 },
    { day: "Wed", incoming: 36, answered: 30, experts: 8 },
    { day: "Thu", incoming: 55, answered: 45, experts: 12 },
    { day: "Fri", incoming: 48, answered: 38, experts: 10 },
    { day: "Sat", incoming: 42, answered: 34, experts: 6 },
    { day: "Sun", incoming: 45, answered: 36, experts: 8 },
  ];

  const comparisonData = [
    { period: "This week", consultations: 18, orders: 12 },
    { period: "Last week", consultations: 12, orders: 8 },
  ];

  return (
    <div className="flex flex-wrap sm:flex-nowrap gap-4 sm:gap-6">
      <div className="flex-grow w-[260px] flex flex-col gap-5  bg-white py-3 sm:py-6 rounded-lg sm:rounded-3xl border-[0.5px] drop-shadow-sm px-2">
        <div className="flex items-center gap-2 px-3 sm:px-6">
          <ChatIcon className="text-gray-500 size-3" />
          <p className="text-xs font-semibold leading-7 text-gray-500 uppercase tracking-wider">
            CONSULTATIONS
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="h-[300px] min-w-[450px] ">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                data={weeklyData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#F1F5F9"
                />
                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  dy={10}
                  tick={{ fill: "#94A3B8", fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  dx={-10}
                  tick={{ fill: "#94A3B8", fontSize: 12 }}
                  ticks={[10, 20, 30, 40, 50, 60]}
                  domain={[0, 60]}
                  yAxisId="left"
                  label={{
                    value: "CONSULTATIONS",
                    angle: -90,
                    position: "insideLeft",
                    style: {
                      textAnchor: "middle",
                      fill: "#94A3B8",
                      fontSize: 8,
                      opacity: 0.7,
                    },
                  }}
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  axisLine={false}
                  tickLine={false}
                  dx={10}
                  tick={{ fill: "#94A3B8", fontSize: 12 }}
                  domain={[0, 20]}
                  tickFormatter={() => "10"}
                  label={{
                    value: "EXPERTS ONLINE",
                    angle: -90,
                    position: "insideRight",
                    style: {
                      textAnchor: "middle",
                      fill: "#94A3B8",
                      fontSize: 8,
                      opacity: 0.7,
                    },
                  }}
                />
                <Bar
                  dataKey="experts"
                  fill="#FEF9C3"
                  yAxisId="right"
                  barSize={40}
                  radius={[4, 4, 0, 0]}
                />
                <Line
                  type="monotone"
                  dataKey="incoming"
                  stroke="#94A3B8"
                  strokeWidth={2}
                  dot={false}
                  strokeDasharray="5 5"
                  yAxisId="left"
                />
                <Line
                  type="monotone"
                  dataKey="answered"
                  stroke="#15B79E"
                  strokeWidth={2}
                  dot={false}
                  yAxisId="left"
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="h-[1px] border-t-[1px] mx-2 sm:mx-4" />

        <div className="flex items-center gap-2 sm:gap-6 mx-2 sm:mx-4">
          <div className="flex items-center gap-2">
            <div className="w-3 sm:w-4 h-1 rounded-sm bg-[#94A3B8]"></div>
            <span className="text-xs text-gray-600">Incoming</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 sm:w-4 h-1 rounded-sm bg-[#15B79E]"></div>
            <span className="text-xs text-gray-600">Answered</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 sm:w-4 h-1 rounded-sm bg-[#FEF9C3] "></div>
            <span className="text-xs text-gray-600">Experts online</span>
          </div>
        </div>
      </div>

      <div className="w-full sm:w-[260px] bg-white py-6 flex flex-col gap-5 rounded-lg sm:rounded-3xl border-[0.5px] drop-shadow-sm">
        <div className="flex items-center gap-2 px-6">
          <BarsIcon className="text-gray-500 size-3" />
          <p className="text-xs font-semibold leading-7 text-gray-500 uppercase tracking-wider">
            VS PAST PERIOD
          </p>
        </div>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={comparisonData}
              margin={{ top: 5, right: 30, left: 0, bottom: 25 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#F1F5F9"
                horizontalPoints={comparisonData.map((_, index) => index)}
              />
              <XAxis
                dataKey="period"
                axisLine={false}
                tickLine={false}
                interval={0}
                tick={{ fontSize: 12 }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
              />
              <Bar
                dataKey="consultations"
                fill="#CCFBEF"
                barSize={30}
                radius={[5, 5, 0, 0]}
              />
              <Bar
                dataKey="orders"
                fill="#115E59"
                barSize={30}
                radius={[5, 5, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="h-[1px] border-t-[1px] mx-2 sm:mx-4" />

        <div className="flex items-center gap-5 mx-2 sm:mx-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-1 rounded-sm bg-[#CCFBEF] "></div>
            <span className="text-xs text-gray-600">Consultations</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-1 rounded-sm bg-[#115E59] "></div>
            <span className="text-xs whitespace-nowrap text-gray-600">
              Orders closed
            </span>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-5  sm:w-[260px] relative bg-[#15B79E] p-6 rounded-lg sm:rounded-3xl text-white">
        <img
          className="absolute top-0 left-0 w-full h-[370px] object-none pointer-events-none"
          src="icons/pulse.svg"
          alt=" "
        />
        <div className="flex items-center gap-2">
          <ChatIcon className="text-primary-shade size-3" />
          <p className="text-xs font-semibold leading-7 text-primary-shade uppercase tracking-wider">
            FORECASTS
          </p>
        </div>
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-2 relative">
              <span className="text-5xl sm:text-[56px] font-medium">+15%</span>
              <TrendingUp className="size-9 absolute top-0 right-0" />
            </div>
            <p className="text-sm opacity-80 mt-2 pt-4 text-white">
              forecasted increase in your sales closed by the end of the current
              month
            </p>
          </div>
          <div>
            <div className="flex items-center gap-2 relative">
              <span className="text-5xl sm:text-[56px] font-medium">+20%</span>
              <TrendingUp className="size-9 absolute top-0 right-0" />
            </div>
            <p className=" text-white text-sm opacity-80 mt-2 pt-4">
              forecasted increase in consultations by the end of the current
              month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Insights;
