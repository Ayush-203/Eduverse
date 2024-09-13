import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./footer.css";
import user_icon from '../../assets/user_icon.png';
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

const footerQuickLinks = [
    {
        display: "Home",
        url: "#",
    },
    {
        display: "About US",
        url: "#",
    },

    {
        display: "Courses",
        url: "#",
    },

    {
        display: "Blog",
        url: "#",
    },
];

const footerInfoLinks = [
    {
        display: "Privacy Policy",
        url: "#",
    },
    {
        display: "Membership",
        url: "#",
    },

    {
        display: "Purchases Guide",
        url: "#",
    },

    {
        display: "Terms of Service",
        url: "#",
    },
];

const Footer = () => {
    return (
        <footer className="footer">

            <Container>
                <Row>
                    <Col lg="3" md="6" className="mb-4 footspan">
                        <h2 className=" d-flex align-items-center gap-1 text">
                            <img src={user_icon} alt="" className='logo'></img>
                        </h2>

                        <div className="follows text footspan">
                            <p className="mb-0">Follow us on social media</p>
                            <span>
                                {" "}
                                <a href="facebook.com">

                                    <FaFacebook />

                                </a>
                            </span>

                            <span>
                                {" "}
                                <a href="facebook.com">
                                    <FaLinkedin />
                                </a>
                            </span>

                            <span>
                                {" "}
                                <a href="facebook.com">
                                    <FaSquareTwitter />
                                </a>
                            </span>

                            <span>
                                {" "}
                                <a href="facebook.com">
                                    <MdAlternateEmail />
                                </a>
                            </span>
                        </div>
                    </Col>

                    <Col lg="3" md="6" className="mb-4 footspan">
                        <h6 className="fw-bold text">Explore</h6>
                        <ListGroup className="link__list">
                            {footerQuickLinks.map((item, index) => (
                                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                                    {" "}
                                    <a href={item.url}>{item.display}</a>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </Col>

                    <Col lg="3" md="6" className="mb-4 footspan">
                        <h6 className="fw-bold text">Information</h6>
                        <ListGroup className="link__list">
                            {footerInfoLinks.map((item, index) => (
                                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                                    {" "}
                                    <a href={item.url}>{item.display}</a>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </Col>

                    <Col lg="3" md="6">
                        <h6 className="fw-bold text">Get in Touch</h6>

                        <p className="foot">Address: FIEM, Sonarpur</p>
                        <p className="foot"> Phone: +91 9876543210 </p>
                        <p className="foot">Email: example@gmail.com</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
