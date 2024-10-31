import {React, useState, useEffect} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import { Container } from 'reactstrap';




const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
    '& .MuiDataGrid-row:nth-child(odd)': {
      backgroundColor: theme.palette.action.hover,
    },

  }));

const UserPackagesPageTables = () => {

  
    const [filterNumbers, setfilterNumbers] = useState([10,25,50,100]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedFilter, setSelectedFilter] = useState(10);
    const [iswidth, setIswidth] = useState(false)
    const [searchQuery, setSearchQuery] = useState('');
  
    const [userPackagesData, setUserPackagesData] = useState(       //Rows Data of Table
  [
    {
     id: 0,
     username: "Abrar Ahmed",
     package: "Professional",
     startDate: "2023-10-18",
     endDate: "2024-10-18",
     paymentStatus: "Paid",
     status: 'Active',
    },      
   // Add more rows as needed
 ]);
    const [filteredData, setFilteredData] = useState(userPackagesData);

    // Heading Columns
    const columns = [
    
      
        { field: 'username', headerName: 'User Name', flex: iswidth ? undefined : 1, 
        width: iswidth ? 150 : undefined},
        { field: 'package', headerName: 'Package Name', flex: iswidth ? undefined : 1, 
        width: iswidth ? 150 : undefined},
        { field: 'startDate', headerName: 'Start Date', flex: iswidth ? undefined : 1, 
        width: iswidth ? 150 : undefined},
        { field: 'endDate', headerName: 'End Date', flex: iswidth ? undefined : 1, 
        width: iswidth ? 150 : undefined},
        { field: 'paymentStatus', headerName: 'Payment Status', flex: iswidth ? undefined : 1, 
        width: iswidth ? 150 : undefined, renderCell: (params) => <span className={`${params.value === "Deactive" || params.value === "Pending" || params.value === "Bank Pending" || params.value === "Cancelled" || params.value === "Pending" ? 'bg-red-200 border-red-200 text-red-500' : params.value === "Paid" || params.value === "Active" ?   'bg-green-100 border-green-100 text-green-500' : ''} rounded-lg px-4 py-1 `}>{params.value}</span> }, //For Bg color changing when pending and active},
        { field: 'status', headerName: 'Status', flex: iswidth ? undefined : 1, 
        width: iswidth ? 150 : undefined,  renderCell: (params) => <span className={`${params.value === "Deactive" || params.value === "Pending" || params.value === "Bank Pending" || params.value === "Cancelled" || params.value === "Pending" ? 'bg-red-200 border-red-200 text-red-500' : params.value === "Paid" || params.value === "Active" ?   'bg-green-100 border-green-100 text-green-500' : ''} rounded-lg px-4 py-1 `}>{params.value}</span> }, //For Bg color changing when pending and active},
       
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

    const searchResults = userPackagesData.filter((item) =>
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

 
   

  return (

    <Container fluid className='flex flex-col items-center justify-center w-full px-4 py-1 bg-[#F8F8F8] overflow-hidden border rounded-lg'>

   

    {/* table Container*/}
    <div className='flex flex-col w-full py-2 my-3 bg-[#F8F8F8] overflow-x-auto gap-y-2'>

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
        <div className='flex items-center justify-center w-full '>

        <div className='border overflow-x-auto w-[95%] my-3 px-3 bg-white '>
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
            <h6>{`Showing ${startIndex + 1} to ${endIndex > userPackagesData.length ? userPackagesData.length : endIndex} of ${userPackagesData.length} entries`}</h6>

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


    
  </Container>
  )
}

export default UserPackagesPageTables;