import React from "react";
import "./Register.css";
import EventRegistration from "../../components/EventRegistration/EventRegistration";
import { BackgroundBeams } from "../../components/ui/background-beams";

const Register = () => {
    return (
        <div className="register-wrapper">
            <div className="fixed-ui">
                <BackgroundBeams />
            </div>
            <EventRegistration />
        </div>
    );
};

export default Register;
