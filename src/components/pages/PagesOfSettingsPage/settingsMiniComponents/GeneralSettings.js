import {React, useState} from 'react'
import { Button, FormGroup } from 'reactstrap';
import { CiCamera } from "react-icons/ci";

const GeneralSettings = () => {
    const currency = 
    [
        {
            id: 0,
            currency: 'Select Option'
        },
        {
            id: 1,
            currency: 'USD($)'
        },

        {
            id: 2,
            currency: 'BDT($)'
        },

        {
            id: 3,
            currency: 'INR($)'
        },

        {
            id: 4,
            currency: 'GDT($)'
        },
        
        {
            id: 5,
            currency: 'GDT($)'
        },
        {
            id: 6,
            currency: 'GDT($)'
        },
        {
            id: 7,
            currency: 'GDT($)'
        },
        {
            id: 8,
            currency: 'GDT($)'
        },
    ]
    const [settingImages, setSettingImages] = useState(
        [
            {
                id: 0,
                heading: 'App Logo (White)',
                image: 'https://www.signaturemaker.in/yodawriteai/storage/files/Setting/logo-1679065993.png',
                msg: 'Recomended size : 150 x 50',   
            },

            {
                id: 1,
                heading: 'App Logo (Black)',
                image: 'https://www.signaturemaker.in/yodawriteai/storage/files/Setting/logo-black-1679066097.png',
                msg: 'Recomended size : 150 x 50',   
            },

            {
                id: 2,
                heading: 'App Favicon',
                image: 'https://www.signaturemaker.in/yodawriteai/storage/files/Setting/favicon-1679066260.png',
                msg: 'Recomended size : 64 x 64',   
            },

            {
                id: 3,
                heading: 'Preloader',
                image: 'https://www.signaturemaker.in/yodawriteai/storage/files/Setting/preloader-1679066260.png',
                msg: 'Recomended size : 150 x 50',   
            },
            
            {
                id: 4,
                heading: 'Sign In Image',
                image: 'https://www.signaturemaker.in/yodawriteai/storage/files/Setting/login-1679070448.png',
                msg: 'Recomended size : 1300 x 700',   
            },
        ])
    const [selectedFiles, setSelectedFiles] = useState(Array(settingImages.length).fill(null));
    
    // Function to handle file input changes
  const handleFileChange = (index, event) => {
    const file = event.target.files[0];
    const newFiles = [...selectedFiles];
    newFiles[index] = file;
    setSelectedFiles(newFiles);
  };

  const handleImageUpload = (index) => (event) => {
    const file = event.target.files[0];
    
    // Check if a file is selected
    if (file) {
      const imageURL = URL.createObjectURL(file);

      // Update the settingImages state with the new image URL
      setSettingImages((prevImages) => {
        const newImages = [...prevImages];
        newImages[index] = {
          ...newImages[index],
          image: imageURL,
        };
        return newImages;
      });
    }
  };
  return (
    <>
        <div className='flex flex-col items-center justify-between w-full py-4 border-b sm:flex-row'>
        
        {/* Heading of Section */}
        <h2 className='text-xl font-semibold'>General Setting</h2>
        <button  className='hidden px-4 py-3 font-semibold text-white bg-blue-500 rounded-lg'>Add Category</button>
        
        </div>
        <div className='w-full mt-3 '>

          
         <form action="">
         <div className='bg-white border rounded-lg'> 
         <h1 className='px-3 py-3 font-semibold border-b'>App Setting</h1>
         <div className='w-full px-3 py-3'>
          
              {/* Name */}
              <FormGroup className='flex flex-col w-full'>
              <label  className='px-1 py-1 font-semibold '>App Name</label>
              <input className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
               type="text"
               placeholder='YodaWriteAI - Ai Content Writer & Copyright Generator tool With SAAS'
               
              />
              </FormGroup>

              {/* Email */}
              <FormGroup className='flex flex-col w-full'>
              <label  className='px-1 py-1 font-semibold '>App Email</label>
              <input className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
               type="email"
               placeholder='info@yodawrite.ai'
               
              />
              </FormGroup>

              {/* Number */}
              <FormGroup className='flex flex-col w-full'>
              <label  className='px-1 py-1 font-semibold '>App Contact Number</label>
              <input className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
               type="text"
               placeholder='123456789909'
               
              />
              </FormGroup>

              {/* Location */}
              <FormGroup className='flex flex-col w-full'>
              <label  className='px-1 py-1 font-semibold '>App Location</label>
              <input className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
               type="text"
               placeholder='india'
               
              />
              </FormGroup>

              {/* Copyright */}
              <FormGroup className='flex flex-col w-full'>
              <label  className='px-1 py-1 font-semibold '>App Copyright</label>
              <input className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
               type="text"
               placeholder='Footer Copyright text'
               
              />
              </FormGroup>

             {/* Footer */}
              <FormGroup className='flex flex-col w-full'>
              <label  className='px-1 py-1 font-semibold '>Footer Text</label>
              <input className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
               type="text"
               placeholder='YodaWriteAI is a powerful AI Content Writer & Copyright Generator tool'
               
               />
              </FormGroup>

              {/* Developed */}
              <FormGroup className='flex flex-col w-full'>
              <label  className='px-1 py-1 font-semibold '>Developed By</label>
              <input className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
               type="text"
               placeholder='NSimha Software Solution'
               
              />
              </FormGroup>

              {/* Developed */}
              <FormGroup className='flex flex-col w-full'>
              <label  className='px-1 py-1 font-semibold '>Default Currency</label>
              <select
                   
                   className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
                   placeholder='Activate'
                   >
                  {currency.map((curr) => (<option key={curr.id} value={`${curr.currency}`}>{curr.currency}</option>))}
                 </select>
              </FormGroup>

              {/* Developed */}
              <FormGroup className='flex flex-col w-full'>
              <label  className='px-1 py-1 font-semibold '>Trail Package Duration(days)</label>
              <input className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
               type="number"
              />
              </FormGroup>

              {/* Developed */}
              <FormGroup className='flex flex-col w-full'>
              <label  className='px-1 py-1 font-semibold '>Default Language</label>
              <select
                   className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
                   placeholder='Activate'
                 >
                  <option value='Select Option'>Select Option</option>
                   <option value='English'>English</option>
                 </select>
              </FormGroup>

              {/*App Preloader Status*/}
              <FormGroup className='flex flex-col'>
                 <label  className='px-1 py-1 font-semibold'>App Preloader Status</label>
                 <select
                   className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
                   placeholder='Activate'
                   >
                  <option value='Select Option'>Select Option</option>
                   <option value='Active'>Active</option>
                   <option value="Deactive">Deactive</option>
                 </select>
                </FormGroup>
                <div className='flex flex-wrap items-center w-full mt-3 gap-7'>
               {settingImages.map((image, index) => (<div className='w-full md:w-auto' key={image.id} >
                    <h1 className='py-1 font-semibold'>{image.heading}</h1>
                    <div className='bg-[#e7e7e7] flex items-center justify-center w-full md:w-60 py-6'><img src={image.image} className='w-24 h-24 rounded-xl' alt="" /></div>
                    <p className='font-semibold text-blue-400'>{image.msg}</p>
                    <label htmlFor={`imageInput${index}`} className='relative z-10 overflow-hidden font-bold text-white bg-blue-400 border rounded-full cursor-pointer left-[25%] bottom-24'>
                     <CiCamera size={29} />
                    <input
                      type='file'
                      id={`imageInput${index}`}
                      className='hidden'
                      accept='image/*'
                      onChange={handleImageUpload(index)}
                    />
                  </label>
                </div>))}
                </div>
             </div>
            </div>
            
             <div className='w-full mt-4 bg-white border rounded-lg'>
             <h1 className='px-3 py-3 font-semibold border-b'>SEO Setting</h1>
            <div className='w-full px-3 py-3'>
              {/* Meta Keyword */}
              <FormGroup className='flex flex-col w-full'>
              <label  className='px-1 py-1 font-semibold '>Meta Keyword</label>
              <input className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
               type="text"
               placeholder='Meta Keyword'
               
              />
              </FormGroup>

              {/* Meta Author */}
              <FormGroup className='flex flex-col w-full'>
              <label  className='px-1 py-1 font-semibold '>Meta Author</label>
              <input className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
               type="text"
               placeholder='Meta Author'
               
              />
              </FormGroup>

              {/* Revisit */}
              <FormGroup className='flex flex-col w-full'>
              <label  className='px-1 py-1 font-semibold '>Revisit</label>
              <input className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
               type="text"
               placeholder='01'
               
              />
              </FormGroup>

              {/* Sitemap Link */}
              <FormGroup className='flex flex-col w-full'>
              <label  className='px-1 py-1 font-semibold '>Sitemap Link</label>
              <input className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
               type="text"
               placeholder='#'
               
              />
              </FormGroup>

              {/* Meta Description */}
              <FormGroup className='flex flex-col w-full'>
              <label  className='px-1 py-1 font-semibold '>Meta Description</label>
              <input className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
               type="text"
               placeholder='YodaWriteAI is an innovative AI writing tool that uses advanced algorithms and machine learning to help you generate high-quality content with ease. From creating blog posts and articles.'
               
              />
              </FormGroup>
              
             </div>
             </div>

             <div className='w-full mt-4 bg-white border rounded-lg'>
             <h1 className='px-3 py-3 font-semibold border-b'>Social Media Setting</h1>
            <div className='w-full px-3 py-3'>
              {/* Facebook */}
              <FormGroup className='flex flex-col w-full'>
              <label  className='px-1 py-1 font-semibold '>Facebook</label>
              <input className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
               type="text"
               placeholder='https://www.Facebook.com/#'
               
              />
              </FormGroup>

              {/* Twitter */}
              <FormGroup className='flex flex-col w-full'>
              <label  className='px-1 py-1 font-semibold '>Twitter</label>
              <input className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
               type="text"
               placeholder='https://www.Twitter.com/#'
               
              />
              </FormGroup>

              {/* Linkedin */}
              <FormGroup className='flex flex-col w-full'>
              <label  className='px-1 py-1 font-semibold '>Linkedin</label>
              <input className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
               type="text"
               placeholder='https://www.Linkedin.com/#'
               
              />
              </FormGroup>

              {/* Skype */}
              <FormGroup className='flex flex-col w-full'>
              <label  className='px-1 py-1 font-semibold '>Skype</label>
              <input className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
               type="text"
               placeholder='https://www.skype.com/#'
              />
              </FormGroup>
              
             </div>
             </div>

             <Button className='px-4 py-2 mt-4 font-bold bg-blue-500 hover:bg-blue-600'>Update</Button>
    </form>
    </div>


    </>
  )
}

export default GeneralSettings