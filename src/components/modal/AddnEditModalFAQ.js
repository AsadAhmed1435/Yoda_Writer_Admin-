import {React, useState} from 'react'
import { Button, Modal, ModalBody, ModalFooter, FormGroup } from 'reactstrap';
import { CiCamera } from "react-icons/ci";


const AddnEditModalFAQ = (props) => {
  const {isToggle, setIsToggle,  question, status, handlerFunction, setQuestion, answer, setAnswer,  setStatus ,heading, button} = props;
  const cross = () => setIsToggle(false);
  

  

  
  
  return (
    <Modal size='lg' isOpen={isToggle} className='w-full p-2 '>
    <form onSubmit={(e)=>  handlerFunction(e)}>
      <ModalBody >
        <div>
            <h1 className='pb-3 text-xl font-semibold border-b'>{heading} Faq</h1>
          <div className='mt-3'>
            
            {/* Question */}
            <FormGroup className='flex flex-col '>
            <label htmlFor="modalName" className='px-1 py-1 font-semibold '>Question</label>
            <input
              className='px-3 py-2 text-sm text-gray-500 border rounded-lg ms-5 focus:outline-none'
              type="text"
              placeholder='Enter Name'
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              required
              />
              </FormGroup>
              
             {/* Answer */}
              <FormGroup className='flex flex-col '>
            <label htmlFor="modalName" className='px-1 py-1 font-semibold '>Answer</label>
            <textarea
              className='px-3 py-2 border rounded-lg ms-5 focus:outline-none min-h-[100px] text-gray-500 text-sm'
              type="text"
              placeholder='Enter Name'
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              required
              />
              </FormGroup>

             {/* Status */}
             <FormGroup className='flex flex-col'>
                 <label htmlFor="modalName" className='px-1 py-1 font-semibold'>Status</label>
                 <select
                   className='px-3 py-2 text-sm text-gray-500 border rounded-lg ms-5 focus:outline-none'
                   value={status}
                   required  
                   onChange={(e) => setStatus(e.target.value)}
                 >
                   <option value='' disabled>Select Option</option>
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

export default AddnEditModalFAQ