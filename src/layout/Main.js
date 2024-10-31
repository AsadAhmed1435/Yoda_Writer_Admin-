import { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import Sidebar from "../components/global/Sidebar";
import Header from "../components/header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Main = (props) => {
    const history = useHistory();
    const { uid } = useSelector((state) => state.authUser);
    const [menuToggle, setMenuToggle] = useState(true);
    const menuHandler = () => {
        setMenuToggle(!menuToggle);
    };
    
    useEffect(() => {
        if (!uid) {
            history.push("/");
        }
    }, [uid]);
    
    return (
        <>
            <div className="min-h-[100vh] w-full bg-[#F8F8F8]">
                <Header menuHandler={menuHandler} />
                <div className="flex w-full">
                    <Sidebar
                        menuToggle={menuToggle}
                        setMenuToggle={setMenuToggle}
                    />
                    <div className="flex flex-col w-full">{props.children}</div>
                </div>
            </div>
        </>
    );
};

export default Main;
