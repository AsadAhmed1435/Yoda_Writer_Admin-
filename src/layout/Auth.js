import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Auth = (props) => {
    const history = useHistory();
    const { uid } = useSelector((state) => state.authUser);
    
    useEffect(() => {
        if (uid) {
            history.push("/dashboard");
        }
     
    }, [uid]);
    return (
        <>
            <div className="background-image">{props.children}</div>
        </>
    );
};

export default Auth;
