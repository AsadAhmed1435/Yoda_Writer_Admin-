import React from 'react'
import { CiCamera } from 'react-icons/ci';
import { Button, Modal, ModalBody, ModalFooter, FormGroup } from 'reactstrap';

const EditModalCategory = (props) => {
  const {isToggle, setIsToggle, name, status, image, setImage, handlerFunction, setName, setImageFunction, setStatus ,heading, button} = props;
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
            <h1 className='pb-3 text-xl font-semibold border-b'>{heading} Category</h1>
          <div>
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
                 <FormGroup className='flex flex-col'>
                 <label htmlFor="modalName" className='px-1 py-1 font-semibold'>Status</label>
                 <select
                   className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
                   value={status}
                   placeholder='Activated'
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
      </ModalBody>
      <ModalFooter>
        <Button onClick={cross} className='px-4 py-2 mt-0 ml-2 font-semibold text-black bg-white border-gray-500 rounded-md xl:mt-6 hover:text-black' >Back</Button>
        <Button type="submit" className={`${status === 'Active' || status === 'Deactive' ? '' : 'pointer-events-none' } px-4 py-2 mt-0 ml-2 font-semibold bg-blue-600 border-blue-600 hover:bg-blue-700 `}>{button}</Button>
      </ModalFooter>
    </form>
  </Modal>
  )
}

export default EditModalCategory