import React from 'react'
import { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, FormGroup } from 'reactstrap';

const AddnEditModalPackagesPage = (props) => {
    const {isToggle, setIsToggle, setMonthly,setYearly,setCharacters, monthly, yearly, characters,  name, status, handlerFunction, setName, setStatus ,heading, setCategory, category} = props;
    const cross = () => setIsToggle(false);
    const [useCases, SetUseCases] = useState(
      [
        'Select Option',
        'Text Summary',
        'Blog',
        'E-Mail',
        'Digital Ad',
        'Video',
        'Ecommerce',
        'Social media',
        'Brainstorm',
        'Framework',
        'SEO',
        'Travel',
        'Reviews',
      ]
      )

   
  return (
    <Modal size='lg' isOpen={isToggle} className='w-full p-2 '>
    <form onSubmit={(e)=>  handlerFunction(e)}>
      <ModalBody >
        <div >
            <h1 className='pb-3 text-xl font-semibold '>{heading} Packages</h1>
          <div className='py-3 overflow-y-auto border-y'>
            
               <div className='flex justify-between px-3 gap-x-3 flex-col md:flex-row '>
                 {/* Name */}
              <FormGroup className='flex flex-col w-full'>
              <label  className='px-1 py-1 font-semibold '>Name</label>
              <input className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
               type="text"
               placeholder='Enter Name'
               value={name}
               onChange={(e) => setName(e.target.value)}
               required
              />
              </FormGroup>
              
                 {/* Generate Characters */}
              <FormGroup className='flex flex-col w-full '>
              <label  className='px-1 py-1 font-semibold '>Generate Characters</label>
              <input className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
               type="number"
               value={characters}
               onChange={(e) => setCharacters(e.target.value)}
               required
               />
              </FormGroup>
               </div> 
              
               <div className='flex justify-between px-3 gap-x-3 flex-col md:flex-row'>
                
               {/* Access Use Cases */}
               <FormGroup className='flex flex-col w-full' >
               <label className='px-1 py-1 font-semibold'>Access Use Cases</label>
               <select
                 className='px-3 py-2 text-black border rounded-lg ms-5 focus:outline-none'
                 required
                 value={category}
                 onChange={(e) => setCategory(e.target.value)}
               >
                 {useCases.map((option) => (
               <option className='text-gray-600' key={option} value={option}>
                 {option}
               </option>
             ))}
               </select>
             </FormGroup>

               {/* Write Languages */}
               <FormGroup className='flex flex-col w-full '>
              <label  className='px-1 py-1 font-semibold '>Write Languages</label>
              <input className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
               type="number"
              
              />
              </FormGroup>
               </div>


            <div className='flex justify-between px-3 gap-x-3 flex-col md:flex-row'>

              {/* Access Tones */}
              <FormGroup className='flex flex-col w-full '>
              <label  className='px-1 py-1 font-semibold '>Access Tones</label>
              <input className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
               type="number"
               />
              </FormGroup>


              {/* Access Community */}
              <FormGroup className='flex flex-col w-full '>
              <label  className='px-1 py-1 font-semibold '>Access Community</label>
              <input className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
               type="text"
               placeholder='Access Community'
               />
              </FormGroup>           
               </div>
              
               <div className='flex justify-between px-3 gap-x-3 flex-col md:flex-row'>

                  {/* Support */}
              <FormGroup className='flex flex-col w-full'>
              <label  className='px-1 py-1 font-semibold '>Support</label>
              <input className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
               type="text"
               placeholder='Support'
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
                     
                <div className='flex px-3'>    
                  {/* Is Trail */}
                 <FormGroup className='flex flex-col '>
                 <label  className='px-1 py-1 font-semibold'>Is Trail</label>
                 <select
                   className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
                   placeholder='Activate'
                 >
                  <option value='Select Option'>Select Option</option>
                   <option value='Active'>Active</option>
                   <option value="Deactive">Deactive</option>
                 </select>
                </FormGroup>
                </div>

                <div className='flex justify-between px-3 py-3 mt-2 border-t gap-x-3 flex-col md:flex-row'>
                    
            {/* Monthly Price */}
            <FormGroup className='flex flex-col w-full '>
              <label  className='px-1 py-1 font-semibold '>Monthly Price</label>
              <input className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
               type="number"
               required
               value={monthly}
               onChange={(e) => setMonthly(e.target.value)}
               />
              </FormGroup>
                    
            {/* Yearly Price */}
             <FormGroup className='flex flex-col w-full '>
              <label  className='px-1 py-1 font-semibold '>Yearly Price</label>
              <input className='px-3 py-2 border rounded-lg ms-5 focus:outline-none'
               type="number"
               required
               value={yearly}
               onChange={(e) => setYearly(e.target.value)}
               />
              </FormGroup>
                </div>
          </div>
        </div>
        {console.log(category)}
      </ModalBody>
      <ModalFooter className='flex justify-start border-t-0 '>
        <Button onClick={cross} className='px-4 py-2 mt-0 ml-2 font-semibold text-black bg-white border-gray-500 rounded-md xl:mt-6 hover:text-black' >Back</Button>
        <Button type="submit" className={`${status === 'Active' || status === 'Deactive'  ? '' : 'pointer-events-none'} px-4 py-2 mt-0 ml-2 font-semibold bg-blue-600 border-blue-600 hover:bg-blue-700 `}>Update</Button>
      </ModalFooter>
    </form>
  </Modal>
  )
}

export default AddnEditModalPackagesPage