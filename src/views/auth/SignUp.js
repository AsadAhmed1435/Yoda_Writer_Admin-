import React, { useEffect, useState } from "react";
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
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../store/actions/countryAction";
import Select from "react-select";
import { signup } from "../../store/actions/authAction";
const LogIn = () => {
    const dispatch = useDispatch();
    const { countries } = useSelector((state) => state.country);
    const { loading } = useSelector((state) => state.user);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [country, setCountry] = useState({});
    const initialState = {
        firstName: "",
        lastName: "",
        country: "",
        email: "",
        password: "",
        confirmPassword: "",
    };
    const [userDetail, setUserDetail] = useState(initialState);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetail((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const handleInputChange = (e) => {
        setUserDetail({
            ...userDetail,
            country: e.label,
        });
        setCountry({
            label: e.label,
            value: e.value,
        });
    };
    const submitHandler = () => {
        if (userDetail.password == userDetail.confirmPassword) {
            if (userDetail.country != "") {
                let obj = {
                    FirstName: userDetail.firstName,
                    LastName: userDetail.lastName,
                    Email: userDetail.email,
                    Password: userDetail.password,
                    Country: userDetail.country,
                    Type: "admin",
                };
                dispatch(
                    signup(obj, () => {
                        setUserDetail(initialState);
                        setCountry({});
                    })
                );
            } else {
                toast.error("Country Missing!");
            }
        } else {
            toast.error("Password did not match with confirm password!");
        }
    };
    useEffect(() => {
        dispatch(getCountries());
    }, []);
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
                        <h1 className="my-4 heading">Sign In</h1>
                        <p className="mb-4 text-secondary font-size ">
                            Already have an account?{" "}
                            <Link to="/login" className="text-primary "> Log In </Link>{" "}
                        </p>

                        <FormGroup className="font-size">
                            <Label
                                for="firstName"
                                className="pb-4 mb-2 font-weight-bold "
                            >
                                First Name{" "}
                                <span className="text-danger">*</span>
                            </Label>
                            <Input
                                type="text"
                                name="firstName"
                                id="firstName"
                                placeholder="First Name"
                                className="px-4 py-3 border-0 "
                                required
                                value={userDetail.firstName}
                                onChange={(e) => handleChange(e)}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label
                                for="lastName"
                                className="pb-4 mb-2 font-weight-bold "
                            >
                                Last Name <span className="text-danger">*</span>
                            </Label>
                            <Input
                                type="text"
                                name="lastName"
                                id="lastName"
                                placeholder="Last Name"
                                className="px-4 py-3 border-0 "
                                required
                                value={userDetail.lastName}
                                onChange={(e) => handleChange(e)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label
                                for="firstName"
                                className="pb-4 mb-2 font-weight-bold "
                            >
                                Country<span className="text-danger">*</span>
                            </Label>
                            <Select
                                className="countrySelect"
                                id="exampleCountry"
                                value={country}
                                onChange={(e) => {
                                    handleInputChange(e);
                                }}
                                options={countries}
                                placeholder="Select a country..."
                            />
                        </FormGroup>

                        <FormGroup>
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
                                value={userDetail.email}
                                onChange={(e) => handleChange(e)}
                            />
                        </FormGroup>

                        <FormGroup>
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
                                    value={userDetail.password}
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
                        </FormGroup>

                        <FormGroup>
                            <Label
                                for="confirmPassword"
                                className="pb-4 mb-2 font-weight-bold "
                            >
                                Confirm Password{" "}
                                <span className="text-danger">*</span>
                            </Label>
                            <div className="password-input d-flex align-items-center">
                                <Input
                                    type={
                                        showConfirmPassword
                                            ? "text"
                                            : "password"
                                    }
                                    name="confirmPassword"
                                    id="password"
                                    placeholder="Password"
                                    className="px-4 py-3 border-0 "
                                    required
                                    value={userDetail.confirmPassword}
                                    onChange={(e) => handleChange(e)}
                                />
                                <span
                                    className="mx-2 password-toggle"
                                    onClick={() =>
                                        setShowConfirmPassword(
                                            !showConfirmPassword
                                        )
                                    }
                                >
                                    {showConfirmPassword ? (
                                        <FaEyeSlash />
                                    ) : (
                                        <FaEye />
                                    )}
                                </span>
                            </div>
                        </FormGroup>

                        <Button
                            type="submit"
                            className="py-3 border-0 btn w-100 sign-up-button text-dark "
                            color="info"
                            disabled={loading}
                        >
                            {loading ? <Spinner size="sm" /> : "Sign Up"}
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default LogIn;
