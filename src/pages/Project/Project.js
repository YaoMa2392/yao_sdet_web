// eslint-disable-next-line
import {motion} from "framer-motion";
import "./Project.css";
import web from "../../assets/uptrillion_web.jpg";
import mobile from "../../assets/uptrillion_mobile.jpg";
import cloud from "../../assets/uptrillion_cloud.png";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import testTypes from "../../assets/testTypesDiagram.PNG";

const FadeInSection = ({children}: { children: React.ReactNode }) => {
    return (
        <motion.div
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.8, ease: "easeOut"}}
            className="fade-section"
        >
            {children}
        </motion.div>
    );
};

export default function Project() {
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

    // Handle changes in mouse position
    const handleMouseMove = (e) => {
        const {clientX: x, clientY: y} = e;
        setMousePosition({x, y});
    };

    // Set styles and animation effects for images
    const imageStyle = {
        transform: `translate(${(mousePosition.x - window.innerWidth / 2) / 30}px, ${(mousePosition.y - window.innerHeight / 2) / 30}px)`,
        transition: 'transform 0.1s ease-out', // Add smooth transition effect
    };

    return (
        <div className="container" onMouseMove={handleMouseMove}>
            {/* Hero Section */}
            <section className="hero-section">
                <motion.h1
                    initial={{opacity: 0, y: -30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1}}
                    className="hero-title"
                >
                    Uptrillion
                </motion.h1>
                <motion.p
                    initial={{opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1, delay: 0.3}}
                    className="hero-subtitle"
                >
                    The Cloud Commerce Platform
                </motion.p>
                <motion.img
                    src={cloud} // Use the image filename
                    alt="Cloud Icon"
                    className="cloud-icon"
                    style={imageStyle}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1, delay: 0.5}}
                />
            </section>

            {/* Project Details */}
            <section className="content-section">
                <FadeInSection>
                    <h2 className="project-section-title center-title">About Uptrillion</h2>
                    <p className="project-section-text">
                        Uptrillion, a subsidiary of PAX Technology, Inc., offers an integrated cloud solution for mobile
                        point of sale (mPOS) applications, catering to businesses across various platforms. Their
                        flagship product, the Hummingbird Payment Solution, enables Android devices to process
                        contactless transactions with major card networks, including Visa, MasterCard, American Express,
                        and Discover, without requiring PINs or signatures.
                        VISA PARTNER. This solution is compatible with Android 10 and above, ensuring a seamless payment
                        experience for businesses on the go.
                    </p>
                </FadeInSection>

                {/* Image Display Section */}
                <div className="project-image-container">
                    <a href="https://www.uptrillion.com/" target="_blank" rel="noopener noreferrer">
                        <img src={web} alt="Project screenshot 1" className="project-image-uptrillion"/>
                    </a>

                    <a href="https://apps.apple.com/us/app/posket/id1568716643" target="_blank"
                       rel="noopener noreferrer">
                        <img src={mobile} alt="Project screenshot 2" className="project-image-uptrillion"/>
                    </a>
                </div>
            </section>

            {/* Core Features Section */}
            <section className="core-features-section">
                <motion.h2
                    initial={{opacity: 0, y: -30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1}}
                    className="project-section-title"
                >
                    🚀 Core Features
                </motion.h2>
                <div className="core-features">
                    <Link to="/Project/Sales" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <motion.div
                            initial={{opacity: 0, y: 50}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.8, ease: "easeOut"}}
                            className="core-feature-card"
                            whileHover={{
                                scale: 1.1, // Zoom effect
                                transition: {type: "spring", stiffness: 300} // Spring animation
                            }}
                        >
                            <div className="core-feature-icon">💳</div>
                            <h3 className="feature-title">Sales & Checkout</h3>
                            <p className="feature-description">
                                Streamlined sales process with secure checkout and payment gateway integration.
                            </p>
                        </motion.div>
                    </Link>

                    <Link to="/Project/Payment" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <motion.div
                            initial={{opacity: 0, y: 50}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.8, ease: "easeOut"}}
                            className="core-feature-card"
                            whileHover={{
                                scale: 1.1, // Zoom effect
                                transition: {type: "spring", stiffness: 300}
                            }}
                        >
                            <div className="core-feature-icon">💰</div>
                            <h3 className="feature-title">Payment Processing</h3>
                            <p className="feature-description">
                                Secure, fast, and reliable payment processing with multiple payment methods.
                            </p>
                        </motion.div>
                    </Link>

                    <Link to="/Project/Inventory" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <motion.div
                            initial={{opacity: 0, y: 50}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.8, ease: "easeOut"}}
                            className="core-feature-card"
                            whileHover={{
                                scale: 1.1, // Zoom effect
                                transition: {type: "spring", stiffness: 300}
                            }}
                        >
                            <div className="core-feature-icon">📦</div>
                            <h3 className="feature-title">Inventory Management</h3>
                            <p className="feature-description">
                                Manage and track your product inventory in real-time for better control.
                            </p>
                        </motion.div>
                    </Link>

                    <Link to="/Project/Analytics" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <motion.div
                            initial={{opacity: 0, y: 50}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.8, ease: "easeOut"}}
                            className="core-feature-card"
                            whileHover={{
                                scale: 1.1, // Zoom effect
                                transition: {type: "spring", stiffness: 300}
                            }}
                        >
                            <div className="core-feature-icon">📊</div>
                            <h3 className="feature-title">Reporting & Analytics</h3>
                            <p className="feature-description">
                                Get insights and analytics to make data-driven decisions and optimize business performance.
                            </p>
                        </motion.div>
                    </Link>
                </div>
            </section>

            {/* Project Details */}
            <section className="content-section">
                <FadeInSection>
                    <h2 className="project-section-title center-title">🎯 Types of Testing Applied at Uptrillion</h2>
                </FadeInSection>

                <div className="project-image-container-testTpes">
                        <img src={testTypes} alt="Project screenshot 2" className="project-image-testTypes"/>
                </div>
            </section>
        </div>
    );
}
