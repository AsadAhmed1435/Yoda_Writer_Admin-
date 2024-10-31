import {React, useState} from 'react'
import { Button, Modal, ModalBody, ModalFooter, FormGroup } from 'reactstrap';
import { CiCamera } from "react-icons/ci";


const EditModalPayment = (props) => {
  const {isToggle, setIsToggle,  name, status, mode, setMode, handlerFunction,  image, setImage,  setStatus ,heading, button} = props;
  const cross = () => setIsToggle(false); 
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
  
    // Check if a file is selected
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImage(imageURL)
      // Update the settingImages state with the new image URL
      
    }
  };
  
  
  return (
    <Modal size='lg' isOpen={isToggle} className='w-full p-2 '>
    <form onSubmit={(e)=>  handlerFunction(e)}>
      <ModalBody >
        <div>
            <h1 className='pb-3 text-xl font-semibold border-b'>{heading} Gateway</h1>
            <h1 className='mt-3 text-xl font-semibold'>Gateway</h1>
          <div className='p-3 mt-3 bg-gray-100 border rounded-md'>
             {/* Image  */}
             <FormGroup className='flex flex-col '>
              <label htmlFor="imageInput" className={`${image ? 'flex items-center justify-center ' : ''}   border-2  rounded-full overflow-hidden  w-[70px] h-[70px]`}>
                <img src={image} className='' alt="" />
               
             </label>
             </FormGroup>
            
            <div className='flex items-center justify-between w-full gap-x-14 flex-col lg:flex-row'>
                
            {/* Title */}
            <FormGroup className='flex flex-col w-full'>
            <label htmlFor="modalName" className='px-1 py-1 font-semibold '>Title</label>
            <input
              className='px-3 py-2 bg-white border rounded-lg ms-5 focus:outline-none'
              type="text"
              placeholder='Enter Name'
              value={name}
              disabled
              />
              </FormGroup>
              
              

              {/* Slug */}
            <FormGroup className='flex flex-col w-full'>
            <label htmlFor="modalName" className='px-1 py-1 font-semibold '>Slug</label>
            <input
              className='px-3 py-2 bg-white border rounded-lg ms-5 focus:outline-none'
              type="text"
              placeholder='Enter Designation'
              value={name}
              required
              disabled
              />
              </FormGroup>
              </div>

            <div className='flex items-center justify-center w-full gap-x-10  flex-col lg:flex-row' >
                
             {/* Status */}
             <FormGroup className='flex flex-col w-full'>
                 <label htmlFor="modalName" className='px-1 py-1 font-semibold'>Status</label>
                 <select
                   className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
                   value={status}
                   required  
                   onChange={(e) => setStatus(e.target.value)}
                 >
                   <option value='' disabled>Select Option</option>
                   <option value='Active'>Active</option>
                   <option value="Deactive">Deactive</option>
                 </select>
              </FormGroup>

              {/* Mode */}
             <FormGroup className='flex flex-col w-full'>
                 <label htmlFor="modalName" className='px-1 py-1 font-semibold'>Mode</label>
                 <select
                   className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
                   value={mode}
                   required  
                   onChange={(e) => setMode(e.target.value)}
                   >
                   <option value='' disabled>Select Option</option>
                   <option value='Sandbox'>Sandbox</option>
                   <option value="Live">Live</option>
                 </select>
              </FormGroup>
                </div>
              
                {/* Url/Hash */}
            <FormGroup className='flex flex-col '>
            <label htmlFor="modalName" className='px-1 py-1 font-semibold '>Url/Hash</label>
            <input
              className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
              type="text"
              placeholder='Url/Hash!'
              />
              </FormGroup>

                  {/* Key */}
            <FormGroup className='flex flex-col '>
            <label htmlFor="modalName" className='px-1 py-1 font-semibold '>Key</label>
            <input
              className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
              type="text"
              placeholder='API Key...!'
              />
              </FormGroup>

                    {/* Secret */}
            <FormGroup className='flex flex-col '>
            <label htmlFor="modalName" className='px-1 py-1 font-semibold '>Secret</label>
            <input
              className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
              type="text"
              placeholder='9qz8LFWuM...'
              />
              </FormGroup>
                
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button onClick={cross} className='px-4 py-2 mt-0 ml-2 font-semibold text-black bg-white border-gray-500 rounded-md xl:mt-6 hover:text-black' >Back</Button>
        <Button type="submit" className={`${status === 'Active' || status === 'Deactive' ? '' : 'pointer-events-none' } px-4 py-2 mt-0 ml-2 font-semibold bg-blue-600 border-blue-600 hover:bg-blue-700 `}>{button}</Button>
      </ModalFooter>
    </form>
  </Modal>
  )
}

export default EditModalPayment