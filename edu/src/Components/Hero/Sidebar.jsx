import React, { Children, useState } from "react";
import hamSvg from '../../assets/ham.svg'
import { NavLink } from "react-router-dom";
import './Sidebar.css'

const Sidebar = ({ children }) => {



    const [isOpen, setisOpen] = useState(false)
    const toggle = () => setisOpen(!isOpen);
    return (
        <>
            <div className="contain">
                <div style={{ width: isOpen ? "300px" : "50px" }} className="sidebar">
                    <div className="top">
                        <NavLink style={{ display: isOpen ? "block" : "none" }}>Courses</NavLink>
                        <img src={hamSvg} onClick={toggle} style={{ marginLeft: isOpen ? "50px" : "-8px" }} />
                    </div>
                    <h3 style={{ display: isOpen ? "block" : "none" }}><strong>Say Hello To!</strong></h3>
                    <p className="academic" style={{ display: isOpen ? "block" : "none" }}><strong>Academics</strong></p>
                    <div style={{ display: isOpen ? "block" : "none" }} className="streams">
                        <div className="accordion" id="accordionExample">

                            <div className="card">
                                <div className="card-header" id="headingOne">
                                    <h2 className="mb-0 stream">
                                        <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                            CSE
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div className="card-body">
                                        <div className="sem"><NavLink to={'/'} className={'sems'}>Semester 1</NavLink></div>
                                        <div className="sem"><NavLink to={'/'} className={'sems'}>Semester 2</NavLink></div>
                                        <div className="sem"><NavLink to={'/'} className={'sems'}>Semester 3</NavLink></div>
                                        <div className="sem"><NavLink to={'/'} className={'sems'}>Semester 4</NavLink></div>
                                        <div className="sem"><NavLink to={'/'} className={'sems'}>Semester 5</NavLink></div>
                                        <div className="sem"><NavLink to={'/'} className={'sems'}>Semester 6</NavLink></div>
                                        <div className="sem"><NavLink to={'/'} className={'sems'}>Semester 7</NavLink></div>
                                        <div className="sem"><NavLink to={'/'} className={'sems'}>Semester 8</NavLink></div>
                                    </div>
                                </div>
                            </div>



                            <div className="card">
                                <div className="card-header" id="headingTwo">
                                    <h2 className="mb-0 stream">
                                        <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            IT
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                    <div className="card-body">
                                        <div className="sem"><NavLink to={'/'} className={'sems'}>Semester 1</NavLink></div>
                                        <div className="sem"><NavLink to={'/'} className={'sems'}>Semester 2</NavLink></div>
                                        <div className="sem"><NavLink to={'/'} className={'sems'}>Semester 3</NavLink></div>
                                        <div className="sem"><NavLink to={'/'} className={'sems'}>Semester 4</NavLink></div>
                                        <div className="sem"><NavLink to={'/'} className={'sems'}>Semester 5</NavLink></div>
                                        <div className="sem"><NavLink to={'/It1'} className={'sems'}>Semester 6</NavLink></div>
                                        <div className="sem"><NavLink to={'/'} className={'sems'}>Semester 7</NavLink></div>
                                        <div className="sem"><NavLink to={'/'} className={'sems'}>Semester 8</NavLink></div>
                                    </div>
                                </div>
                            </div>



                            <div className="card">
                                <div className="card-header" id="headingThree">
                                    <h2 className="mb-0 stream">
                                        <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            ECE
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                    <div className="card-body">
                                        <div className="sem"><NavLink to={'/'} className={'sems'}>Semester 1</NavLink></div>
                                        <div className="sem"><NavLink to={'/'} className={'sems'}>Semester 2</NavLink></div>
                                        <div className="sem"><NavLink to={'/'} className={'sems'}>Semester 3</NavLink></div>
                                        <div className="sem"><NavLink to={'/'} className={'sems'}>Semester 4</NavLink></div>
                                        <div className="sem"><NavLink to={'/'} className={'sems'}>Semester 5</NavLink></div>
                                        <div className="sem"><NavLink to={'/'} className={'sems'}>Semester 6</NavLink></div>
                                        <div className="sem"><NavLink to={'/'} className={'sems'}>Semester 7</NavLink></div>
                                        <div className="sem"><NavLink to={'/'} className={'sems'}>Semester 8</NavLink></div>
                                    </div>
                                </div>
                            </div>

                            {/* OTHER COURSE  */}


                            <div className="other">

                                <p className="academic" style={{ display: isOpen ? "block" : "none" }}><strong>Developement</strong></p>
                                <div className="card">
                                    <div className="card-header" id="headingFour">
                                        <h2 className="mb-0 stream">
                                            <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                Full Stack
                                            </button>
                                        </h2>
                                    </div>
                                    <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <div className="sem"><NavLink to={'/Mern'} className={'sems'}>MERN Stack</NavLink></div>
                                            <div className="sem"><NavLink to={'/'} className={'sems'}>JAVA Full Stack</NavLink></div>
                                            <div className="sem"><NavLink to={'/'} className={'sems'}>PYTHON Full Stack</NavLink></div>
                                            <div className="sem"><NavLink to={'/'} className={'sems'}>GEN AI</NavLink></div>
                                            <div className="sem"><NavLink to={'/'} className={'sems'}>CLOUD BASED</NavLink></div>
                                            

                                        </div>
                                    </div>
                                </div>
                            </div>




                        </div>
                    </div>
                </div>
                <main>{children}</main>
            </div>
        </>
    );
}

export default Sidebar;
