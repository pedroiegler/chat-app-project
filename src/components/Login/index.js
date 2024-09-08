import React from "react";
import { auth, provider } from "../../services/firebase";
import * as C from "./styles";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    const handleSignin = () => {
        auth.signInWithPopup(provider).catch(alert);
    };
    return (
        <C.Container>
            <C.Button onClick={handleSignin}>
                <FaGoogle size={20} style={{ marginRight: "10px" }} />
                Login com Google
            </C.Button>
        </C.Container>
    );
};

export default Login;