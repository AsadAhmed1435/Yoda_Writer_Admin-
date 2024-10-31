import React from 'react'
import { Container } from 'reactstrap'
import { MdKeyboardArrowLeft } from "react-icons/md";
import PackagesPageTables from '../tables/PackagesPageTables';

const PackagesPage = () => {
  return (
    <Container fluid className='ml-[2%] md:ml-[2%] w-[95%] sm:w-[96%] h-full  px-4 py-4 z-0 flex flex-col items-start bg-white rounded-3xl'>
        {/* Heading */}
        <div className='flex flex-col w-full py-3 pb-4 border-b sm:items-center sm:justify-between sm:flex-row'>
          <h2 className='text-2xl font-semibold'>All Packages</h2>
          <div className='flex flex-row md:items-center gap-x-3'>
            <h4>Dashboard</h4>
            <h4 className='flex items-center'><MdKeyboardArrowLeft size={18} /><span className='ml-1 font-semibold'>All Packages</span></h4>
          </div>
        </div>

        {/*Packages Table */}
        <div className='w-full mt-3'>
            <PackagesPageTables />
        </div>
    </Container>
  )
}

export default PackagesPage