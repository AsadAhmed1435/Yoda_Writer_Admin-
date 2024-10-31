import React from 'react'
import { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, FormGroup } from 'reactstrap';

const EditShowHideModal = (props) => {
    const {isToggle, setIsToggle, status, handlerFunction, setStatus } = props;
    const cross = () => setIsToggle(false);
   
  return (
    <Modal size='lg' isOpen={isToggle} className='w-full p-3 '>
    <form onSubmit={(e)=>  handlerFunction(e)}>
      <ModalBody >
        <div >
            <h1 className='pb-3 text-xl font-semibold '>Hero Area</h1>
          <div className='py-3 overflow-y-auto border-y'>
            
                 {/* Title One */}
              <FormGroup className='flex flex-col w-full'>
              <label  className='px-1 py-1 font-semibold '>Title One</label>
              <input className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
               type="text"
               placeholder='Best Ai'
              />
              </FormGroup>
              
              {/* Title Two */}
              <FormGroup className='flex flex-col w-full'>
              <label  className='px-1 py-1 font-semibold '>Title Two</label>
              <input className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
               type="text"
               placeholder='Writer For Creating'
              />
              </FormGroup>
              
                
               {/* Title Slider */}
              <FormGroup className='flex flex-col w-full'>
              <label  className='px-1 py-1 font-semibold '>Title Slider</label>
              <input className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
               type="text"
               placeholder='Facebook Post Description,Youtube Description,Blog Description,Content'
              />
              </FormGroup>

                {/* Title Summary */}
              <FormGroup className='flex flex-col w-full'>
              <label  className='px-1 py-1 font-semibold '>Title Summary</label>
              <textarea className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
               type=""
               placeholder='YodaWrite.ai is an AI writing tool that uses natural language processing to simplify the content creation process. Create engaging written content effortlessly in minutes.'
              />
              </FormGroup>


              {/* Slider Image 1 */}
              <FormGroup className='flex flex-col w-full '>
              <label  className='px-1 py-1 font-semibold '>Slider Image 1</label>
              <input className='px-3 py-2 border rounded-lg ms-5 text-gray-400 focus:outline-none'
               type="file"
               />
              </FormGroup>


              {/* Slider Image 2 */}
              <FormGroup className='flex flex-col w-full '>
              <label  className='px-1 py-1 font-semibold '>Slider Image 2</label>
              <input className='px-3 py-2 border rounded-lg ms-5 text-gray-400 focus:outline-none'
               type="file"
               />
              </FormGroup>           
              

              {/* Slider Image 3 */}
              <FormGroup className='flex flex-col w-full '>
              <label  className='px-1 py-1 font-semibold '>Slider Image 3</label>
              <input className='px-3 py-2 border rounded-lg ms-5 text-gray-400 focus:outline-none'
               type="file"
               />
              </FormGroup>

             {/* Status */}
            <FormGroup className='flex flex-col w-full'>
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
      </ModalBody>
      <ModalFooter className='flex justify-start border-t-0 '>
        <Button onClick={cross} className='px-4 py-2 mt-0 ml-2 font-semibold text-black bg-white border-gray-500 rounded-md xl:mt-6 hover:text-black' >Back</Button>
        <Button type="submit" className={`${status === 'Active' || status === 'Deactive'  ? '' : 'pointer-events-none'} px-4 py-2 mt-0 ml-2 font-semibold bg-blue-600 border-blue-600 hover:bg-blue-700 `}>Update</Button>
      </ModalFooter>
    </form>
  </Modal>
  )
}

export default EditShowHideModal