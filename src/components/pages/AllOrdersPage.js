import React from 'react'
import { Container } from 'reactstrap'
import { MdKeyboardArrowLeft } from "react-icons/md";
import AllOrdersPageTables from '../tables/AllOrdersPageTables';
const AllOrdersPage = () => {
  return (
    <Container fluid className='ml-[2%] md:ml-[2%] w-[95%] sm:w-[96%] h-full  px-4 py-4 z-0 flex flex-col items-start bg-white rounded-3xl'>
            {/* Heading */}
            <div className='flex flex-col w-full py-3 pb-4 border-b sm:items-center sm:justify-between sm:flex-row'>
          <h2 className='text-2xl font-semibold'>All Orders</h2>
          <div className='flex items-center sm:flex-col md:flex-row gap-x-3'>
            <h4>Dashboard</h4>
            <h4 className='flex items-center'><MdKeyboardArrowLeft size={18} /><span className='ml-1 font-semibold'>All Orders</span></h4>
          </div>
        </div>

        {/*All Orders Table */}
        <div className='w-full mt-3'>
          <AllOrdersPageTables/>
        </div>
    </Container>
  )
}

export default AllOrdersPage