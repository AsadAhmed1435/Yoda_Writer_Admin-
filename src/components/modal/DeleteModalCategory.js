import {React} from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

const DeleteModalCategory = ({ handlerFunction, setIsToggle, isToggle }) => {
    const cross = () => setIsToggle(false);

  return (
<Modal size='lg' isOpen={isToggle} className='p-2 rounded-4'>
    <ModalHeader  className='' toggle={cross}>Please Confirm again before pressing OK!</ModalHeader>
    <ModalBody className='p-2 ml-2'><p className=' fw-bold'>You are Deleting The Item!!!</p></ModalBody>
    <ModalFooter className=''><Button className='px-3 bg-red-600' onClick={handlerFunction}>OK</Button></ModalFooter>
</Modal>
  )
}

export default DeleteModalCategory