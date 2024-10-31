import { Container } from 'reactstrap'
import { MdKeyboardArrowLeft } from "react-icons/md";
import Language from './settingsMiniComponents/Language';
import Sidebar from './settingsMiniComponents/Sidebar';


const OpenAiPage = () => {
 
  return (

    <Container fluid className='ml-[2%] md:ml-[2%] w-[95%] sm:w-[96%]  px-4 py-4 z-0 flex flex-col items-start bg-white rounded-3xl'>
          {/* Heading */}
          <div className='flex flex-col w-full py-3 pb-4 border-b sm:items-center sm:justify-between sm:flex-row'>
          <h2 className='text-2xl font-semibold'>Settings</h2>
          <div className='flex items-center gap-x-3'>
            <h4 className='text-[#767878]'>Dashboard</h4>
            <h4 className='flex items-center'><MdKeyboardArrowLeft className='rotate-180 text-[#767878]' size={18} /><span className='ml-1 '>Settings</span><MdKeyboardArrowLeft className='rotate-180 text-[#767878]' size={18} /><span className='ml-1 font-semibold'>API Setting</span></h4>
          </div>
        </div>

        {/*Settings Contain */}
        <div className='flex flex-col w-full mt-4 item-start xl:flex-row gap-x-6 '>
        

        {/* Settings SideBar */}
        <div className='flex flex-col border w-full xl:w-[30%] rounded-lg  p-4 text-[#767878]'>
          <Sidebar number={4}/>
        </div>

        {/* Side Content */}
        <div className='w-full border rounded-lg bg-[#F8F8F8] px-4 pb-3'>

        </div>
        

        
        </div>
    </Container>

  )
}

export default OpenAiPage