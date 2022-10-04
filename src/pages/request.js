import React from "react";
import "./request.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
        { label: 'Review and mark from same tutor' },
        { label: 'Review and mark from different tutor (Unit convenor selects)' },
        { label: 'Remark on specific section' },
        { label: 'Additional feedback / justification for marks' }
    ]
    const assignmentOptions = [
        { label: 'Assignment 1' },
        { label: 'Assignment 2' },
        { label: 'Assignment 3' },
        { label: 'Assignment 4' },
        { label: 'Assignment 5' }
    ]
    const communicationOptions = [
        { label: 'School email' },
        { label: 'SMS' },
        { label: 'School email and SMS' }
    ]

    return (
        <div>
            <Container className="requestBody" style={{ marginLeft: "0px", marginRight: "0px", maxWidth: "100%" }}>
                <h1 className="requestHeading">Request Review Form:</h1>
                <Row className="request">
                    <Row>
                        <p><b>Student ID:</b> {id}</p>
                        <p><b>Name:</b> {name}</p>
                        <p><b>Degree:</b> {degree}</p>
                        <br />
                    </Row>
                    <Row>
                        <Col>
                            <p><b>Review Type:</b> <Select options={reviewOptions} /> </p>
                            <p><b>Select Course:</b> <Select options={courseOptions} /> </p>
                            <p><b>Select Assignment:</b> <Select options={assignmentOptions} /> </p>
                            <p><b>Select Preffered Communication:</b> <Select options={communicationOptions} /> </p>
                            <p><b>100 word justification:</b> </p>
                            <textarea rows="10" cols="120"></textarea>
                            <br />
                            <br />
                            <button className="buttonSubmit">Submit Request</button>
                        </Col>
                        <Col>
                            {/*for error messages */}
                        </Col>
                    </Row>
                </Row>
            </Container>
        </div>
    );
}


export default Request;