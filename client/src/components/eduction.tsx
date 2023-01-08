// reactstrap components
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    Container,
    Row,
    Col,
} from "reactstrap";

function Education() {

    return (
        <>
            <Row>
                <Col className="ml-auto mr-auto" md="10">
                    <h2 className="title">Education</h2>
                    <br />
                    <Card className="card-plain card-blog">
                        <Row>
                            <Col md="5">
                                <div className="card-image">
                                    <img
                                        alt="..."
                                        className="img"
                                        src={"images/GBC.png"}
                                    />
                                </div>
                            </Col>
                            <Col md="7">
                                <CardBody>
                                    <h6 className="card-category text-info">Computer Program Analyst</h6>
                                    <CardTitle tag="h3">
                                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                            George Brown College, Toronto, ON
                                        </a>
                                    </CardTitle>
                                    <p className="card-description">
                                        Advanced Diploma - 2021 {" "}
                                        {/* <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                        Read More
                                    </a> */}
                                    </p>

                                </CardBody>
                            </Col>
                        </Row>
                    </Card>

                </Col>

            </Row>

        </>
    );
};

export default Education;