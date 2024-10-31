import {React, useState, useEffect} from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';

const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
    '& .MuiDataGrid-row:nth-child(odd)': {
      backgroundColor: theme.palette.action.hover,
    },

  }));
  
const ShowDataAllOrders = ({  setIsToggle, isToggle, data, iswidth }) => {
    const cross = () => setIsToggle(false);
    
     // Heading Columns
   const columns = [
    
    { field: 'date', headerName: 'Date', flex: iswidth ? undefined : 1, 
    width: iswidth ? 150 : undefined},
    { field: 'gateway', headerName: 'Gateway', flex: iswidth ? undefined : 1, 
    width: iswidth ? 150 : undefined},
    { field: 'transactionID', headerName: 'Transaction ID', flex: iswidth ? undefined : 3, 
    width: iswidth ? 300 : undefined},
    { field: 'amount', headerName: 'Amount', flex: iswidth ? undefined : 1, 
    width: iswidth ? 150 : undefined},
];
    console.log(data.id)
  return (
 <Modal size='lg' isOpen={isToggle} className='p-2 rounded-4'>
    <ModalHeader  className='flex items-center font-serif text-white '><Button onClick={cross} className='flex items-center bg-blue-500 border-0 gap-x-2'><FaLongArrowAltLeft size={13}/><span>Back</span></Button></ModalHeader>
    <ModalBody className='p-2 ml-2'>
    {data ? ( // Check if data is defined
          <div className='flex items-center justify-between p-2'>
            <h1 className='text-2xl font-semibold'>Transaction Details</h1>
            {data.status && ( // Check if status is defined
              <div className='px-3 py-2 text-blue-500 bg-blue-100'>{data.status}</div>
            )}
          </div>
        ) : (
          <p>Loading...</p>
        )}

        
         {/* Table */}
        <div className='flex items-center justify-center w-full '>

        <div className='border overflow-x-auto w-[95%] my-3 px-3  '>
        <StripedDataGrid
            autoHeight
            autoWidth
            columns={columns}
            rows={[data]}
            disableSelectionOnClick={false}
            hideFooterPagination={true}
            getRowId={(row) => row.id}
            />
        </div>
        </div></ModalBody>
    
</Modal>
  )
}

export default ShowDataAllOrders