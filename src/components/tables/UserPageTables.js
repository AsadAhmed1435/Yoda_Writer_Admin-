import {React, useState, useEffect} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import { Container } from 'reactstrap';
import { RiEditBoxFill } from "react-icons/ri";
import EditStatusModalUsersPage from '../modal/EditStatusModalUsersPage';



const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
    '& .MuiDataGrid-row:nth-child(odd)': {
      backgroundColor: theme.palette.action.hover,
    },

  }));

const UserPageTables = () => {
   
    const [editedStatus, setEditedStatus] = useState('Active');
    const [index, setIndex] = useState(-1)
    const [filterNumbers, setfilterNumbers] = useState([10,25,50,100]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedFilter, setSelectedFilter] = useState(10);
    const [iswidth, setIswidth] = useState(false)
    const [searchQuery, setSearchQuery] = useState('');
    const [editModal, setEditModal] = useState(false);
    const [categoryData, setCategoryData] = useState(       //Rows Data of Table
  [
    {
     id:0,
     sl: 1,   
     name: 'user m',
     email: 'user@gmail.com',
     status: 'Deactive',
     action: '',
    },   
    {
     id:1,
     sl: 2,   
     name: 'Ipyana Mwakyoma',
     email: 'abrarahmed@helloworld.com',
     status: 'Active',
     action: '',
    },   
 
   // Add more rows as needed
 ]);
    const [filteredData, setFilteredData] = useState(categoryData);

    // Heading Columns
   const columns = [
    
    
    { field: 'sl', headerName: 'SL', flex: iswidth ? undefined : 0, 
    width: iswidth ? 0 : undefined},
    { field: 'name', headerName: 'Name', flex: iswidth ? undefined : 1, 
    width: iswidth ? 150 : undefined, renderCell: (params) => ( 
        <span className='font-semibold text-gray-900'>{params.value}</span>)},
    { field: 'email', headerName: 'Email', flex: iswidth ? undefined : 1, 
    width: iswidth ? 150 : undefined},
    { field: 'status', headerName: 'Status', flex: iswidth ? undefined : 1, 
    width: iswidth ? 150 : undefined,  renderCell: (params) => <span className={`${params.value === "Deactive" ? 'bg-red-200 border-red-200 text-red-500' :params.value === "Active" ?  'bg-green-100 border-green-100 text-green-500' : ''} rounded-lg px-4 py-1 `}>{params.value}</span> }, //For Bg color changing when pending and active},
    { field: 'action', headerName: 'Action', flex: iswidth ? undefined : 1, 
    width: iswidth ? 100 : undefined,
       renderCell: (params) => (
          <div className="flex space-x-2">
            <RiEditBoxFill size={20} onClick={() => toggleEditModal(params.row.id)}
              className="cursor-pointer"
            />
          </div>
        ),
       },
   ];

   // Calculate the total number of pages
  const totalPages = Math.ceil(filteredData.length / selectedFilter);
   

  // Filter Data Function
  const handleChangeFilter = (event) => {  
    setSelectedFilter(Number(event.target.value));
    setCurrentPage(1); //reseting the Page if filtered is clicked
  };


  
   // Search Data Function
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const searchResults = categoryData.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(searchResults);
    setCurrentPage(1); // Resetting the Page when search is performed
  };


   // Calculating the starting index and ending index for the current page
  const startIndex = (currentPage - 1) * selectedFilter;
  const endIndex = Math.min(currentPage * selectedFilter, filteredData.length);
  
  // Current page rows using filtered data
  const currentPageRows = filteredData.slice(startIndex, endIndex);

   // Handler for changing the current page
   const handlePageChange = (page) => {
     setCurrentPage(page);
   };


   //Showing or Hiding Specific Colums on Specific Breakpoints 
   useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <900)
      {
        setIswidth(true);
      }
      else if (window.innerWidth > 900)
      {
        setIswidth(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  // for Opening and selecting row for Edit Modal

const toggleEditModal = (selectedRow) => {
  
  const selectedCategory = categoryData.find((row) => row.id === selectedRow);
  // Set the state with the data of the selected row
  setIndex(selectedRow);
  setEditedStatus(selectedCategory.status);
  setEditModal(true);
  
}
  


  // Handling Editing Row
  const handleEdit = (e) => {
    e.preventDefault();

    // Ensure a row is selected before attempting to edit
    if (index === -1) {
      // You can add some error handling
      return;
    }

    // Find the selected row
    const selectedRow = categoryData.find((row) => row.id === index);
      
       // Update the selected row with the edited data
    const updatedRow = {
      ...selectedRow,
      status: editedStatus,
    };

    // Update categoryData by replacing the selected row
    setCategoryData((prevData) =>
      prevData.map((row) => (row.id === index ? updatedRow : row))
    );

    // Update filteredData by replacing the selected row
    setFilteredData((prevData) =>
      prevData.map((row) => (row.id === index ? updatedRow : row))
    );

    // Clear the edited data and close the edit modal
    setEditedStatus('');
    setEditModal(false);
  };



  


  return (

    <Container fluid className='flex flex-col items-center justify-center  w-full bg-[#F8F8F8] px-4 py-1 border rounded-lg overflow-hidden'>

      {/* CateGory Component */}
   

    {/* table Container*/}
    <div className='flex flex-col w-full py-2 my-3 overflow-x-auto bg-white border gap-y-2'>

        <form action="">
        <div className='text-sm flex flex-col lg:flex-row gap-y-2 lg:gap-y-0 items-center justify-between text-[#83878a] px-4 py-2 '>
        
        {/* nav */}
        <div className="flex gap-x-2 items-center">
        {/* Filter Option Field */}
        <span>Show</span>
        <select className='p-3 border rounded-lg' id="options" name="options"  onChange={handleChangeFilter}
                value={selectedFilter}>
        {filterNumbers.map((number) => (
            <option key={number} value={number}>
                {number}
              </option>
            ))}
        </select>
        <span>entries</span>
        </div>
        
        {/* Search Field */}
        <div><span>Search: </span><input value={searchQuery}
            onChange={handleSearchChange} className='border py-3 px-4 focus:outline-blue-400 w-[100%] sm:w-auto' type="text" /></div>
        </div>
        </form>
        

        {/* Table */}
        <div className='flex items-center justify-center w-full'>

        <div className='border overflow-x-auto w-[95%] my-3 px-3  '>
        <StripedDataGrid
            autoHeight
            autoWidth
            columns={columns}
            rows={currentPageRows}
            disableSelectionOnClick={false}
            hideFooterPagination={true}
            />
        </div>
        </div>


        {/* footer for next page */}
        <div className='px-4 text-sm text-[#83878a] flex justify-between items-center pb-2'>
            <h6>{`Showing ${startIndex + 1} to ${endIndex > categoryData.length ? categoryData.length : endIndex} of ${categoryData.length} entries`}</h6>

          {/* next page btns */}
        <div className='flex items-center gap-x-2'>
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index + 1}
                className={`font-semibold py-1 px-2 rounded-lg  ${
                  currentPage === index + 1 ? 'bg-blue-500 text-white' : ''
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
        </div>
        </div>

            </div>


    <EditStatusModalUsersPage heading='Edit' button='Upload' isToggle={editModal} setIsToggle={setEditModal} handlerFunction={handleEdit} status={editedStatus} setStatus={setEditedStatus} />
  </Container>
  )
}

export default UserPageTables;