import React from "react";

import {
    Button,
    NavItem,
    NavLink,
    Nav,
    Pagination,
    PaginationItem,
    PaginationLink,
    Progress,
    TabContent,
    TabPane,
    Container,
    Row,
    Col,
} from "reactstrap";

function Work() {

    const [hTabs, setHTabs] = React.useState("1");
    const [vTabs, setVTabs] = React.useState("1");
    const [pills, setPills] = React.useState("1");
    return (
        <>
            <Container className="tim-container">
                <div id="description-areas">
                    <div className="title">
                        <h3>Work Experience</h3>
                    </div>
                    <Row>
                        <Col md="7" sm="12">
                            <h4>
                                <small>BoomGaming | Full-Stack Developer </small>
                                <small>May 2022 - Dec 2022 </small>
                            </h4>
                            <Row>
                                <Col md="4" sm="4" xs="6">
                                    <div className="nav-tabs-navigation">
                                        <div className="nav-tabs-wrapper">
                                            <Nav
                                                className="flex-column nav-stacked"
                                                role="tablist"
                                                tabs
                                            >
                                                <NavItem>
                                                    <NavLink
                                                        className={vTabs === "1" ? "active" : ""}
                                                        onClick={() => {
                                                            setVTabs("1");
                                                        }}
                                                    >
                                                        *
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink
                                                        className={vTabs === "2" ? "active" : ""}
                                                        onClick={() => {
                                                            setVTabs("2");
                                                        }}
                                                    >
                                                        *
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink
                                                        className={vTabs === "3" ? "active" : ""}
                                                        onClick={() => {
                                                            setVTabs("3");
                                                        }}
                                                    >
                                                        *
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink
                                                        className={vTabs === "4" ? "active" : ""}
                                                        onClick={() => {
                                                            setVTabs("4");
                                                        }}
                                                    >
                                                        *
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink
                                                        className={vTabs === "5" ? "active" : ""}
                                                        onClick={() => {
                                                            setVTabs("5");
                                                        }}
                                                    >
                                                        *
                                                    </NavLink>
                                                </NavItem>
                                            </Nav>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="8" sm="8" xs="6">
                                    {/* Tab panes */}
                                    <TabContent activeTab={"vTabs" + vTabs}>
                                        <TabPane tabId="vTabs1">
                                            <p>
                                                Managed day-to-day operaDons of web-based gaming platform. This included monitoring server and platform performance,
                                                troubleshooting bugs in a Dmely manner, maintaining up-to-date Jira sprints,
                                                and releasing rewards to specific eligible customers daily
                                            </p>

                                        </TabPane>
                                        <TabPane tabId="vTabs2">
                                            <p>
                                                Automated discount functionality to reduce in-app currency prices during defined promotional periods and awarded the currency value to customers that transacted.
                                                This reduced a manual runDme of 24 hours to a few minutes, requiring limited user inputs
                                            </p>
                                        </TabPane>
                                        <TabPane tabId="vTabs3">
                                            <p>
                                                Ideated and developed platform features to improve front and back-end operations, such as retrieving and organizing key customer metrics and atrributes to facilitate customer segmentaDon for targeted marketing efforts
                                            </p>

                                        </TabPane>
                                        <TabPane tabId="vTabs4">
                                            <p>
                                                Automated gaming event leaderboards, querying MySQL databases and back-end rest APIs based on user inputs. This was leveraged to determine end-user reward distribution, enabling immediate delivery and reducing 30-minutes of manual runtime daily
                                            </p>
                                        </TabPane>
                                        <TabPane tabId="vTabs5">
                                            <p>
                                                Facilitated analytical assessment of week-over-week sales by leveraging MySQL to transpose sales data into digestable metrics to be reviewed by the business operations team
                                            </p>
                                        </TabPane>
                                    </TabContent>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default Work;