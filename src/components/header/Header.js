import { React, useState, useEffect, useRef } from "react";
import { RiMenuFoldLine } from "react-icons/ri";
import logoImage from "../../assets/img/yodaWriteAiLogo.png";
import countryLogo from "../../assets/img/countryPic.webp";
import { CiBellOn } from "react-icons/ci";
import userLogo from "../../assets/img/headerUser.png";
import { IoIosArrowDown } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { GrPowerShutdown } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/actions/authAction";

const Header = ({ menuHandler }) => {
    const dispatch = useDispatch();
    const [toggleNav, setToggleNav] = useState(false);
    const navRef = useRef(null);
    
    const navCardHandler = () =>
        //NavCard Handler Toggler
        {
            setToggleNav(!toggleNav);
        };

        useEffect(() => {
            const handleClickOutside = (event) => {
              if (navRef.current && !navRef.current.contains(event.target)) {
                // Click outside the navigation bar, close it
                setToggleNav(false);
              }
            };
        
            document.addEventListener("click", handleClickOutside);
        
            // Cleanup the event listener on component unmount
            return () => {
              document.removeEventListener("click", handleClickOutside);
            };
          }, [navRef]);
        
    return (
        <div className="bg-[#F8F8F8] sticky top-0 z-50 flex items-center justify-between px-4 py-2 w-full left-nav-item ">
            {/* left items */}
            <div className="flex items-center gap-x-3 sm:gap-x-4 md:gap-x-7 ">
                <Link to='/'><img
                    className="block cursor-pointer logo-image"
                    src={logoImage}
                    alt=""
                /></Link>
                <RiMenuFoldLine
                    onClick={menuHandler}
                    size={23}
                    className="cursor-pointer"
                />
            </div>

            {/* Right items */}
            <div ref={navRef} className="flex items-center gap-x-4">
                <div className="overflow-hidden border cursor-pointer rounded-2xl">
                    <img src={countryLogo} className="h-[24px]" alt="" />
                </div>
                <CiBellOn className="cursor-pointer" size={24} />
                <button
                    onClick={navCardHandler}
                    className="flex items-center cursor-pointer gap-x-1 md:pr-4 lg:pr-4 xl:pr-4"
                >
                    <span>
                        <img src={userLogo} className="h-6 " alt="" />
                    </span>
                    <span className="font-semibold text-[#1e0a27] hidden lg:block">
                        Super Admin
                    </span>
                    <span>
                        <IoIosArrowDown size={13} />
                    </span>
                </button>

                {/* Nav Card Toggle */}
                <div
                    className={`${
                        toggleNav ? "block" : "hidden"
                    } bg-white flex flex-col items-start w-[97%] mr-[2%] sm:mr-0 sm:w-[155px] top-[11%] right-[0%]  sm:right-[3%] gap-y-2 text-[15px] justify-center rounded-xl  py-1 text-[#8d94a5] font-semibold fixed shadow-sm shadow-black`}
                >
                    <div className="flex flex-col items-center w-full py-1 border-b gap-y-1">
                        <h5 className="flex items-center gap-x-2 hover:bg-[#F8F8F8] hover:text-[#57595c] w-full px-4 py-2 transition-all duration-500 cursor-pointer">
                            <FaUser className="text-[#57595c]" />
                            <span>
                                <Link
                                    className="hover:text-[#8d94a5] hover:no-underline"
                                    to="/myprofile"
                                >
                                    Profile
                                </Link>
                            </span>
                        </h5>
                        <h5 className="flex items-center gap-x-2 hover:bg-[#F8F8F8] hover:text-[#57595c] w-full px-4 py-2 transition-all duration-500 cursor-pointer">
                            <IoSettingsOutline
                                className="text-[#57595c]"
                                size={15}
                            />
                            <span>
                                <Link
                                    className="hover:text-[#8d94a5] hover:no-underline"
                                    to="/settings/basic-setting"
                                >
                                    Settings
                                </Link>
                            </span>
                        </h5>
                    </div>
                    <h5
                        role="button"
                        onClick={() => {
                            dispatch(logout());
                        }}
                        className="flex items-center gap-x-2 hover:bg-[#F8F8F8] hover:text-[#57595c] w-full px-4  transition-all duration-500 cursor-pointer py-2"
                    >
                        <GrPowerShutdown className="text-[#57595c]" />{" "}
                        <span>Logout</span>
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default Header;
