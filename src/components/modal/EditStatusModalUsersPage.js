import React from 'react'
import { Button, Modal, ModalBody, ModalFooter, FormGroup } from 'reactstrap';

const EditStatusModalUsersPage = (props) => {
  const {isToggle, setIsToggle, status, handlerFunction, setStatus , button} = props;
    const cross = () => setIsToggle(false);
   
  return (
    <Modal size='lg' isOpen={isToggle} className='w-full p-2 '>
    <form onSubmit={(e)=>  handlerFunction(e)}>
      <ModalBody >
        <div>
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
      </ModalBody>
      <ModalFooter>
        <Button onClick={cross} className='px-4 py-2 mt-0 ml-2 font-semibold text-black bg-white border-gray-500 rounded-md xl:mt-6 hover:text-black' >Back</Button>
        <Button type="submit" className={`${status === 'Active' || status === 'Deactive' ? '' : 'pointer-events-none' } px-4 py-2 mt-0 ml-2 font-semibold bg-blue-600 border-blue-600 hover:bg-blue-700 `}>{button}</Button>
      </ModalFooter>
    </form>
  </Modal>
  )
}

export default EditStatusModalUsersPage