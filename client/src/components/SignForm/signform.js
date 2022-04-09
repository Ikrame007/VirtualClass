import React, { Fragment, useState } from "react";
import { connect } from 'react-redux';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../../redux/actions/authActions";
import { signUp } from "../../redux/actions/authActions";

import login from '../../assets/images/login.svg';
import register from '../../assets/images/register.svg';
import {
    GlobalStyles,
    Head,
    Text,
    Input,
    Form,
    Container,
    FormContainer,
    Button,
    OverlayContainer,
    OverlayPanel,
    Overlay
} from "./signform.style.js";

function SignForm(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSignInClick = (event) => {
        event.preventDefault();
        const choosenRole = localStorage.getItem("USER-ROLE");
        dispatch(signIn({ email, password, choosenRole }, navigate));
    };
    const handleSignUpClick = (event) => {
        event.preventDefault();
        const role = localStorage.getItem("USER-ROLE");
        dispatch(signUp({ firstName, lastName, email, password, role }, navigate));
    };

    const [panelActive, setPanelActive] = useState(false);
    const onSignInEvent = () => {
        setPanelActive(false);
    };

    const onSignUpEvent = () => {
        setPanelActive(true);
    };


    return (
        <Fragment>
            <GlobalStyles />
            <Container
                id="container"
                className={`${panelActive ? "right-panel-active" : ""}`}
            >
                <FormContainer className="sign-up-container">
                    <Form action="#" onSubmit={e => e.preventDefault()}>
                        <Head>Create Account</Head><br></br>
                        <Input type="text"
                            value={firstName}
                            onChange={(event) => {
                                setFirstName(event.target.value);
                            }} placeholder="First Name" />
                        <Input type="text" value={lastName}
                            onChange={(event) => {
                                setLastName(event.target.value);
                            }} placeholder="Last Name" />

                        {props.error ? <Input type="text" style={{ 'color': 'red' }} value={email}
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }} placeholder="Email" /> : <Input type="text" value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }} placeholder="Email" />}

                        <Input type="password" value={password}
                            onChange={(event) => {
                                setPassword(event.target.value);
                            }} placeholder="Password" />
                        <br></br>
                        <Button onClick={handleSignUpClick}>Sign Up</Button>
                        {props.error ? <span style={{ 'color': 'red' }}>User already exist! Please login.</span> : null}
                    </Form>
                </FormContainer>
                <FormContainer className="sign-in-container">
                    <Form action="#">
                        <Head>Sign In</Head><br></br>

                        <Input type="text"
                            placeholder="Email"
                            value={email}
                            onChange={handleEmailChange} />
                        <Input type="password"
                            placeholder="Password"
                            value={password}
                            onChange={handlePasswordChange} />


                        <br></br>
                        <Button onClick={handleSignInClick}>Sign In</Button>
                        {props.error ? <span style={{ 'color': 'red' }}>Login failed. Please check your role Or register for another account!</span> : null}

                    </Form>
                </FormContainer>
                <OverlayContainer>
                    <Overlay>
                        <OverlayPanel className="overlay-left">
                            <Head>One of us ?</Head>
                            <Text>
                                Login with your personal info
                            </Text>
                            <Button className="ghost" id="signIn" onClick={onSignInEvent}>
                                Sign In
                            </Button><br></br><br></br>
                            <img src={register} width="60%" alt="Learner" />
                        </OverlayPanel>
                        <OverlayPanel className="overlay-right">
                            <Head>New here ?</Head>
                            <Text>Enter your personal details and start journey with us</Text>
                            <Button className="ghost" id="signUp" onClick={onSignUpEvent}>
                                Sign Up
                            </Button><br></br><br></br>
                            <img src={login} width="60%" alt="Login" />
                        </OverlayPanel>
                    </Overlay>
                </OverlayContainer>
            </Container>
        </Fragment>
    );
}

const mapStateToProps = (state) => ({
    currentRole: state.auth.currentRole,
    error: state.auth.error,
})
export default connect(mapStateToProps)(SignForm);