import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navber from '../../Shared/Header/Navber/Navber';

const Blogs = () => {
    return (

        <>
            {/* <div className='col-lg-6 col-sm-12 g-3 border-secondary bg-light p-2'></div> */}
            <Navber></Navber>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-sm-12 g-5 p-2 border'>
                        <h3 className='text-center'>Java Script Vs Node Js?</h3>
                        <div className='row' >
                            <div className='col-lg-6 col-md-6 col-sm-12 g-3 p-2'>
                                <h5>Java Script</h5>
                                <p> 1. Javascript can only be run in the browsers
                                    <br /><hr></hr>
                                    2. Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.
                                    <br /><hr></hr>
                                    3. Javascript is used in frontend development.
                                    <br /><hr></hr>
                                    4. It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++.
                                </p>
                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-12 g-3 p-2'>
                                <h5>Node Js</h5>
                                <p> 1. We can run Javascript outside the browser with the help of NodeJS.
                                    <br /><hr></hr>
                                    2. V8 is the Javascript engine inside of node.js that parses and runs Javascript.
                                    <br /><hr></hr>
                                    3. Nodejs is used in server-side development.
                                    <br /><hr></hr>
                                    4. Nodejs is written in C, C++ and Javascript.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-6 col-sm-12 g-5 p-2 border'>
                        <h3 className='text-center'>SQL Vs NoSQL</h3>
                        <div className='row' >
                            <div className='col-lg-6 col-md-6 col-sm-12 g-3 p-2'>
                                <h5>SQL</h5>
                                <p> 1. RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)
                                    <br /><hr></hr>
                                    2. These databases are not suited for hierarchical data storage.
                                    <br /><hr></hr>
                                    3. These databases are best suited for complex queries
                                    <br /><hr></hr>
                                    4. Vertically Scalable
                                </p>
                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-12 g-3 p-2'>
                                <h5>NoSQL</h5>
                                <p> 1. Non-relational or distributed database system.
                                    <br /><hr></hr>
                                    2. These databases are best suited for hierarchical data storage.
                                    <br /><hr></hr>
                                    3. These databases are not so good for complex queries
                                    <br /><hr></hr>
                                    4. Horizontally scalable
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6 col-sm-12 g-5 p-2 border'>
                        <h3 className='text-center'>When i use MongoDB or Node Js?</h3>
                        <div className='row' >
                            <div className='col-lg-6 col-md-6 col-sm-12 g-3 p-2'>
                                <h5>MongoDB</h5>
                                <p> 1. MongoDB is an open-source document database. MongoDB as a document database, MongoDB makes it easy for developers to store structured or unstructured data.
                                    <br /><hr></hr>
                                    2. Applications can then retrieve this information in a JSON format.
                                    <br /><hr></hr>
                                    3. These databases are best suited for complex queries
                                    <br /><hr></hr>
                                    4. MongoDB has always focused on providing developers with an excellent user experience
                                </p>
                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-12 g-3 p-2'>
                                <h5>Node Js</h5>
                                <p> 1. Knowing JavaScript gives a developer a good start with Node.js.
                                    <br /><hr></hr>
                                    2. When I need to know the backend development principles, the knowledge of the programming language will simplify things a lot.
                                    <br /><hr></hr>
                                    3. Node.js, being an open-source project, encourages support and contribution aimed at the improvement and adoption of the platform.
                                    <br /><hr></hr>
                                    4. Using Node.js allows organizing full-stack JavaScript development ensuring the speed and performance of the application
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Blogs;