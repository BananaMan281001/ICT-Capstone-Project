import React from "react";
import "./request.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Select from 'react-select'

function Request() {
    const id = "u3216411"; //modify to pull data from UC database
    const name = "Ethan";
    const degree = "Bachelor of Software Engineering";
    const courseOptions = [
        { value: 'databaseDesign', label: 'Database Design' },
        { value: 'introductiontoIT', label: 'Introduction to IT' },
        { value: 'ppit', label: 'Professional Practice in IT' },
        { value: 'networkEngineering', label: 'Introduction to Network Engineering' }
    ]
    const reviewOptions = [
        { value: '1', label: 'Review and mark from same tutor' },
        { value: '2', label: 'Review and mark from different tutor (Unit convenor selects)' },
        { value: '3', label: 'Remark on specific section' },
        { value: '4', label: 'Additional feedback / justification for marks' }
    ]
    const assignmentOptions = [
        { value: '1', label: 'Assignment 1' },
        { value: '2', label: 'Assignment 2' },
        { value: '3', label: 'Assignment 3' },
        { value: '4', label: 'Assignment 4' },
        { value: '5', label: 'Assignment 5' }
    ]
    const communicationOptions = [
        { value: 'email', label: 'School email' },
        { value: 'sms', label: 'SMS' },
        { value: 'both', label: 'School email and SMS' }
    ]

    return (
        <div style={{ margin: "2rem", height: "100vh" }}>
            <Container className="requestBody" style={{ marginLeft: "0px", marginRight: "0px", maxWidth: "100%", padding: "0px"}}>
                <h1 className="requestHeading">Request Review Form:</h1>
                <Row className="request" style={{margin: "30rem", marginTop: "2rem", marginBottom: "2rem"}}>
                    <Row style={{ padding: "12px" }}>
                        <p><b>Student ID:</b> {id}</p>
                        <p><b>Name:</b> {name}</p>
                        <p><b>Degree:</b> {degree}</p>
                        <br />
                        <p><b>Review Type:</b> <Select options={reviewOptions} /> </p>
                        <p><b>Select Course:</b> <Select options={courseOptions} /> </p>
                        <p><b>Select Assignment:</b> <Select options={assignmentOptions} /> </p>
                        <p><b>Select Preffered Communication:</b> <Select options={communicationOptions} /> </p>
                        <p><b>100 word justification:</b><textarea rows="10" cols="101" style={{  }}></textarea> </p>
                        
                        <br />
                        <br />
                        <button className="buttonSubmit" style={{ width: "200px" }}>Submit Request</button>
                    </Row>
                </Row>
            </Container>
        </div>
    );
}


export default Request;