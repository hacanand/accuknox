 
import React from 'react'
import { Input } from "@/components/ui/input";

import { BreadcrumbWithCustomSeparator } from './breadcrumbItem'
import { BellIcon, User } from 'lucide-react';
type Props = {}
const SearchHeader = (props: Props) => {
  return (
    <div className="flex items-center justify-between px-10 p-4 ">
      <div className="">
        <BreadcrumbWithCustomSeparator />
      </div>
      <div className="flex items-center space-x-4">
        <Input
          type="text"
          placeholder="search anything"
          className=" placeholder:text-secondary-background "
        />
        <BellIcon className="w-6 h-6 text-primary-background cursor-pointer" />
        <User className="w-6 h-6 text-primary-background cursor-pointer" />
      </div>
    </div>
  );
}

export default SearchHeader