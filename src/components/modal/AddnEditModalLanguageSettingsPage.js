import {React, useState, useEffect} from 'react'
import { Button, Modal, ModalBody, ModalFooter, FormGroup } from 'reactstrap';
import { CiCamera } from "react-icons/ci";
import languageData from '../../data'


const AddnEditModalLanguageSettingsPage = (props) => {
  const {isToggle, setIsToggle, rtl, setRtl, code, setCode, name, status, handlerFunction, setName, flag, setFlag, setImageFunction, setStatus ,heading, button} = props;
  const cross = () => setIsToggle(false);
  
  const handleLanguageChange = (event) => {
    setCode(event.target.value)
  };
  // const [languageOptions, setlanguageOptions] = useState([
  //   { value: 'en', label: 'English' },
  //   { value: 'es', label: 'Spanish' },
  //   { value: 'fr', label: 'French' },
  //   // Add more languages as needed
  // ])
 
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
  
    // Check if a file is selected
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setFlag(imageURL)
      // Update the settingImages state with the new image URL
      
    }
  };
  
  
  return (
    <Modal size='lg' isOpen={isToggle} className='w-full p-2 '>
    <form onSubmit={(e)=>  handlerFunction(e)}>
      <ModalBody >
        <div>
            <h1 className='pb-3 text-xl font-semibold border-b'>{heading} Language</h1>
          <div className='mt-3'>
            
            {/* Name */}
            <FormGroup className='flex flex-col '>
            <label htmlFor="modalName" className='px-1 py-1 font-semibold '>Name</label>
            <input
              className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
              type="text"
              placeholder='Enter Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              />
              </FormGroup>
              
              {/* Language */}
              <FormGroup className='flex flex-col'>
              <label htmlFor="language" className='px-1 py-1 font-semibold'>Language </label>
              <select id="language" className='px-3 py-2 border rounded-lg ms-5 focus:outline-none' onChange={handleLanguageChange} value={code}>
                <option value="" disabled>
                  Choose a language
                </option>
                {languageData.map((language) => (
                  <option key={language.code} value={language.code}>
                    {language.name}
                  </option>
                ))}
              </select>
              </FormGroup>
              
              {/* RTL */}
              <FormGroup className='flex flex-col'>
                 <label htmlFor="modalName" className='px-1 py-1 font-semibold'>RTL</label>
                 <select
                   className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
                   placeholder='Activated'
                   required  
                   value={rtl}
                   onChange={(e) => setRtl(e.target.value)}
                 >
                   <option value='' disabled>Select Option</option>
                   <option value='Yes'>Yes</option>
                   <option value="No">No</option>
                 </select>
              </FormGroup>
              
              {/* Default */}
              <FormGroup className='flex flex-col'>
                 <label htmlFor="modalName" className='px-1 py-1 font-semibold'>Default</label>
                 <select
                   className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
                   placeholder='Activated'
                   required  
                 >
                   <option value='' disabled>Select Option</option>
                   <option value='Yes'>Yes</option>
                   <option value="No">No</option>
                 </select>
              </FormGroup>

              {/* Status */}
              <FormGroup className='flex flex-col'>
                 <label htmlFor="modalName" className='px-1 py-1 font-semibold'>Status</label>
                 <select
                   className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
                   value={status}
                   placeholder='Activated'
                   required  
                   onChange={(e) => setStatus(e.target.value)}
                 >
                   <option value='' disabled>Select Option</option>
                   <option value='Published'>Published</option>
                   <option value="Unpublished">Unpublished</option>
                 </select>
              </FormGroup>
                
              <FormGroup className='flex flex-col '>
              <span className='px-1 py-1 font-semibold'>Image</span>
              <label htmlFor="imageInput" className={`${flag ? 'flex items-center justify-center border-blue-600' : ''} cursor-pointer  border-2  rounded-full overflow-hidden  w-[70px] h-[70px]`}>
                <img src={flag} className='' alt="" />
                <CiCamera size={29} className={`${flag ? 'hidden' : 'block'} relative top-4 left-4 z-20 overflow-hidden font-bold text-white bg-blue-600 rounded-full cursor-pointer`}/>
                <input
                type="file"
                id="imageInput"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
              />
             </label>
             </FormGroup>
              
                
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button onClick={cross} className='px-4 py-2 mt-0 ml-2 font-semibold text-black bg-white border-gray-500 rounded-md xl:mt-6 hover:text-black' >Back</Button>
        <Button type="submit" className={`${status === 'Published' || status === 'Unpublished' ? '' : 'pointer-events-none' } px-4 py-2 mt-0 ml-2 font-semibold bg-blue-600 border-blue-600 hover:bg-blue-700 `}>{button}</Button>
      </ModalFooter>
    </form>
  </Modal>
  )
}

export default AddnEditModalLanguageSettingsPage