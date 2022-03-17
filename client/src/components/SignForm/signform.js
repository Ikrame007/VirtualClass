import React, { Fragment, useState } from "react";
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

function SignForm(){
    const [panelActive, setPanelActive] = useState(false);
    const onSignInEvent = () => {
        setPanelActive(false);
    };

    const onSignUpEvent = () => {
        setPanelActive(true);
    };

    // const [role, setRole] = useState("Learner");

    // const handleChange = (event) => {
    //   setRole(event.target.value)
    // }

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
                {/* <div value={role} onChange={handleChange}>
                    <input type="radio" value="Learner" name="role" /> Learner
                    <input type="radio" value="Instructor" name="role" /> Instructor
                </div> */}
                <Input type="text" placeholder="First Name" />
                <Input type="text" placeholder="Last Name" />
                <Input type="text" placeholder="Email" />
                <Input type="text" placeholder="Password" />
                <br></br>
                <Button>Sign Up</Button>
            </Form>
            </FormContainer>
            <FormContainer className="sign-in-container">
            <Form action="#">
                <Head>Sign In</Head><br></br>
                <Input type="text" placeholder="Email" />
                <Input type="text" placeholder="Password" />
                <br></br>
                <Button>Sign In</Button>
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
                <img src={register} width="60%" alt="Learner"/>
                </OverlayPanel>
                <OverlayPanel className="overlay-right">
                <Head>New here ?</Head>
                <Text>Enter your personal details and start journey with us</Text>
                <Button className="ghost" id="signUp" onClick={onSignUpEvent}>
                    Sign Up
                </Button><br></br><br></br>
                <img src={login} width="60%" alt="Login"/>
                </OverlayPanel>
            </Overlay>
            </OverlayContainer>
        </Container>
        </Fragment>
    );
}
  export default SignForm