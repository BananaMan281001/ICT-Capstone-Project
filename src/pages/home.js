import React from "react";
import "./home.css"
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const navigateToRequest = () => {
        navigate('/request');
    };

    return (
        <div className="homeBody">
            <h1 className="homeHeading">Welcome!</h1>
            <p>
                This is the UC Marking and Moderation System. This system is designed for students who believe they deserve extra marks for their assignment and want a more formal process than an exchange on emails. This system features many tools such as:
            </p>
            <ul>
                <li>Looking at the status of your assignments for review in the Assignment tab. Here you can find information on your assignment, whose reviewing it, and course information</li>
                <li>Submit a request for an assignment you would like reviewed in the Request tab.</li>
            </ul>
            <p>
                If you have any further questions or need help, contact our support team at <a href="https://animixplay.to/v1/initial-d-first-stage/ep22">support.team.woohoo@university.canberra.edu.au</a>
            </p>
            <br/>
            <button onClick={navigateToRequest} className="startRequestButton">Start Request</button>
        </div>
    );
}

export default Home;