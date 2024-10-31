import {React, useState, useEffect} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import { Container } from 'reactstrap';
import { RiEditBoxFill } from "react-icons/ri";
import EditShowHideModal from '../../../modal/EditShowHideModal';
// import EditStatusModalUsersPage from '../modal/EditStatusModalUsersPage';



const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
    '& .MuiDataGrid-row:nth-child(odd)': {
      backgroundColor: theme.palette.action.hover,
    },

  }));

const ShowHide = () => {
   
    const [addedFlag, setAddedFlag] = useState('');
    const [editedFlag, setEditedFlag] = useState('');
    const [addedName, setAddedName] = useState('');
    const [addedRtl, setAddedRtl] = useState('');
    const [addedCode, setAddedCode] = useState('');
    const [addedStatus, setAddedStatus] = useState('');
    const [addedLanguage, setAddedLanguage] = useState([]);
    const [editedName, setEditedName] = useState('');
    const [editedRtl, setEditedRtl] = useState('');
    const [editedCode, setEditedCode] = useState('');
    const [editedStatus, setEditedStatus] = useState('Active');
    const [editedLanguage, setEditedLanguage] = useState([]);
    const [index, setIndex] = useState(-1)
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedFilter, setSelectedFilter] = useState(10);
    const [iswidth, setIswidth] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const [editModal, setEditModal] = useState(false);
    const [addModal, setAddModal] = useState(false)
    const [categoryData, setCategoryData] = useState(       //Rows Data of Table
  [
    {
     id:0,
     sl: 1,   
     name: 'Hero Section',
     status: 'Deactive',
     action: '',
    },   
    {
     id:1,
     sl: 2,   
     name: 'Brand Section',
     status: 'Active',
     action: '',
    },
    {
     id:2,
     sl: 3,   
     name: 'Generate Content Section',
     status: 'Active',
     action: '',
    },
    {
     id:3,
     sl: 4,   
     name: 'How it Works Section',
     status: 'Active',
     action: '',
    },
    {
     id:4,
     sl: 5,   
     name: 'Pricing Section',
     status: 'Deactive',
     action: '',
    },
    {
     id:5,
     sl: 6,   
     name: 'Testimonial Section',
     status: 'Active',
     action: '',
    },
    {
     id:6,
     sl: 7,   
     name: 'Faq Section',
     status: 'Active',
     action: '',
    },
    {
     id:7,
     sl: 8,   
     name: 'What Can Section',
     status: 'Active',
     action: '',
    },
    
 
   // Add more rows as needed
 ]);
    const [filteredData, setFilteredData] = useState(categoryData);

    // Heading Columns
   const columns = [
    
    
    { field: 'sl', headerName: 'SL', flex: iswidth ? undefined : 0, 
    width: iswidth ? 50 : undefined},
    { field: 'name', headerName: 'Name', flex: iswidth ? undefined : 2, 
    width: iswidth ? 180 : undefined, renderCell: (params) => ( 
        <span className='font-normal text-gray-600'>{params.value}</span>)},
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


  // for Opening Modal and selecting row for Delete Modal
  const toggleDeleteModal = (selectedRow) => 
    {
      setIndex(selectedRow);
      setDeleteModal(true);
    }

  // for Opening and selecting row for Edit Modal

const toggleEditModal = (selectedRow) => {
  
  const selectedCategory = categoryData.find((row) => row.id === selectedRow);
  // Set the state with the data of the selected row
  setIndex(selectedRow);
  setEditedName(selectedCategory.name);
  setEditedRtl(selectedCategory.rtl);
  setEditedCode(selectedCategory.code);
  setEditedFlag(selectedCategory.flag);
  setEditedStatus(selectedCategory.status);
  setEditedLanguage([selectedCategory.language]);
  setEditModal(true);
  
}
  

  // for Opening Modal for Add Modal
  const toggleAddModal = () =>
  {
    setAddModal(true);
  }


  // Handling Delete Row
  const handleDelete = () => {

    // Ensure a row is selected before attempting to delete
    if (index === -1) {
      // You can add some error handling
      return;
    }

    // Find the selected row
    
     // Update categoryData by removing the selected row
     setCategoryData((prevData) =>
       prevData.filter((row) => row.id !== index)
     );
    
     // Update filteredData by removing the selected row
     setFilteredData((prevData) =>
       prevData.filter((row) => row.id !== index)
     );
    
     // Clear the selected row after deletion
     setDeleteModal(false);
  };

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
     formData.append('name', editedName);
     formData.append('status', editedStatus);
      
       // Update the selected row with the edited data
    const updatedRow = {
      ...selectedRow,
      name: editedName,
      rtl: editedRtl,
      code: editedCode,
      status: editedStatus,
      language: editedLanguage,
      flag: editedFlag,
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
    setEditedName('');
    setEditedRtl('');
    setEditedCode('');
    setEditModal(false);
    setEditedFlag('');
    setEditedLanguage([]);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
  
    if (file) {
      const reader = new FileReader();
  
      reader.onloadend = () => {
        setEditedFlag(reader.result);
      };
  
      reader.readAsDataURL(file);
    }
  };
  
  const handleImageAdd = (e) => {
    const file = e.target.files[0];
  
    if (file) {
      const reader = new FileReader();
  
      reader.onloadend = () => {
        setAddedFlag(reader.result);
      };
  
      reader.readAsDataURL(file);
    }
  };
  // Handling Adding Row
  const handleAdd = (e) =>
  {
    e.preventDefault();

    // Ensure a row is selected before attempting to edit

     // Update the rows with the Added data
    const addedRow = {
      id: categoryData.length,
      sl: categoryData.length + 1,
      name: addedName,
      rtl: addedRtl,
      code: addedCode,
      status: addedStatus,
      language: addedLanguage,
      flag: addedFlag,
    };

     // Update categoryData by adding the new row
  setCategoryData((nextData) => [...nextData, addedRow]);

  // Update filteredData by adding the new row
  setFilteredData((nextData) => [...nextData, addedRow]);

    // Clear the edited data and close the edit modal
    setAddedName('');
    setAddedRtl('');
    setAddedCode('');
    setAddModal(false);
    setAddedLanguage([])
    setAddedFlag('')
  }
  


  return (
    <>
    <div className='flex flex-col items-center justify-between w-full py-4 border-b sm:flex-row'>
        
    {/* Heading of Section */}
    <h2 className='text-xl font-semibold'>Home Section Setting</h2>
    </div>
    {/* table Container*/}
    <div className='flex flex-col w-full py-2 my-3 overflow-x-auto bg-white border gap-y-2'>


        

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


       
        <EditShowHideModal heading={'Edit'} setIsToggle={setEditModal} isToggle={editModal} handlerFunction={handleEdit} status={editedStatus}  setStatus={setEditedStatus}/>
            </div>
            </>
  )
}

export default ShowHide;