import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="text-center text-white bg-dark mt-3">
                {/* <!-- Grid container --> */}
                <div className="container p-4">
                    {/* <!-- Section: Images --> */}
                    <section className="">
                        <div className="row">
                            <div className="col-lg-2 col-md-2 sm-6 g-1">
                                <div
                                    className="bg-image hover-overlay ripple shadow-1-strong rounded"
                                    data-ripple-color="light"
                                >
                                    <img
                                        src="https://i.ibb.co/kqKsBN6/signPen.png"
                                        className="w-75 rounded"
                                    />
                                    <Link to="#!">
                                        <div
                                            className="mask"

                                        ></div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 sm-6 g-1">
                                <div
                                    className="bg-image hover-overlay ripple shadow-1-strong rounded"
                                    data-ripple-color="light"
                                >
                                    <img
                                        src="https://i.ibb.co/jg80d6Y/school-Bags.png"
                                        className="w-75 rounded"
                                    />
                                    <Link to="#!">
                                        <div
                                            className="mask"
                                        ></div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 sm-6 g-1">
                                <div
                                    className="bg-image hover-overlay ripple shadow-1-strong rounded"
                                    data-ripple-color="light"
                                >
                                    <img
                                        src="https://i.ibb.co/r0y3bCD/Desk-Clender.png"
                                        className="w-75 rounded"
                                    />
                                    <Link to="#!">
                                        <div
                                            className="mask"></div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 sm-6 g-1">
                                <div
                                    className="bg-image hover-overlay ripple shadow-1-strong rounded"
                                    data-ripple-color="light"
                                >
                                    <img
                                        src="https://i.ibb.co/9rsv5Kd/giftBox.png"
                                        className="w-75 rounded"
                                    />
                                    <Link to="#!">
                                        <div
                                            className="mask"></div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 sm-6 g-1">
                                <div
                                    className="bg-image hover-overlay ripple shadow-1-strong rounded"
                                    data-ripple-color="light"
                                >
                                    <img
                                        src="https://i.ibb.co/M7pXmbb/color-Chalk.png"
                                        className="w-75 rounded"
                                    />
                                    <Link to="#!">
                                        <div
                                            className="mask"></div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 sm-6 g-1">
                                <div
                                    className="bg-image hover-overlay ripple shadow-1-strong rounded"
                                    data-ripple-color="light"
                                >
                                    <img
                                        src="https://i.ibb.co/tXpsfPM/books.png"
                                        className="w-75 rounded"
                                    />
                                    <Link to="#!">
                                        <div
                                            className="mask"></div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- Section: Images --> */}
                </div>
                {/* <!-- Grid container --> */}

                {/* <!-- Copyright --> */}
                <div className="text-center p-3">
                    All Rights Reserved By &copy; Stationary Wholesale BD | {(new Date().getFullYear())} :
                    <Link className="text-white" to="/"> Design by Md. Mazharul Islam Sohag</Link>
                </div>
                {/* <!-- Copyright --> */}
            </footer>
        </div>
    );
};

export default Footer;