import React, { useState } from "react";
import {
    Container,
    Row,
    Col,
    Form,
    Label,
    FormGroup,
    Input,
    Button,
    Spinner,
} from "reactstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/actions/authAction";

const LogIn = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.user);
    const [showPassword, setShowPassword] = useState(false);
    const [loginDetail, setLoginDetail] = useState({
        email: "",
        password: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginDetail((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const submitHandler = () => {
        let obj = {
            Email: loginDetail.email,
            Password: loginDetail.password,
        };
        dispatch(login(obj));
    };
    return (
        <Container fluid className="py-4">
            <Row className="mx-auto">
                <Col className="p-0 text-dark">
                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            submitHandler();
                        }}
                        className="px-4 py-4 mx-auto bg-white input-from form-container px-md-5"
                    >
                        <img src={logo} alt="Logo" className="logo" />
                        <h1 className="my-4 heading">Log In</h1>
                        <p className="mb-4 text-secondary font-size ">
                            Don't have an account?{" "}
                            <Link to="/signup"> Sign Up </Link>{" "}
                        </p>
                        <FormGroup className="font-size">
                            <Label
                                for="email"
                                className="pb-4 mb-2 font-weight-bold "
                            >
                                Email <span className="text-danger">*</span>
                            </Label>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                className="px-4 py-3 border-0 "
                                required
                                value={loginDetail.email}
                                onChange={(e) => handleChange(e)}
                            />
                        </FormGroup>
                        <FormGroup className="">
                            <Label
                                for="password"
                                className="pb-4 mb-2 font-weight-bold "
                            >
                                Password <span className="text-danger">*</span>
                            </Label>
                            <div className="password-input d-flex align-items-center">
                                <Input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    className="px-4 py-3 border-0 "
                                    required
                                    value={loginDetail.password}
                                    onChange={(e) => handleChange(e)}
                                />
                                <span
                                    className="mx-2 password-toggle"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                            <p className="py-4 mb-2">
                                {" "}
                                <a
                                    href="#"
                                    target="_blank"
                                    className="text-danger "
                                >
                                    {" "}
                                    Forget Password ?
                                </a>{" "}
                            </p>
                        </FormGroup>{" "}
                        <Button
                            type="submit"
                            className="py-3 border-0 btn w-100 sign-up-button text-dark "
                            color="info"
                            disabled={loading}
                        >
                            {loading ? <Spinner size="sm" /> : "Login"}
                        </Button>{" "}
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default LogIn;
