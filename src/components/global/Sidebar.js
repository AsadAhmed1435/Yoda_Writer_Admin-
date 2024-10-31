import {React, useEffect} from 'react'
import { useState } from 'react'
import { MdOutlineDashboard } from "react-icons/md";
import { LuFolderClosed } from "react-icons/lu";
import { FiPackage } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import SidebarContain from './SidebarContain';


const Sidebar = ({menuToggle, setMenuToggle}) => {

  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth > 1199)
      {
        setMenuToggle(true);
      }
      else if (window.innerWidth < 1198)
      {
        setMenuToggle(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
    {/* sidebar container */}
    <div className={`${menuToggle ? 'lg:w-[260px] w-[240px] block ' :  'hidden lg:block md:w-[80px]'}  bg-[#F8F8F8] fixed left-0 lg:sticky top-[10%] lg:top-0  h-screen transition-all duration-200 z-10 overflow-hidden`}>        
           
            {/* sidebar fixed List */}
        <div className={`${menuToggle ? 'lg:w-[245px]' : 'w-[60px] lg:w-[90px] ml-1'}  absolute top-[0%] lg:top-[10%] lg:fixed left-0  justify-center items-start flex flex-col px-[30px] py-4 gap-y-[32px]  text-[#83878a] overflow-hidden `}>
        
          <SidebarContain menuToggle={menuToggle}/>
        
        </div>
    </div>
    </>
  )
}

export default Sidebar