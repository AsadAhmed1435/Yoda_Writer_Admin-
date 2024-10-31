import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io'; 
import { MdOutlineDashboard } from "react-icons/md";
import { LuFolderClosed } from "react-icons/lu";
import { FiPackage } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { Link, useLocation } from 'react-router-dom';

const SidebarContain = ({ menuToggle }) => {
  const [versionHover, setVersionHover] = useState(false);
  const location = useLocation();
  const [sidebarContain, setSidebarContain] = useState([        //Array of Object for All SideBar Contains
    {
      id: 0,
      heading: 'Dashboard',
      icon: MdOutlineDashboard,
      type: 'dashboard',
      isHover: false,
      link: '/',
      toggle: true,

    },
    {
      id: 1,
      heading: 'Category',
      icon: LuFolderClosed,
      type: 'category',
      toggle: false,
      isHover: false,
      subHeadingOne: 'Category',
      subHeadingTwo: 'Sub Category',
      link: '/category',
      subLink: '/subcategory',
    },
    {
      id: 2,
      heading: 'Subscription',
      icon: LuFolderClosed,
      type: 'subs',
      toggle: false,
      isHover: false,
      subHeadingOne: 'All Orders',
      subHeadingTwo: 'User Packages',
      link: '/allorders',
      subLink: '/userpackages',
      
    },
    {
      id: 3,
      heading: 'Packages', 
      icon: FiPackage,
      type: 'packages',
      isHover: false,
      link: '/packages',
      toggle: false,

    },
    {
      id: 4,
      heading: 'Settings',
      icon: IoSettingsOutline,
      type: 'settings',
      isHover: false,
      link: '/settings/basic-setting',
      toggle: false,

    },
    {
      id: 5,
      heading: 'Users',
      icon: FiPackage,
      type: 'users',
      isHover: false,
      link: '/users',
      toggle: false,

    },
    {
      id: 6,
      heading: 'Profile',
      icon: CgProfile,
      type: 'profile',
      toggle: false,
      isHover: false,
      subHeadingOne: 'My Profile',
      subHeadingTwo: 'Change Password',
      link: '/myprofile',
      subLink: '/changepassword',
      toggle: false,

    },
  ]);


    // For Contain Toggler (it basically sets false or true toggle)
    const containToggleHandler = (containType) => {
        setVersionHover(false);
        setSidebarContain(prevState =>
        prevState.map(item => ({
          ...item,
          toggle: item.type === containType ? !item.toggle : false,
        }))
        );
    };


    // for Hover contain (it baically sets false or true IsHover)
    const hoverHandler = (item) => {
        setSidebarContain(prevState =>
        prevState.map(i => ({
          ...i,
          isHover: i.type === item,
        }))
        );
        setVersionHover(item === 'version');
    };

  return (
    <>
      {/* Contain */}
    
      {sidebarContain.map((contain) => (
        <div
          className={`${contain.id === 6 || contain.id === 2 || contain.id === 1 ? (contain.toggle ? 'max-h-[100px]' : 'max-h-[24px]') : ''} pl-1 overflow-hidden  flex flex-col font-[600] ease-in-out transition-max-height duration-500  w-full `}>
          <button
            onMouseEnter={() => !menuToggle && hoverHandler(contain.type)}
            onClick={() => containToggleHandler(contain.type)}
            className={`${contain.id === 6 || contain.id === 2 || contain.id === 1 ? (contain.toggle ? 'text-[#444546]' : 'text-[#83878a]') : ''} flex items-center justify-between w-full cursor-pointer hover:text-blue-500`}>
            <Link className="hover:no-underline hover:text-blue-500" to={contain.id === 6 || contain.id === 2 || contain.id === 1 ? null : contain.link} ><div className={`${contain.id === 6 || contain.id === 2 || contain.id === 1 ? '' : contain.link === location.pathname  ? 'text-blue-500' : 'ml-1'} z-30 flex items-center gap-x-2`}>
              <contain.icon className={`${contain.id === 6 || contain.id === 2 || contain.id === 1 ? 'ml-1' : contain.link === location.pathname ? 'p-1 bg-blue-100' : ''}`} size={contain.id === 6 || contain.id === 2 || contain.id === 1 ? '' : contain.link === location.pathname ? 27 : 18} />
              <span className={`${menuToggle ? 'block' : 'hidden'}`}>{contain.heading}</span>
            </div></Link>
            <div className={`${menuToggle ? 'block' : 'hidden'}`}>
            {contain.id === 6 || contain.id === 2 || contain.id === 1 ? (
             <IoIosArrowDown className={`${contain.toggle ? '-rotate-180' : 'rotate-0'} transite-rotate duration-300`} size={13}/>) : null}</div>
          </button>



        {/* Contain Popup */}

          {contain.id === 6 || contain.id === 2 || contain.id === 1 ? (
            <div className={`${menuToggle ? 'block' : 'hidden'} text-sm font-semibold flex flex-col items-start justify-start w-full px-3 pt-4 gap-y-3`}>
              <div className={` ${contain.link === location.pathname  ? 'text-blue-500' : ''} relative before:inline-block before:w-[6px] before:h-[6px] before:bg-[#666869] before:rounded-full before:mr-[6px] content-[''] w-full cursor-pointer  hover:before:bg-blue-500 hover:text-blue-500`}>
                <Link className="hover:no-underline hover:text-blue-500" to={contain.link}>{contain.subHeadingOne}</Link>
              </div>
              <div className={`${contain.subLink === location.pathname  ? 'text-blue-500' : ''} relative before:inline-block before:w-[6px] before:h-[6px] before:bg-[#666869] before:rounded-full  before:mr-[6px] content-[''] w-full cursor-pointer  hover:before:bg-blue-500 hover:text-blue-500`}>
              <Link className="hover:no-underline hover:text-blue-500" to={contain.subLink}>{contain.subHeadingTwo}</Link>
              </div>
            </div>
          ) : ''}

        {/* Hover Contain */}

          {contain.isHover ? (
           <Link className="hover:no-underline hover:text-blue-500" to={contain.id === 6 || contain.id === 2 || contain.id === 1 ? null : contain.link}> <div onMouseLeave={() => hoverHandler()} className={`${menuToggle ? 'hidden' : ''} 
            ${contain.id === 0 ? 'top-[12%]' : contain.id === 1 ? 'top-[19%]' : contain.id === 2 ? 'top-[25%]' : contain.id === 3 ? 'top-[32%]' 
            : contain.id === 4 ? 'top-[38%]' : contain.id === 5 ? 'top-[45%]' : contain.id === 6 ? 'top-[52%]' : 'top-[58%]'} 
            gap-y-2 flex flex-col justify-center text-blue-500 fixed z-20  bg-[#F8F8F8] left-[1%] py-3 font-semibold pl-20 pr-12 text-center`}>
               <h1 className={`${contain.id === 6 ? 'mr-14' : 'mr-6'}`}>{contain.heading}</h1>
              {contain.id === 6 || contain.id === 2 || contain.id === 1 ? (
                 <div className='flex flex-col gap-y-1 text-[#444546] text-sm'>
               <Link className="hover:no-underline hover:text-blue-500" to={contain.link}> <div className=" relative before:inline-block before:w-[6px] before:h-[6px] before:bg-[#666869] before:rounded-full before:mr-2 content-['']  w-full cursor-pointer ">{contain.subHeadingOne}</div></Link>
               <Link className="hover:no-underline hover:text-blue-500" to={contain.subLink}> <div className={`${contain.id === 6 ? 'ml-[23px]' : 'ml-[16px]'}  relative before:inline-block before:w-[6px] before:h-[6px] before:bg-[#666869] before:rounded-full before:mr-2 content-[""] w-full cursor-pointer `}>{contain.subHeadingTwo}</div></Link>
              </div> ) : ''}
            </div></Link>
          ) : ''}
        </div>
      ))}


       {/* Version */}

       <h6 onMouseEnter={() => !menuToggle &&  hoverHandler('version')}
           className={`${menuToggle ? 'text-center' : 'text-left'} pl-1 w-full py-3 font-[600] hover:text-blue-500 transition-all ml-1 duration-200 cursor-pointer gap-x-2`}>
              <span className={`${menuToggle ? 'inline-block' : 'hidden'}`}>Current Version : </span> 1.1
              {versionHover ? 
                <div onMouseLeave={() => hoverHandler()} className={`${menuToggle ? 'hidden' : ''} text-blue-500 fixed z-20 top-[61%] bg-[#F8F8F8] left-[1%] py-3 font-semibold w-[280px] pl-3 text-center`}>
                  Current Version : 1.1
               </div> : ''}
            </h6>
    </>
  );
};

export default SidebarContain;
