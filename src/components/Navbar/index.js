import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import logo from "../../assets/alamar_logo.webp"; // 导入logo图片

const Navbar = () => {
    const [testMenuOpen, setTestMenuOpen] = useState(false);

    return (
        <div className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Alamar Logo" className="logo" />
            </div>
            <div className="navbar-links">
                <Link to="/">About Me</Link>
                {/*<Link to="/Project">Project</Link>*/}

                {/* 分级菜单：Project */}
                <div
                    className="dropdown"
                    onMouseEnter={() => setTestMenuOpen(true)}
                    onMouseLeave={() => setTestMenuOpen(false)}
                >
                    <Link to="/Project" className="dropdown-title">Project</Link>
                    {testMenuOpen && (
                        <div className="dropdown-menu">
                            {/*<Link to="/test/workflow">Workflow</Link>*/}
                            <Link to="/Project/Sales">Sales</Link>
                            <Link to="/Project/Payment">Payment</Link>
                            <Link to="/Project/Inventory">Inventory</Link>
                            <Link to="/Project/Analytics">Analytics</Link>
                        </div>
                    )}
                </div>

                {/* 分级菜单：Test */}
                <div
                    className="dropdown"
                    onMouseEnter={() => setTestMenuOpen(true)}
                    onMouseLeave={() => setTestMenuOpen(false)}
                >
                    <Link to="/Test" className="dropdown-title">Test</Link>
                    {testMenuOpen && (
                        <div className="dropdown-menu">
                            {/*<Link to="/test/workflow">Workflow</Link>*/}
                            <Link to="/Test/Design">Design Test</Link>
                            <Link to="/Test/Functionality">Functional Testing</Link>
                            <Link to="/Test/Regression">Regression Testing</Link>
                            <Link to="/Test/Performance">Performance Testing</Link>
                            <Link to="/Test/CICD">CI/CD</Link>
                            <Link to="/Test/Documentation">Documentation</Link>
                        </div>
                    )}
                </div>

                <Link to="/Challenges">Challenges</Link>
                <Link to="/Result">Result</Link>
                <Link to="/QA">Q&A</Link>
            </div>
        </div>
    );
};

export default Navbar;
