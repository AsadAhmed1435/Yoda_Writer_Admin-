import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';


const StripedDataGrid = styled(DataGrid)(({ theme }) => ({      //strip data 
  '& .MuiDataGrid-row:nth-child(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const OrderTable = () => {
  const [orderData, setOrderData] = useState([
    {
      id: 0,
      package: 'Basic',
      total:   '$9.90',
      gateway: 'Paypal',
      status: 'Pending',
    },
    // Add more rows as needed
  ]);

  const columns = [
   
    { field: 'package', headerName: 'Package', width: 200 },
    { field: 'total', headerName: 'Total', width: 160 },
    { field: 'gateway', headerName: 'Gateway', width: 160 },
    { field: 'status', headerName: 'Status', width: 160, renderCell: (params) => <span className={`${params.value === "Pending" ? 'bg-red-200 border-red-200 text-red-500' : 'bg-green-200 border-green-200 text-green-500'} rounded-lg px-3 py-1 `}>{params.value}</span> }, //For Bg color changing when pending and success
  ];

  return (
    <>
      {/* Orders */}
      <div className='flex flex-col flex-wrap items-start justify-center w-[100%] lg:w-[59%] p-3 bg-[#F8F8F8] border rounded-lg overflow-hidden'>
        <h1 className='text-xl font-semibold'>Orders</h1>
        {/* Table */}
        <div className='w-full my-3 overflow-x-auto border'>
          <StripedDataGrid
            autoHeight
            autoWidth
            columns={columns}
            rows={orderData}
            disableSelectionOnClick={false}
            hideFooterPagination={true}
          />
        </div>

        <div className='w-full'>
          <h4 className='font-semibold text-center text-blue-500'>
            <Link to='/allorders' className='hover:no-underline hover:text-blue-500'><span className='cursor-pointer'>View All</span></Link>
          </h4>
        </div>
      </div>
    </>
  );
};

export default OrderTable;
