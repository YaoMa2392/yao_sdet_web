import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/alamar_logo.webp";

const Navbar = () => {
    const [testMenuOpen, setTestMenuOpen] = useState(false);

    return (
        <div className="navbar">
            <div className="navbar-logo">
                <Link to="/alamar-pres">
                    <img src={logo} alt="ARGOTesting Logo" className="logo"/>
                </Link>
            </div>
            <div className="navbar-links">
                <Link to="/AboutMe">About Me</Link>
                <div
                    className="dropdown"
                    onMouseEnter={() => setTestMenuOpen(true)}
                    onMouseLeave={() => setTestMenuOpen(false)}
                >
                    <Link to="/Project" className="dropdown-title">Project</Link>
                    {testMenuOpen && (
                        <div className="dropdown-menu">
                            <Link to="/Project/Sales">Sales</Link>
                            <Link to="/Project/Payment">Payment</Link>
                            <Link to="/Project/Inventory">Inventory</Link>
                            <Link to="/Project/Analytics">Analytics</Link>
                        </div>
                    )}
                </div>

                <div
                    className="dropdown"
                    onMouseEnter={() => setTestMenuOpen(true)}
                    onMouseLeave={() => setTestMenuOpen(false)}
                >
                    <Link to="/Test" className="dropdown-title">Test</Link>
                    {testMenuOpen && (
                        <div className="dropdown-menu">
                            {/*<Link to="/test/workflow">Workflow</Link>*/}
                            <Link to="/Test/TestDesign">Test Design</Link>
                            <Link to="/Test/Regression">Regression Testing</Link>
                            <Link to="/Test/Functional">Functional Testing</Link>
                            <Link to="/Test/Performance">Performance Testing</Link>
                            <Link to="/Test/CICD">CI/CD</Link>
                            <Link to="/Test/Documentation">Documentation</Link>
                            <Link to="/Test/ARGOTesting">ARGO™ HT System Testing</Link>
                        </div>
                    )}
                </div>

                <Link to="/QA">Q&A</Link>
            </div>
        </div>
    );
};

export default Navbar;
