import React from 'react';
import { useRef } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import profilephoto from '../../assets/img/profileimage logo.jpg';
import { CiCamera } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa6";
import { useState } from 'react';
const MyProfilePage = () => {
  const fileInputRef = useRef(null);
  const [uploadedImg, setUploadedImg] = useState('');

  const handleCameraClick = () =>
  {
    if(fileInputRef.current){
      fileInputRef.current.click();
    }
  };

  const handleImageChange = (e) =>
  {
    const selectImage  =  e.target.files[0];
    setUploadedImg(URL.createObjectURL(selectImage));
    console.log('Selected image: ', selectImage);
  }
  return (
    <Container fluid className='ml-[2%] md:ml-[2%] w-[95%] sm:w-[96%] h-full px-4 py-4 z-0 flex flex-col items-start bg-white rounded-3xl'>
      {/* Top heading section */}
      <div className='flex flex-col w-full py-3 pb-4 border-b sm:items-center sm:justify-between sm:flex-row'>
        <h1 className='text-xl font-semibold'>My Profile</h1>
        <ul className='flex text-sm'>
          <li className='flex items-center justify-center mx-1'>Dashboard <FaAngleRight size={10} className='mx-1 text-gray-400'/></li>
          <li className='flex items-center justify-center mx-1'>Profile <FaAngleRight size={10} className='mx-1 text-gray-400'/></li>
          <li className='mx-1'>My Profile</li>
        </ul>
      </div>

      {/* Second div for form input profile image */}
      <div className='w-full p-4 my-4 border'>

        {/* Div for Picture logo */}
        <div className='bottom-0 flex'>
          <img className='h-[98px] w-[93px]' src={uploadedImg ? uploadedImg : profilephoto} alt="Profile Image"   /> 
          <CiCamera  size={20} onClick={handleCameraClick} className='bg-blue-400 text-white relative top-[74px] z-10 right-5 rounded-full border overflow-hidden  cursor-pointer'/>

          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleImageChange}
            aria-label="Upload profile image"
          />
        </div>

        {/* Div for input form */}
        <div className='my-4'>
          <Form>
            {/* First row */}
            <FormGroup className='row'>
              <div className='mb-2 col-md-6 mb-md-0'>
                <Label for="firstName" className='text-sm font-semibold'>First Name</Label>
                <Input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Enter your first name"
                  className='py-4 border-gray-200'
                  required
                />
              </div>
              <div className='col-md-6'>
                <Label for="lastName" className='text-sm font-semibold'>Last Name</Label>
                <Input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Enter your last name"
                  className='py-4 border-gray-200'
                  required
                />
              </div>
            </FormGroup>

            {/* Second row */}
            <FormGroup className='row'>
              <div className='mb-2 col-md-6 mb-md-0'>
                <Label for="email" className='text-sm font-semibold'>Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className='py-4 border-gray-200'
                  required
                />
              </div>
              <div className='col-md-6'>
                <Label for="contactNumber" className='text-sm font-semibold'>Contact Number</Label>
                <Input
                  type="tel"
                  name="contactNumber"
                  id="contactNumber"
                  placeholder="Enter your contact number"
                  className='py-4 border-gray-200'
                  required
                />
              </div>
            </FormGroup>

            {/* Third row */}
            <FormGroup>
              <Button className='bg-blue-500 border-0 py-[13px] px-4 text-sm font-semibold' type="submit">
                Update
              </Button>
            </FormGroup>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default MyProfilePage;

