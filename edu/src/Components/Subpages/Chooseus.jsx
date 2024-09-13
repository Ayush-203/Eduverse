import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { FaRegPlayCircle } from "react-icons/fa";
import chooseImg from "../../assets/why-choose-us.png";
import "./choose-us.css";

import ReactPlayer from "react-player";

const Chooseus = () => {
    const [showVideo, setShowVideo] = useState(false);
    return (
        <section className="choose">
            <div className="chooseus container">
                <Row>
                    <Col lg="6" md="6">
                        <div className="choose__content">
                            <h2>Why Choose Us</h2>
                            <p className="parag">You Don't Have To Struggle Alone, You've Got Our Assistance And Help.</p>
                            <p className="para">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Incidunt mollitia nostrum harum eos praesentium odit a sed quod
                                aut fugit. Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Reprehenderit omnis, culpa eligendi inventore perspiciatis
                                minus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Dolores cupiditate facilis provident quidem accusamus impedit
                                tenetur laboriosam debitis nisi eius!
                            </p>
                        </div>
                    </Col>

                    <Col lg="6" md="6">
                        <div className="choose__img">
                            {showVideo ? (
                                <ReactPlayer
                                    url="https://youtu.be/UOAgJxrGKzk?si=JAS5p1Iaa1Z8GYZd"
                                    controls
                                    width="100%"
                                    height="350px"
                                />
                            ) : (
                                <img src={chooseImg} alt="" className="w-100" />

                            )}

                            {!showVideo && (
                                <span className="play__icon">
                                    <i
                                        className="ri-play-circle-line"
                                        onClick={() => setShowVideo(!showVideo)}
                                    ></i>
                                </span>
                            )}
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default Chooseus;
