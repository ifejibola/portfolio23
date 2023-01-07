/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row } from "reactstrap";

// core components

function Footer() {
    return (
        <>
            <footer className="footer footer-black footer-white">
                <Container>
                    <Row>
                        <nav className="footer-nav">
                            <ul>
                                <li>
                                    <a
                                        href="/"
                                        target="_blank"
                                        className="mr-1"
                                    >
                                        Ife Ajibola
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="mailto:ife.jibola@gmail.com"
                                        target="_blank"
                                        className="mr-1"
                                    >
                                        Email
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/ife-ajibola-22796611a/"
                                        target="_blank"
                                        className="mr-1"
                                    >
                                        LinkedIn
                                    </a>
                                </li>

                            </ul>
                        </nav>
                        <div className="credits ml-auto">
                            <span className="copyright">
                                © {new Date().getFullYear()}
                                , made with React
                            </span>
                        </div>
                    </Row>
                </Container>
            </footer>
        </>
    );
}

export default Footer;
