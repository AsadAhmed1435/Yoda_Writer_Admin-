import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';


const StripedDataGrid = styled(DataGrid)(({ theme }) => ({      //strip data 
  '& .MuiDataGrid-row:nth-child(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const PackagesTable = () => {
const [orderData, setOrderData] = useState([
  {
    id: 0,
    name: 'Trial',
    monthly: '$0.00',
    yearly: '$0.00',
  },

  {
    id: 1,
    name: 'Basic',
    monthly: '$9.00',
    yearly: '$99.00',
  },

  {
    id: 2,
    name: 'Standard',
    monthly: '$29.00',
    yearly: '$299.00',
  },

  {
    id: 3,
    name: 'Professional',
    monthly: '$59.00',
    yearly: '$599.00',
  },

  // Add more rows as needed
]);
  const columns = [
   
    { field: 'name', headerName: 'Name', width: 185, renderCell: (params) => <strong>{params.value}</strong>  },
    { field: 'monthly', headerName: 'Monthly', width: 140 },
    { field: 'yearly', headerName: 'Yearly', width: 140 }
  ];
  return (
   <>

   {/* Packages */}

    <div className='flex flex-col flex-wrap items-start justify-center w-[100%] lg:w-[40%]  p-3 bg-[#F8F8F8] border rounded-lg overflow-hidden'>
	<div className='flex items-center justify-between w-full'>
	<h1 className='text-xl font-semibold'>Packages</h1>
	<h4 className='text-blue-500 font-semibold text-center '><Link to='/packages' className='hover:no-underline hover:text-blue-500'><span className='cursor-pointer'>View All</span></Link></h4>
	</div>

   {/* Table */}

	<div className='border overflow-x-auto w-full my-3'>
    <StripedDataGrid
            autoHeight
            autoWidth
            columns={columns}
            rows={orderData}
            disableSelectionOnClick={false}
            hideFooterPagination={true}
          />
    </div>
	
    </div>
   </>
  )
}

export default PackagesTable