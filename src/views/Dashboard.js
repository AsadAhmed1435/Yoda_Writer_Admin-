import DashboardFirstCards from "../components/global/DashboardFirstCards";
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch and useSelector
import { Container } from "reactstrap";
import Graph from "../components/global/Graph";
import OrderTable from "./OrderTable";
import PackagesTable from "../components/global/PackagesTable";
import { useEffect } from "react";
// import {
//     fetchFirstCardsData,
//     fetchGraphData,
// } from "../store/actions/dashboardActions";

const Dashboard = (props) => {
    // const dispatch = useDispatch(); // Get the dispatch function

    // const { firstCardsData, graphData } = useSelector(
    //     (state) => state.dashboard
    // );

    // // useEffect to dispatch actions when the component mounts
    // useEffect(() => {
    //     // Dispatch the actions to fetch data when the component mounts
    //     dispatch(fetchFirstCardsData());
    //     dispatch(fetchGraphData());
    // }, []);



    return (
        <>
            {/* DASHBOARD RESPONSIVE CONTAINER  */}
            <Container
                fluid
                className="ml-[2%] md:ml-[2%] w-[95%] sm:w-[96%]  px-4 py-4 z-0 flex flex-col items-start bg-white rounded-3xl"
            >
                <h1 className="mt-1 text-3xl font-semibold">Dashboard</h1>
                <p className="mt-2 text-base text-[#83878a]">
                    Welcome back, Super Admin{" "}
                </p>

	
	

			{/*First Four Cards Container */}	
 		 <div className='flex flex-wrap items-stretch w-full py-1 mt-3 gap-x-4 gap-y-6'>
		{/* <DashboardFirstCards data={firstCardsData.detail}/> */}
		<DashboardFirstCards data={4}/>
		</div>

		{/* Weekly Registration */}
		<div className='flex flex-col flex-wrap items-start justify-center w-full p-3 mt-3 bg-[#F8F8F8] border rounded-lg'>
		<h1 className='text-xl font-semibold '>Weekly Registration</h1>	
		<p className='mt-1 text-3xl font-semibold'>0</p>
		
			{/* Graph */}
			<div className='px-3  text-sm w-[100%] '>
				{/* <Graph data={graphData.detail}/> */}
				<Graph data={45}/>
			</div>
		</div>

			{/* BOTH TABLES */}
			<div className='flex flex-col flex-wrap items-start justify-between w-full mt-3 gap-y-4 lg:gap-y-0 both-tables lg:flex-row '>
			<OrderTable/>
			<PackagesTable/>					
			</div>



		</Container>
		</>
	);
};

export default Dashboard;
