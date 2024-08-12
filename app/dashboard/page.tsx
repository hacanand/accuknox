import DashboardSettings from '@/components/dashboard/dashboard-settings';
import SearchHeader from '@/components/dashboard/search-header'

import React from 'react'
type Props = {}
const Page = (props: Props) => {
  return (
    <div className="">
      <div>
        <SearchHeader />
      </div>
      <div className="bg-slate-200 py-4 px-11">
       <DashboardSettings />
          <div className='px-1'>
              <h1>CSPM Executive Dashboard</h1>
              <div className='h-32 w-80 border bg-white rounded'>
                    <h2 className='px-4 pt-4 font-bold'>Dashboard</h2>
                    <p className=' px-4'>Dashboard is a visual representation of the most important information needed to achieve </p>
                </div>
          </div>
          </div>
    </div>
  );
}

export default Page