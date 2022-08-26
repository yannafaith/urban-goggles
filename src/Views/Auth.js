import React from "react";
import styled from "styled-components";
import RegisterForm from "../Components/RegisterForm";
import LoginForm from "../Components/LoginForm";
import {Row} from "antd";
import axios from "axios";

const AuthWrapper = styled.div`{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 92vh;
}`

const AuthForms = styled(Row)`{
    width: 30%;
}`

const Auth = () => {
    const username = localStorage.getItem("username") || null;

    axios.defaults.baseURL = 'https://yanna-yobot.herokuapp.com/api/';
    axios.defaults.headers.common['Authorization'] = localStorage.getItem("token") || null;

    return (
        <AuthWrapper>
            {
                username ? <h1>You are already logged in</h1> :
                <AuthForms justify={"space-around"} align={"middle"}>
                    <RegisterForm />
                    <LoginForm />
                </AuthForms>
            }
        </AuthWrapper>
    );
}

export default Auth;

