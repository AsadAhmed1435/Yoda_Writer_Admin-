import React from 'react'
import { Button, FormGroup } from 'reactstrap';

const SMTP = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-between w-full py-4 border-b sm:flex-row'>
        
        {/* Heading of Section */}
        <h2 className='text-xl font-semibold'>SMTP Setting</h2>
        <button  className='hidden px-4 py-3 font-semibold text-white bg-blue-500 rounded-lg'>Add Category</button>
        
        </div>
        <div className='w-full mt-3 '>

          
         <form action="">
         <div className='bg-white border rounded-lg'> 
         
         <div className='w-full px-3 py-3'>
              
              <div className='flex flex-col md:items-center md:justify-between md:flex-row w-full gap-x-6 mb-3'>
              {/* Status */}
              <FormGroup className='flex flex-col w-full'>
              <label  className='px-1 py-1 font-semibold '>Status</label>
              <select
                   className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
                   placeholder='Activate'
                 >
                  <option value='Select Option'>Select Option</option>
                   <option value='Disable'>Disable</option>
                   <option value='Enable'>Enable</option>
                 </select>
              </FormGroup>

              {/* Mail Mailer */}
              <FormGroup className='flex flex-col w-full'>
              <label  className='px-1 py-1 font-semibold '>Mail Mailer</label>
              <select
                   className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
                   placeholder='Activate'
                 >
                  <option value='Select Option'>SMTP</option>
                 </select>
              </FormGroup>
               </div>

               <div className='flex flex-col md:items-center md:justify-between md:flex-row w-full gap-x-6 mb-3'>
              {/* Mail Host */}
              <FormGroup className='flex flex-col w-full mt-3'>
              <label  className='px-1 py-1 font-semibold '>Mail Host</label>
              <input className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
               type="text"
               placeholder='sandbox.smtp.mailtrap.io'
               
              />
              </FormGroup>

              {/* Mail Port */}
              <FormGroup className='flex flex-col w-full mt-3'>
              <label  className='px-1 py-1 font-semibold '>Mail Port</label>
              <input className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
               type="text"
               placeholder='5543'
               
              />
              </FormGroup>
               </div>
              
               <div className='flex flex-col md:items-center md:justify-between md:flex-row w-full gap-x-6 mb-3'>
              {/* Mail Username */}
              <FormGroup className='flex flex-col w-full mt-3'>
              <label  className='px-1 py-1 font-semibold '>Mail Username</label>
              <input className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
               type="email"
               placeholder='user@demo.com'
               
              />
              </FormGroup>

             {/* Mail Password */}
             <FormGroup className='flex flex-col w-full mt-3'>
              <label  className='px-1 py-1 font-semibold '>Mail Password</label>
              <input className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
               type="password"
               placeholder='Mail Password'
               
              />
              </FormGroup>
              </div>

              <div className='flex flex-col md:items-center md:justify-between md:flex-row w-full gap-x-6 mb-3'>

              {/* Mail Encryption */}
              <FormGroup className='flex flex-col w-full mt-3'>
              <label  className='px-1 py-1 font-semibold '>Mail Encryption</label>
              <input className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
               type="text"
               placeholder='tls'
               
              />
              </FormGroup>

            

              {/* Mail From Address */}
              <FormGroup className='flex flex-col w-full mt-3'>
              <label  className='px-1 py-1 font-semibold '>Mail From Address</label>
              <input className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
               type="email"
               placeholder='example@gmail.com'
               
              />
              </FormGroup>
               </div>

              {/* Mail From Name */}
              <FormGroup className='flex flex-col w-full mt-3'>
              <label  className='px-1 py-1 font-semibold '>Mail From Name</label>
              <input className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
               type="text"
               placeholder='no-reply'
               
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

export default SMTP