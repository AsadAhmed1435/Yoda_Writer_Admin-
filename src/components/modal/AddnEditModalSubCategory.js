import React from 'react'
import { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, FormGroup } from 'reactstrap';
import { CiCamera } from 'react-icons/ci';

const AddnEditModalSubCategory = (props) => {
    const {isToggle, setIsToggle, image, setImage,  name, status, handlerFunction, setName, setImageFunction, setStatus ,heading, setCategory, category} = props;
    const cross = () => setIsToggle(false);
    const [categoryOptions, setCategoryOptions] = useState(
      [
        'Select Option',
        'Writer',
        'Blog',
        'E-Mail',
        'Digital Ad',
        'Video',
        'Ecommerce',
        'Social media',
        'Brainstorm',
        'Framework',
        'SEO',
        'Travel',
        'Reviews',
      ]
      )
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
        <div >
            <h1 className='pb-3 text-xl font-semibold '>{heading} Category</h1>
          <div className='py-3 overflow-y-auto border-y'>
  
               {/* Category Options */}
               <FormGroup className='flex flex-col' >
               <label className='px-1 py-1 font-semibold'>Category</label>
               <select
                 className='px-3 py-2 text-black border rounded-lg ms-5 focus:outline-none'
                 placeholder='Activated'
                 required
                 value={category}
                 onChange={(e) => setCategory(e.target.value)}
               >
                 {categoryOptions.map((option) => (
               <option className='text-sm' key={option} value={option}>
                 {option}
               </option>
             ))}
               </select>
             </FormGroup>
                
                {/* Name */}
              <FormGroup className='flex flex-col '>
              <label  className='px-1 py-1 font-semibold '>Name</label>
              <input className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
               type="text"
               placeholder='Enter Name'
               value={name}
               onChange={(e) => setName(e.target.value)}
               required
              />
              </FormGroup>

                {/* Summary */}
              <FormGroup className='flex flex-col '>
            <label  className='px-1 py-1 font-semibold '>Summary</label>
            <textarea
              className=' border px-3 py-2 text-[15px] min-h-[130px]  pr-4 rounded-lg focus:outline-none'
              type="text"
              placeholder='Summary'
              />
              </FormGroup>

                {/* Image */}
              <FormGroup className='flex flex-col '>
               <span className='px-1 py-1 font-semibold'>Image</span>
              <label htmlFor="imageInput" className={`${image ? 'flex items-center justify-center border-blue-600' : ''} cursor-pointer  border-2  rounded-full overflow-hidden  w-[70px] h-[70px]`}>
                <img src={image} className='' alt="" />
                <CiCamera size={29} className={`${image ? 'hidden' : 'block'} relative top-4 left-4 z-20 overflow-hidden font-bold text-white bg-blue-600 rounded-full cursor-pointer`}/>
                <input
                type="file"
                id="imageInput"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
              />
             </label>
                 </FormGroup>
                 
                 {/* Prompt */}
                 <FormGroup className='flex flex-col '>
                 <label  className='px-1 py-1 font-semibold '>Prompt (<span className='px-1 text-[10px] font-bold text-white rounded-xl bg-black'>Your dynamic content must be added in middle of two hash. Example: #your_label#</span>)</label>
                 <textarea
                   className=' border px-3 py-2 text-[15px] min-h-[100px]  pr-4 rounded-lg focus:outline-none'
                   type="text"
                   placeholder='Write me a headline for #product, my description is #description'                  
                   />
                   </FormGroup>
                  
                  {/* Status */}
                 <FormGroup className='flex flex-col'>
                 <label  className='px-1 py-1 font-semibold'>Status</label>
                 <select
                   className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
                   value={status}
                   placeholder='Activate'
                   required
                   onChange={(e) => setStatus(e.target.value)}    
                 >
                  <option value='Select Option'>Select Option</option>
                   <option value='Active'>Active</option>
                   <option value="Deactive">Deactive</option>
                 </select>
                </FormGroup>

               
          </div>
        </div>
        {console.log(category)}
      </ModalBody>
      <ModalFooter className='flex justify-start border-t-0 '>
        <Button onClick={cross} className='px-4 py-2 mt-0 ml-2 font-semibold text-black bg-white border-gray-500 rounded-md xl:mt-6 hover:text-black' >Back</Button>
        <Button type="submit" className={`${status === 'Active' || status === 'Deactive'  ? '' : 'pointer-events-none'} ${category.length > 0 || category === 'Select Option' ? '' : 'pointer-events-none'} px-4 py-2 mt-0 ml-2 font-semibold bg-blue-600 border-blue-600 hover:bg-blue-700 `}>Update</Button>
      </ModalFooter>
    </form>
  </Modal>
  )
}

export default AddnEditModalSubCategory