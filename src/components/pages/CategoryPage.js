import React from 'react'
import { Container } from 'reactstrap'
import CategoryPageTables from '../tables/CategoryPageTables'
import { MdKeyboardArrowLeft } from "react-icons/md";

const CategoryPage = () => {
  return (
    <Container fluid className='ml-[2%] md:ml-[2%] w-[95%] sm:w-[96%] h-full  px-4 py-3 z-0 flex flex-col items-start bg-white rounded-3xl '>
        
        {/* Heading */}
        <div className='flex flex-col w-full py-3 pb-4 border-b sm:items-center sm:justify-between sm:flex-row'>
          <h2 className='text-2xl font-semibold'>Category List</h2>
          <div className='flex items-center sm:flex-col md:flex-row gap-x-3'>
            <h4>Dashboard</h4>
            <h4 className='flex items-center'><MdKeyboardArrowLeft size={18} /><span className='ml-1 font-semibold'> Category List</span></h4>
          </div>
        </div>

        {/* Category Table */}
        <div className='w-full mt-3'>
        <CategoryPageTables/>
        </div>
        
    </Container>
  )
}

export default CategoryPage