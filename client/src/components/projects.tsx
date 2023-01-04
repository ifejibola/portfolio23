
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardImg,
    CardTitle,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    Container,
    Row,
    Col,
} from "reactstrap";

function Projects() {
    return (
        <div className="project-4 section section-dark">
            <Container>
                <Row>
                    <Col className="ml-auto mr-auto text-center" md="8">
                        <h2 className="title">Some of My Projects</h2>
                        <h5 className="description">

                        </h5>
                    </Col>
                </Row>
                <div className="space-top" />
                <Row>
                    <Col className="ml-auto" md="5">
                        <Card
                            data-background="image"
                            style={{
                                backgroundImage:
                                    "url(" +
                                    ("images/ci_cd_pipeline.png") +
                                    ")",
                            }}
                        >
                            <div className="card-icon">
                                <i className="nc-icon nc-mobile" />
                            </div>
                        </Card>
                    </Col>
                    <Col className="mr-auto" md="5">
                        <Card className="card-plain">
                            <CardBody>
                                <h6 className="card-category">DevOps</h6>
                                <a href="https://github.com/ifejibola/Blog" onClick={(e) => e.preventDefault()}>
                                    <CardTitle tag="h3">
                                        CI/CD Pipeline (Jenkins, PERN Stack)
                                    </CardTitle>
                                </a>
                                <p className="card-description">
                                    Created a suite of plugins supporting continous delivery pipelines into Jenkins.
                                    I automated the development process for getting software from version control to production.
                                </p>
                                <CardFooter>
                                    <Button
                                        className="btn-neutral mr-1"
                                        color="link"
                                        href="https://github.com/ifejibola/Blog"
                                    // onClick={(e) => e.preventDefault()}
                                    >
                                        <i className="fa fa-book mr-1" />
                                        GITHUB
                                    </Button>
                                </CardFooter>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <br />
                <hr />
                <br />
                <Row>
                    <Col className="ml-auto" md="5">
                        <Card className="card-plain">
                            <CardBody>
                                <h6 className="card-category">REST API</h6>
                                <a href="https://github.com/ifejibola/KGBF" onClick={(e) => e.preventDefault()}>
                                    <CardTitle tag="h3">
                                        KingdomBoxing Fitness (PERN Stack)
                                    </CardTitle>
                                </a>
                                <p className="card-description">
                                    Ecommerce platform leveraging CRUD functionalities using REST API,
                                    stripe integration for processing credit card payments, and basic order management flow.
                                </p>
                                <CardFooter>
                                    <Button
                                        className="btn-neutral mr-1"
                                        color="link"
                                        href="https://github.com/ifejibola/KGBF"
                                    // onClick={(e) => e.preventDefault()}
                                    >
                                        <i className="fa fa-book mr-1" />
                                        GITHUB
                                    </Button>
                                </CardFooter>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col className="mr-auto" md="5">
                        <Card
                            data-background="image"
                            style={{
                                backgroundImage:
                                    "url(" +
                                    ("images/KBF.png") +
                                    ")",
                            }}
                        >
                            <div className="card-icon">
                                <i className="nc-icon nc-controller-modern" />
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Projects;