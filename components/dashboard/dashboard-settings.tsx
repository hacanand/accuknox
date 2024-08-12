import React from 'react'

type Props = {}
import { AddWidgetPopUp } from "@/components/dashboard/add-widget-popup";
import { Clock, EllipsisVertical, RefreshCcw } from "lucide-react";
const DashboardSettings = (props: Props) => {
  return (
    <div className="flex items-center justify-between ">
      <h1 className="font-bold">CNAPP Dashboard</h1>
      <div className="flex gap-4 items-center">
        <AddWidgetPopUp />
        <RefreshCcw className="w-6 h-6 text-primary-background cursor-pointer" />
        <EllipsisVertical className=" cursor-pointer" />
        <div className="flex items-center border-2 border-blue-500 bg-white p-2 rounded-md gap-1 text-blue-800">
          <Clock />
          <select
            name="menu"
            id="menu "
            className="outline-none border-l-2 border-blue-500 cursor-pointer "
          >
            <option value="menu">Last 2 days</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default DashboardSettings