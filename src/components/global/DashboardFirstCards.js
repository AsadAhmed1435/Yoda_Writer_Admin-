import { React, useState, useEffect } from "react";
import userIcon from "../../assets/img/users-icon.png";
import caseIcon from "../../assets/img/case-icon.png";
import searchIcon from "../../assets/img/search-icon.png";
import subsIcon from "../../assets/img/subs-icon.png";

const DashboardFirstCards = ({data}) => {
    const [dashboardHeadlineCards, setDashboardHeadlineCards] = useState([{
        id: 0,
        icon: userIcon,
        total: "Total Users",
        numbers: 4,
    },
    {
        id: 1,
        icon: caseIcon,
        total: "Total Case",
        numbers: 84,
    },
    // {
    //     id: 2,
    //     icon: searchIcon,
    //     total: "Total Search",
    //     numbers: 5,
    // },
    {
        id: 3,
        icon: subsIcon,
        total: "Total Subscription",
        numbers: 4,
    },])
    // useEffect(() => {
    //     console.log("Data in DashboardFirstCards:", data);
    //     if (data) {
    //         setDashboardHeadlineCards([
    //             {
    //                 id: 0,
    //                 icon: userIcon,
    //                 total: "Total Users",
    //                 numbers: data?.TotalUsers,
    //             },
    //             {
    //                 id: 1,
    //                 icon: caseIcon,
    //                 total: "Total Case",
    //                 numbers: data?.TotalSubCategories,
    //             },
    //             // {
    //             //     id: 2,
    //             //     icon: searchIcon,
    //             //     total: "Total Search",
    //             //     numbers: 5,
    //             // },
    //             {
    //                 id: 3,
    //                 icon: subsIcon,
    //                 total: "Total Subscription",
    //                 numbers: data?.TotalSubscriptions,
    //             },
    //         ]);
    //     }
    // }, [data]);
return (
    <>
            {dashboardHeadlineCards.map((card) => (
                <div
                    key={card.id}
                    className="flex flex-col items-start justify-center  p-3 gap-y-3 w-[97%] sm:w-[46%] md:w-[48.7%] lg:w-[23%] xl:w-[23.7%] bg-[#F8F8F8] border rounded-lg py-4"
                >
                    <div className="p-1 bg-white"><img src={card.icon} className="h-5" alt=""/></div>
                    <h6>{card.total}</h6>
                    <div className="text-3xl font-semibold">{card.numbers}</div>
                </div>
            ))}
        </>
    );
};

export default DashboardFirstCards;
