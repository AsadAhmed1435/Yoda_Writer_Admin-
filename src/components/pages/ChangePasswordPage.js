import React from 'react'
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { FaAngleRight } from "react-icons/fa6";

const ChangePasswordPage = () => {
  return (
    <Container fluid className='ml-[2%] md:ml-[2%] w-[95%] sm:w-[96%] h-full  px-4 py-4 z-0 flex flex-col items-start bg-white rounded-3xl'>
      <div className='flex flex-col w-full py-3 pb-4 border-b sm:items-center sm:justify-between sm:flex-row'>
        <h1 className='text-xl font-semibold'>Change Password</h1>
        <ul className='flex text-sm'>
          <li className='flex items-center justify-center mx-1'>Dashboard <FaAngleRight size={10} className='mx-1 text-gray-400'/></li>
          <li className='flex items-center justify-center mx-1'>Profile <FaAngleRight size={10} className='mx-1 text-gray-400'/></li>
          <li className='mx-1'>My Profile</li>
        </ul>
      </div>


      <Form className='mt-4 w-[100%] border my-4 p-4 text-sm font-semibold'>
        <FormGroup>
          <Label for='currentPassword'>Current Password</Label>
          <Input
            type='password'
            name='currentPassword'
            id='currentPassword'
            placeholder='********'
            className='py-4 border-gray-200'
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for='newPassword'>New Password</Label>
          <Input
            type='password'
            name='newPassword'
            id='newPassword'
            placeholder='********'
            className='py-4 border-gray-200'
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for='confirmPassword'>Confirm Password</Label>
          <Input
            type='password'
            name='confirmPassword'
            id='confirmPassword'
            placeholder='********'
            className='py-4 border-gray-200'
            required
          />
        </FormGroup>
        <Button className='py-2 font-bold bg-blue-500 border-0' type='submit'>
          Update
        </Button>
      </Form>
    </Container>
  )
}

export default ChangePasswordPage