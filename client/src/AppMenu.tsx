import { Outlet } from "react-router";
import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
    Button,
    Collapse,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    NavbarBrand,
    Navbar,
    NavItem,
    Nav,
    Container,
    UncontrolledTooltip,
} from "reactstrap";
// core components
const AppMenu = () => {
    const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
    const [bodyClick, setBodyClick] = React.useState(false);
    const [collapseOpen, setCollapseOpen] = React.useState(false);
    React.useEffect(() => {
        let headroom = new Headroom(document.getElementById("navbar-main"));
        // initialise
        headroom.init();
        const updateNavbarColor = () => {
            if (
                document.documentElement.scrollTop > 499 ||
                document.body.scrollTop > 499
            ) {
                setNavbarColor("");
            } else if (
                document.documentElement.scrollTop < 500 ||
                document.body.scrollTop < 500
            ) {
                setNavbarColor("navbar-transparent");
            }
        };
        window.addEventListener("scroll", updateNavbarColor);
        return function cleanup() {
            window.removeEventListener("scroll", updateNavbarColor);
        };
    });
    return (
        <>
            {bodyClick ? (
                <div
                    id="bodyClick"
                    onClick={() => {
                        document.documentElement.classList.toggle("nav-open");
                        setBodyClick(false);
                        setCollapseOpen(false);
                    }}
                />
            ) : null}
            <Navbar
                className={classnames("fixed-top", navbarColor)}
                expand="lg"
                id="navbar-main"
            >
                <Container>
                    <div className="navbar-translate">
                        <NavbarBrand id="navbar-brand" to="/" tag={Link}>
                            Ife Ajibola
                        </NavbarBrand>
                        <UncontrolledTooltip placement="bottom" target="navbar-brand">
                            Ife Ajibola
                        </UncontrolledTooltip>
                        <button
                            className="navbar-toggler"
                            id="navigation"
                            type="button"
                            onClick={() => {
                                document.documentElement.classList.toggle("nav-open");
                                setBodyClick(true);
                                setCollapseOpen(true);
                            }}
                        >
                            {/* <span className="navbar-toggler-bar bar1" />
                            <span className="navbar-toggler-bar bar2" />
                            <span className="navbar-toggler-bar bar3" /> */}
                        </button>
                    </div>

                </Container>
            </Navbar>
            <Outlet />
        </>
    )
}

export default AppMenu;