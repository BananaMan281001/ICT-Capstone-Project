import React from "react";
import "./assignment.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useNavigate } from 'react-router-dom';
    
function Assignment(props) {
    const status = props.status;
    var variant;
    var progress;

    const navigate = useNavigate();

    const viewMore = () => {
        navigate('/view-more', {assignmentName: "hello"});
    };

    if (status === "Review submitted") {
        variant = "info";
        progress = 10;
    }
    if (status === "Review in progress") {
        variant = "warning";
        progress = 50;
    }
    if (status === "Review rejected") {
        variant = "danger";
        progress = 100;
    }
    if (status === "Review completed") {
        variant = "success";
        progress = 100;
    }

    return (
        <Container style={{ marginLeft: "0px", marginRight: "0px", maxWidth: "100%", padding: "1rem" }}>
            <Row className="assignment" style={{ margin: "25rem", marginTop: "0rem", marginBottom: "0rem" }}>
                <Col style={{ paddingTop: "12px" }}>
                    <p><b>Assignment Name:</b> {props.assignmentName}</p>
                    <p><b>Course:</b> {props.course}</p>
                    <p><b>Tutor Assigned:</b> {props.tutor}</p>
                    <p><b>Unit Convener:</b> {props.unitConvener}</p>
                    <p><b>Status:</b>  {props.status}</p>
                    <ProgressBar variant={variant} now={parseInt(progress)} style={{ width: "500px" }}/>
                    <p><b>ETA Date:</b> {props.eta}</p>
                </Col>
                <Col>
                    <button className="buttonViewMore" onClick={viewMore}>View More</button>
                </Col>
            </Row>
        </Container>
    );
}

export default Assignment;