import {React, useState, useEffect} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import { Container } from 'reactstrap';
import { FaEye } from "react-icons/fa";
import ShowDataAllOrders from '../modal/ShowDataAllOrders';



const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
    '& .MuiDataGrid-row:nth-child(odd)': {
      backgroundColor: theme.palette.action.hover,
    },

  }));

const AllOrdersPageTables = () => {
    const [index, setIndex] = useState(-1);
    const [selectedRowData, setSelectedRowData] = useState({});
    const [filterNumbers, setfilterNumbers] = useState([10,25,50,100]);
    const [filterbystatus, setfilterbystatus] = useState('All')
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedFilter, setSelectedFilter] = useState(10);
    const [iswidth, setIswidth] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [allOrderData, setAllOrderData] = useState(       //Rows Data of Table
  [
    {
     id: 0,
     sl: 1,
     package: 'Heading',
     image: 'https://www.signaturemaker.in/yodawriteai/storage/files/SubCategory/1679378809.png',
     action: '',
     amount: '$124',
     status: 'Bank Pending',
     transactionID: 'PAYID-Abrar',
     gateway: 'Paypal',
     date: '2023-03-22',
     
    },   
    {
     id:1,   
     sl: 2,
     package: 'Text Summary',
     action: '',
     amount: '$634',
     status: 'Paid',
     transactionID: 'PAYID-MQNJCKY70094234AS859554M',
     gateway: 'NayaPay',
     date: '2022-10-22',
    },   
    {
     id:2,  
     sl: 3,
     package: 'Content Improve',
     action: '',
     amount: '$244',
     status: 'Cancelled',
     transactionID: 'PAYID-ASDAS094234AS859554M',
     gateway: 'EasyPaisa',
     date: '2022-4-10',
   },
   {
     id:3,
     sl: 4,
     package: 'Creative Story',
     action: '',
     amount: '$194',
     status: 'Pending',
     transactionID: 'PAYID-HelloWorld4AS859554M',
     gateway: 'SadaPay',
     date: '2022-10-18',
   },
 
   // Add more rows as needed
 ]);
    const [filteredData, setFilteredData] = useState(allOrderData);

    // Heading Columns
   const columns = [
    
       { field: 'sl', headerName: 'SL', flex: iswidth ? undefined : 0, 
       width: iswidth ? 0 : undefined},
       { field: 'package', headerName: 'Package', flex: iswidth ? undefined : 1, 
       width: iswidth ? 150 : undefined},
       { field: 'amount', headerName: 'Amount', flex: iswidth ? undefined : 1, 
       width: iswidth ? 150 : undefined},
       { field: 'status', headerName: 'Status', flex: iswidth ? undefined : 1, 
       width: iswidth ? 150 : undefined,  renderCell: (params) => <span className={`${params.value === "Pending" || params.value === "Bank Pending" || params.value === "Cancelled" || params.value === "Pending" ? 'bg-red-200 border-red-200 text-red-500' : params.value === "Paid" ?  'bg-green-100 border-green-100 text-green-500' : ''} rounded-lg px-4 py-1 `}>{params.value}</span> }, //For Bg color changing when pending and active},
       { field: 'action', headerName: 'Action', flex: iswidth ? undefined : 1, 
       width: iswidth ? 150 : undefined,
         renderCell: (params) => (
         
            <FaEye size={15} onClick={() => toggleShowModal(params.row.id)} className="cursor-pointer"/>
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

    const searchResults = allOrderData.filter((item) =>
      item.package.toLowerCase().includes(query.toLowerCase())
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

  const filterDataByStatus = (status) => {
    if (status === 'All') {
      setFilteredData(allOrderData);
      setCurrentPage(1);
      return;
    }
  
    const filteredResults = allOrderData
      .filter((item) => item.status === status)
      .map((item, index) => ({ ...item, id: index })); // Add a unique id for each row
  
    setFilteredData(filteredResults);
    setCurrentPage(1);
  };
  
  
  // for Opening Modal and selecting row for Delete Modal
  const toggleShowModal = (selectedRow) => 
  {
    
    setIndex(selectedRow);
    setShowModal(true);  
    const selectedData = filteredData[selectedRow];
    setSelectedRowData(selectedData || {});
    
  }

  return (

    <Container fluid className='flex flex-col items-center justify-center  w-full bg-[#F8F8F8] px-4 py-1 border rounded-lg overflow-hidden'>

      {/* All Orders Component */}
    <div className='flex items-center text-[#808080] px-2 justify-start w-full py-3 border-b gap-x-6 sm:flex-row overflow-x-auto'>

    {/* TABLE filter Buttons */}
    <h2 onClick={() => {filterDataByStatus('All'); setfilterbystatus('All')}} className={`${filterbystatus === 'All' ? 'text-blue-500 bg-blue-100' : ''} p-2 px-3  cursor-pointer`}>All</h2>
    <h2 onClick={() => {filterDataByStatus('Paid'); setfilterbystatus('Paid')}} className={`${filterbystatus === 'Paid' ? 'text-blue-500 bg-blue-100' : ''} p-2 px-3  cursor-pointer`}>Paid</h2>
    <h2 onClick={() => {filterDataByStatus('Pending'); setfilterbystatus('Pending')}}  className={`${filterbystatus === 'Pending' ? 'text-blue-500 bg-blue-100' : ''} p-2 px-3  cursor-pointer`}>Pending</h2>
    <h2 onClick={() => {filterDataByStatus('Bank Pending'); setfilterbystatus('Bank Pending')}}  className={`${filterbystatus === 'Bank Pending' ? 'text-blue-500 bg-blue-100' : ''} p-2 px-3  cursor-pointer`}>Bank Pending</h2>
    <h2 onClick={() => {filterDataByStatus('Cancelled'); setfilterbystatus('Cancelled')}}  className={`${filterbystatus === 'Cancelled' ? 'text-blue-500 bg-blue-100' : ''} p-2 px-3  cursor-pointer`}>Cancelled</h2>
   
    </div>

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
        <div className='flex items-center justify-center w-full '>

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
            <h6>{`Showing ${startIndex + 1} to ${endIndex > allOrderData.length ? allOrderData.length : endIndex} of ${allOrderData.length} entries`}</h6>

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


    <ShowDataAllOrders isToggle={showModal} data={selectedRowData} setIsToggle={setShowModal} iswidth={iswidth}/>
  </Container>
  )
}

export default AllOrdersPageTables;