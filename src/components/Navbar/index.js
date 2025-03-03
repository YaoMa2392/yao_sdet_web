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
                <Link to="/Project">Project</Link>

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
                            <Link to="/test/design">Design Test</Link>
                            <Link to="/test/functional">Functional Testing</Link>
                            <Link to="/Test/Regression">Regression Testing</Link>
                            <Link to="/test/performance">Performance Testing</Link>
                            <Link to="/test/ci-cd">CI/CD</Link>
                            <Link to="/test/documentation">Documentation</Link>
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
