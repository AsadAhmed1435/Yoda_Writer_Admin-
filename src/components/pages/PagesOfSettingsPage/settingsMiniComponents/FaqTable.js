import {React, useEffect, useState} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import { MdDeleteForever } from "react-icons/md";
import { RiEditBoxFill } from "react-icons/ri";
import AddnEditModalBrand from '../../../modal/AddnEditModalBrand';
import DeleteModalCategory from '../../../modal/DeleteModalCategory';
import AddnEditModalFAQ from '../../../modal/AddnEditModalFAQ';



const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
    '& .MuiDataGrid-row:nth-child(odd)': {
      backgroundColor: theme.palette.action.hover,
    },

  }));

const FaqTable = () => {
    
    const [addedAnswer, setAddedAnswer] = useState('');
    const [editedAnswer, setEditedAnswer] = useState('');
    const [addedQuestion, setAddedQuestion] = useState('');
    const [addedStatus, setAddedStatus] = useState('');
    const [filterNumbers, setfilterNumbers] = useState([10,25,50,100]);
    const [addedLanguage, setAddedLanguage] = useState([]);
    const [editedQuestion, setEditedQuestion] = useState('');
    const [editedStatus, setEditedStatus] = useState('Active');
    const [editedLanguage, setEditedLanguage] = useState([]);
    const [index, setIndex] = useState(-1)
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedFilter, setSelectedFilter] = useState(10);
    const [iswidth, setIswidth] = useState(false)
    const [searchQuery, setSearchQuery] = useState('');
    const [deleteModal, setDeleteModal] = useState(false)
    const [editModal, setEditModal] = useState(false);
    const [addModal, setAddModal] = useState(false)
    const [categoryData, setCategoryData] = useState(       //Rows Data of Table
  [
    {
     id: 0,
     sl: 1,
     question: 'What is YodaWriteAI?',
     answer: "YodaWriteAI is the world's best AI writing platform for creating SEO-optimized content that increases organic traffic to your website on Google. By strategically placing keywords, internal links, and external links in your generated content, you can increase traffic, sales, and revenue 10x.",
     status: 'Active',
     action: '',
    },
    {
      id: 1,
      sl: 2,
      question: 'Is YodaWriteAI free?',
      answer: "That's right. YodaWriteAI offers a free trial of 10000 Premium words which is sufficient to give this AI platform a try. As with other platforms like Jasper (Jarvis), no credit card is required for this free trial. It is possible to switch from GPT-4 to GPT-3.5 anytime and experience any quality you desire. Our customer support can provide you with more free words if you are a large business, agency or enterprise.<br /><br />If you don't like our AI writing platform after enjoying a free trial, you will receive a full refund within one week of subscribing.<br /><br />Try YodaWriteAI free trial and experience our AI writing capabilities for yourself.",
      status: 'Active',
      action: '',
     },
     {
      id: 2,
      sl: 3,
      question: 'Which languages does yodawriteai support?',
      answer: "We support 24 languages other than English at the moment.<br /><br />?Here's a list of currently supported languages:??? English<br />?? French<br />?? Spanish<br />?? Italian<br />?? German<br />?? Polish<br />?? Portuguese<br />?? Dutch<br />?? Japanese<br />?? Russian<br />?? Chinese<br />?? Bulgarian<br />?? Czech<br />?? Danish<br />?? Greek<br />?? Hungarian<br />?? Lithuanian<br />?? Latvian<br />?? Romanian<br />?? Slovak<br />?? Slovenian<br />?? Swedish<br />?? Finnish<br />?? Estonian<br /><br /><br />If you would like us to support any other language, please reach out to us at support@yodawriteai.com.",
      status: 'Active',
      action: '',
     },
     {
      id: 3,
      sl: 4,
      question: 'Do I have to sign a long-term contract?',
      answer: 'Nope, if you are on a monthly paid plan, you may cancel at anytime. We will consider refund requests for annual paid plans on a case-by-case basis, and you can make requests through our customer support team. Therefore, you do not need to sign long-term contracts.',
      status: 'Active',
      action: '',
     },
     {
      id: 4,
      sl: 5,
      question: 'Who owns the generated copy?',
      answer: 'yodawriteai?s AI is trained on billions of parameters (almost 10% of the internet). The AI has learned the nuances of grammar, spelling, and style to generate completely original content. Hence, 99% of the time, the content that is generated is completely unique and plagiarism free.',
      status: 'Active',
      action: '',
     },
     {
      id: 5,
      sl: 6,
      question: 'Who can use yodawrite?',
      answer: 'Basically, yodawrite is for anyone who wants to create content, whether they are marketers, entrepreneurs, agencies, or students. You do not need to be a professional writer to use yodawrite.<br /><br />The AI-generated, SEO-optimized content produced by yodawrite is used by thousands of professional writers as well since it helps them brainstorm new ideas, saves them time, increases their productivity, and therefore generates more revenue.',
      status: 'Active',
      action: '',
     },
     {
      id: 6,
      sl: 7,
      question: 'Which templates and features does yodawrite offer?',
      answer: 'There are a number of templates and features in yodawrite that make it one of the best and most unique AI writing platforms:<br /><br />1. Produce SEO-optimized long-form content like blogs, essays, and articles.<br /><br />2. Paraphrasing tool (also called Paraphraser or Rewording tool) allows you to rephrase any sentence, paragraph, or even entire article instantly. In this way, it can also be used as a sentence rewriter, paragraph rewriter, and article rewriter.<br /><br />3. Generate conversion optimized PPC (Pay-per-click) ads for Google, Facebook, Instagram, Twitter, Linkedin, etc. Aside from ad copy generators, social media content generators such as Instagram<br /><br />4. Templates such as resume templates, cover letter templates, resignation letter templates, invoice templates, meme templates, business plan templates, and various other useful templates are available as well.<br />',
      status: 'Active',
      action: '',
     },
     {
      id: 7,
      sl: 8,
      question: 'How does yodawriteai differ from other content writing tools?',
      answer: 'yodawriteai uses advanced AI algorithms to analyze your input and generate unique, engaging text. It also has a built-in copyright generator feature that can help you avoid plagiarism.',
      status: 'Active',
      action: '',
     },
     {
      id: 8,
      sl: 9,
      question: 'What are the benefits of using yodawriteai?',
      answer: 'Some benefits of using yodawriteai include saving time, improving the quality of your writing, reducing the stress of writing, and avoiding plagiarism.',
      status: 'Active',
      action: '',
     },
     {
      id: 9,
      sl: 10,
      question: 'What integrations does yodawriteai offer?',
      answer: 'yodawriteai currently provides the following integrations:<br /><br />1. <b>WordPress.com:</b> Publish content generated using yodawriteai AI Article Writer or Sonic Editor directly to your WordPress.com site.<br />2. <b>Wordpress.org:</b> Directly publish Writesonic generated articles and blogs to your WordPress.org site.<br />3. <b>Zapier:</b> Publish content generated by Writesonic to over 5000 apps.<br />4. Surfer SEO:</b> Rank on the first page of Google by optimizing your long-form content with the most relevant keywords.<br />5. <b>Semrush:</b> Generate SEO-optimized product descriptions, blog ideas, blog introductions, blog outlines, and more based on the best matching keywords for your product.<br />6. <b>Chrome extension:</b> yodawriteai for chrome offers AI-driven editing tools to generate new content and improve existing content on Google Docs, Gmail, Twitter, Linkedin, Facebook, Medium.com, and virtually anywhere else you write online.',
      status: 'Active',
      action: '',
     },
     {
        id: 10,
        sl: 11,
        question: 'Did yodawriteai build a ChatGPT tool?',
        answer: 'Meanwhile, when ChatGPT was blowing up the internet, yodawriteai developed a ChatGPT lookalike yodawriteai that beats all the limitations of ChatGPT and has 4x more capabilities in comparison. yodawriteai was the first in the conversational AI chatbot market to build something like ChatGPT but with more superpowers. yodawriteai is an AI-powered chatbot platform that combines natural language processing and voice commands with data, images, and real-time search.',
        status: 'Active',
        action: '',
       },
   // Add more rows as needed
 ]);
    const [filteredData, setFilteredData] = useState(categoryData);

    // Heading Columns
   const columns = [
    
    
    { field: 'sl', headerName: 'SL', width: 70},
    { field: 'question', headerName: 'Question', flex: iswidth ? undefined : 2, 
    width: iswidth ? 200 : undefined},
    { field: 'answer', headerName: 'Answer', flex: iswidth ? undefined : 2, 
    width: iswidth ? 200 : undefined},
    { field: 'status', headerName: 'Status', flex: iswidth ? undefined : 1, 
    width: iswidth ? 150 : undefined,  renderCell: (params) => <span className={`${params.value === "Active" ?  'bg-green-100 border-green-100 text-green-500' : 'bg-red-200 border-red-200 text-red-500'} rounded-lg px-4 py-1 `}>{params.value}</span> }, //For Bg color changing when pending and active},
    { field: 'action', headerName: 'Action', flex: iswidth ? undefined : 1, 
    width: iswidth ? 120 : undefined,
    renderCell: (params) => (
          <div className="flex items-center space-x-2">
            <RiEditBoxFill size={20} onClick={() => toggleEditModal(params.row.id)}
              className="cursor-pointer"
            />
            <MdDeleteForever size={20} onClick={() => toggleDeleteModal(params.row.id)}
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
      item.question.toLowerCase().includes(query.toLowerCase())
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
  setEditedQuestion(selectedCategory.question);
  setEditedAnswer(selectedCategory.answer);
  setEditedStatus(selectedCategory.status);
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

       // Update the selected row with the edited data
    const updatedRow = {
      ...selectedRow,
      question: editedQuestion,
      status: editedStatus,
      language: editedLanguage,
      answer: editedAnswer,
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
    setEditedQuestion('');
    setEditModal(false);
    setEditedAnswer('');
    setEditedStatus('');
  };

  const handleAnswerChange = (e) => {
    const file = e.target.files[0];
  
    if (file) {
      const reader = new FileReader();
  
      reader.onloadend = () => {
        setEditedAnswer(reader.result);
      };
  
      reader.readAsDataURL(file);
    }
  };
  
  const handleAnswerAdd = (e) => {
    const file = e.target.files[0];
  
    if (file) {
      const reader = new FileReader();
  
      reader.onloadend = () => {
        setAddedAnswer(reader.result);
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
      question: addedQuestion,
      status: addedStatus,
      language: addedLanguage,
      answer: addedAnswer,
    };

     // Update categoryData by adding the new row
  setCategoryData((nextData) => [...nextData, addedRow]);

  // Update filteredData by adding the new row
  setFilteredData((nextData) => [...nextData, addedRow]);

    // Clear the edited data and close the edit modal
    setAddedQuestion('');
    setAddModal(false);
    setAddedStatus('')
    setAddedAnswer('')
  }

    
  return (
    <>
    <div className='flex flex-col items-center justify-between w-full py-4 border-b sm:flex-row'>
        
    {/* Heading of Section */}
    <h2 className='text-xl font-semibold'>Faq</h2>
    <button  className='px-4 py-3 font-semibold text-white bg-blue-500 rounded-lg ' onClick={toggleAddModal}>Add Faq</button>
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
            
    <DeleteModalCategory handlerFunction={handleDelete} isToggle={deleteModal} setIsToggle={setDeleteModal} />
    <AddnEditModalFAQ button={'Update'} heading={'Edit'} isToggle={editModal} setIsToggle={setEditModal} handlerFunction={handleEdit} question={editedQuestion} status={editedStatus} setQuestion={setEditedQuestion} setAnswer={setEditedAnswer} answer={editedAnswer}  setStatus={setEditedStatus}/>         
    <AddnEditModalFAQ button={'Add'} heading={'Add'} isToggle={addModal} setIsToggle={setAddModal} handlerFunction={handleAdd} question={addedQuestion} status={addedStatus} setQuestion={setAddedQuestion} setAnswer={setAddedAnswer} answer={addedAnswer}  setStatus={setAddedStatus}/>         
    </>
  )
}

export default FaqTable