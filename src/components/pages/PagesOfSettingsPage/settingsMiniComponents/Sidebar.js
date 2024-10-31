import {React, useState} from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { TbMessageLanguage } from "react-icons/tb";
import { IoAlertCircleOutline } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";
import { Link } from 'react-router-dom';

const Sidebar = ({number}) => {
    let num = number - 6;
    const [settingsSideBar, setSettingsSideBar] = useState(
      [
        {
         id: 0,
         icon: IoSettingsOutline,
         name: 'Basic Setting', 
         link: '/settings/basic-setting'
  
        },
        
        {
         id: 1,
         icon: TbMessageLanguage,
         name: 'Language', 
         link: '/settings/langauge-setting'
  
        },
        
        {
          id: 2,
          icon: MdOutlinePayment,
          name: 'Payment Gateway',
          link: '/settings/gateway-setting'
  
        },
  
        {
          id: 3,
          icon: IoAlertCircleOutline,
          name: 'SMTP Setting',
          link: '/settings/smtp-setting'
  
        },
  
        {
          id: 4,
          icon: IoAlertCircleOutline,
          name: 'OpenAI API Setting', 
          link: '/settings/openai-setting'
  
        },
  
        {
          id: 5,
          icon: IoAlertCircleOutline,
          name: 'Google Analytics',
          link: '/settings/google-analytics-setting'
  
        },
      ])
    const [landingPageContain, setLandingPageContain] = useState(
      [
        {
          id: 0,
          name: 'Section Show/Hide',
          icon: IoSettingsOutline,
          link: '/settings/show-hide-setting'
  
        },
  
        {
          id: 1,
          name: 'Brand Management',
          icon: IoSettingsOutline,
          link: '/settings/brand-setting'
  
        },
  
        {
          id: 2,
          name: 'How It Work',
          icon: IoSettingsOutline,
          link: '/settings/hiw-setting'
  
        },
  
        {
          id: 3,
          name: 'Testimonials',
          icon: IoSettingsOutline,
          link: '/settings/testimonials-setting'
  
        },
  
        {
          id: 4,
          name: 'Faq',
          icon: IoSettingsOutline,
          link: '/settings/faq-setting'
  
        },
      ])
    
  return (
    <>
     {/* first Contain */}
     <div>
     {settingsSideBar.map((data) => (
       <Link className='hover:no-underline hover:text-blue-500' to={data.link}><div className={`${data.id === number ? 'text-blue-500 ' : ''} hover:text-blue-500 transition-all duration-500  cursor-pointer flex items-center py-3 text-[15px] gap-x-2`}>
       <data.icon size={20}/>
       <h1>{data.name}</h1>
     </div></Link>
   ))}
   </div>
   
   {/* Laning Page Contain */}
   <div className='flex flex-col mt-3'>
     <h1 className='mb-1 font-bold'>Landing Page Setting</h1>
     {landingPageContain.map((data) => (
        <Link className='hover:no-underline hover:text-blue-500' to={data.link}><div key={data.id} className={`${data.id === num ? 'text-blue-500 ' : ''}  cursor-pointer transition-all duration-500 flex items-center py-3 text-[15px] gap-x-2`}>
       <data.icon size={20}/>
       <h1>{data.name}</h1>
     </div></Link>
   ))}  
   </div>  
    </>
  )
}

export default Sidebar