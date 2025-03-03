import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import logo from "../../assets/alamar_logo.webp"; // 导入logo图片

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Alamar Logo" className="logo" /> {/* 使用 <img> 标签来显示 logo */}
            </div>
            <div className="navbar-links">
                <Link to="/">About Me</Link>
                <Link to="/Project">Project</Link>
                <Link to="/services">Challenges</Link>
                <Link to="/contact">Result</Link>
                <Link to="/contact">Q&A</Link>
            </div>
        </div>
    );
};

export default Navbar;
