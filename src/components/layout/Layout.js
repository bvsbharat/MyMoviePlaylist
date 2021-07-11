import React from "react";
import PropTypes from "prop-types";
import Navbar from "../navbar";
import Footer from "../footer";

const Layout = ({ children }) => {
    return (
        <>
            <div className="absolute  w-full h-full">
                <Navbar />
                <div className="container mx-auto  h-full  ">
                    <div className=" mx-auto min-h-full ">{children}</div>
                    <Footer />
                </div>
            </div>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.element.isRequired,
};

export default Layout;
