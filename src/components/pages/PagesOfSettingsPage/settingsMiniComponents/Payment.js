import {React, useEffect, useState} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import { RiEditBoxFill } from "react-icons/ri";
import EditModalPayment from '../../../modal/EditModalPayment';



const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
    '& .MuiDataGrid-row:nth-child(odd)': {
      backgroundColor: theme.palette.action.hover,
    },

  }));

const Payment = () => {
    
    const [editedImage, setEditedImage] = useState('');
    const [filterNumbers, setfilterNumbers] = useState([10,25,50,100]);
    const [editedTitle, setEditedTitle] = useState('');
    const [editedMode, setEditedMode] = useState('');
    const [editedslug, setEditedslug] = useState('');
    const [editedStatus, setEditedStatus] = useState('Active');
    const [editedLanguage, setEditedLanguage] = useState([]);
    const [index, setIndex] = useState(-1)
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedFilter, setSelectedFilter] = useState(10);
    const [iswidth, setIswidth] = useState(false)
    const [searchQuery, setSearchQuery] = useState('');
    const [editModal, setEditModal] = useState(false);
    const [categoryData, setCategoryData] = useState(       //Rows Data of Table
  [
    {
     id: 0,
     sl: 1,
     image: 'https://www.signaturemaker.in/yodawriteai/assets/images/gateway-icon/paypal.png',
     title: 'Paypal',
     slug: "Paypal",
     mode: 'Sandbox',
     status: 'Active',
     action: '',
     langauge: 'English',
    }, 
    {
    id: 1,
    sl: 2,
    image: 'https://www.signaturemaker.in/yodawriteai/assets/images/gateway-icon/stripe.png',
    title: 'Stripe',
    slug: 'Stripe',
    mode: 'Live',
    status: 'Deactive',
    action: '',
    langauge: 'English',
    },   
   // Add more rows as needed
 ]);
    const [filteredData, setFilteredData] = useState(categoryData);

    // Heading Columns
   const columns = [
    
    
    { field: 'sl', headerName: 'SL', width: 50},
    { field: 'image', headerName: 'Image', width: 80 ,  
    renderCell: (params) => ( 
     <img src={params.value} alt="" className={`${params.value === '' ? 'hidden' : 'h-12 w-12 rounded-full'} `} />) },
    { field: 'title', headerName: 'Title', flex: iswidth ? undefined : 2, 
    width: iswidth ? 120 : undefined},
    { field: 'slug', headerName: 'Slug', flex: iswidth ? undefined : 1, 
    width: iswidth ? 60 : undefined},
    { field: 'status', headerName: 'Status', flex: iswidth ? undefined : 2, 
    width: iswidth ? 150 : undefined,  renderCell: (params) => <span className={`${params.value === "Active" ?  'bg-green-100 border-green-100 text-green-500' : 'bg-red-200 border-red-200 text-red-500'} rounded-lg px-4 py-1 `}>{params.value}</span> }, //For Bg color changing when pending and active},
    { field: 'mode', headerName: 'Mode', flex: iswidth ? undefined : 2, 
    width: iswidth ? 140 : undefined,  renderCell: (params) => <span className={`${params.value === "Sandbox" ? 'bg-orange-200 border-orange-200 text-orange-500' :params.value === "Live" ?  'bg-blue-100 border-blue-100 text-blue-500' : ''} rounded-lg px-4 py-1 `}>{params.value}</span> }, //For Bg color changing when pending and active},
    { field: 'action', headerName: 'Action', flex: iswidth ? undefined : 1, 
    width: iswidth ? 60 : undefined,
    renderCell: (params) => (
            <RiEditBoxFill size={20} onClick={() => toggleEditModal(params.row.id)}
              className="cursor-pointer"
            />
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
      item.title.toLowerCase().includes(query.toLowerCase())
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
  setEditedTitle(selectedCategory.title);
  setEditedMode(selectedCategory.mode);
  setEditedslug(selectedCategory.slug);
  setEditedImage(selectedCategory.image);
  setEditedStatus(selectedCategory.status);
  setEditedLanguage([selectedCategory.language]);
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

     // Create FormData object
     const formData = new FormData();
      
     // Append form data (other than image)
     formData.append('title', editedTitle);
     formData.append('status', editedStatus);
      
       // Update the selected row with the edited data
    const updatedRow = {
      ...selectedRow,
      title: editedTitle,
      mode: editedMode,
      slug: editedslug,
      status: editedStatus,
      language: editedLanguage,
      image: editedImage,
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
    setEditedTitle('');
    setEditedMode('');
    setEditedslug('');
    setEditModal(false);
    setEditedImage('');
    setEditedLanguage([]);
  };


    
  return (
    <>
    <div className='flex flex-col items-center justify-between w-full py-4 border-b sm:flex-row'>
        
    {/* Heading of Section */}
    <h2 className='text-xl font-semibold'>Gateway</h2>
    <button  className='hidden px-4 py-3 font-semibold text-white bg-blue-500 rounded-lg ' >Add Language</button>
    </div>
    {/* table Container*/}
    <div className='flex flex-col w-full py-2 my-3 overflow-x-auto bg-white border gap-y-2'>

        <form action="">
        <div className='text-sm flex flex-col lg:flex-row gap-y-2 lg:gap-y-0 items-center justify-between text-[#83878a] px-4 py-2 '>
        
        {/* nav */}
        <div className="flex gap-x-2 items-center">
        {/* Filter Option Field */}
        <span>Show</span>
        <select className='p-3 border rounded-lg' id="options" title="options"  onChange={handleChangeFilter}
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
              
        {/* <AddnEditModalTestimonialsPage button={'Update'} heading={'Edit'} isToggle={editModal} setIsToggle={setEditModal} handlerFunction={handleEdit} name={editedName} status={editedStatus} language={editedLanguage} setCategory={setEditedLanguage} setName={setEditedName} setImage={setEditedImage} image={editedImage} designation={editedDesignation} setDesignation={setEditedDesignation}  setStatus={setEditedStatus}/> */}
           <EditModalPayment button={'Update'} heading={'Edit'} isToggle={editModal} setIsToggle={setEditModal} mode={editedMode} setMode={setEditedMode} handlerFunction={handleEdit} name={editedTitle} status={editedStatus} language={editedLanguage} setCategory={setEditedLanguage} setName={setEditedTitle} setImage={setEditedImage} image={editedImage}  setStatus={setEditedStatus}/>
            </div>


    </>
  )
}

export default Payment