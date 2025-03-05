import { motion } from "framer-motion";
import "./Functionality.css";
import web from "../../../assets/uptrillion_web.jpg";
import mobile from "../../../assets/uptrillion_mobile.jpg";
import cloud from "../../../assets/uptrillion_cloud.png";
import React, {useState} from "react";
import download from "../../../assets/download.webp"

const FadeInSection = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fade-section"
        >
            {children}
        </motion.div>
    );
};

export default function Functionality() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // 处理鼠标位置的变化
    const handleMouseMove = (e) => {
        const { clientX: x, clientY: y } = e;
        setMousePosition({ x, y });
    };

    // 设置图片的样式和动画效果
    const imageStyle = {
        transform: `translate(${(mousePosition.x - window.innerWidth / 2) / 30}px, ${(mousePosition.y - window.innerHeight / 2) / 30}px)`,
        transition: 'transform 0.1s ease-out', // 添加平滑效果
    };

    return (
        <div className="functionality-container" onMouseMove={handleMouseMove}>
            {/* Hero Section */}
            <section className="functionality-hero-section">
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="functionality-hero-title"
                >
                    Functionality Testing
                </motion.h1>

                <motion.img
                    src={cloud} // 使用图片文件名
                    alt="Cloud Icon"
                    className="cloud-icon"
                    style={imageStyle}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                />
            </section>

            {/* Product Section */}
            <section className="payment-section">
                <motion.div
                    className="payment-description"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <p><strong>Revolutionizing POS Payments</strong></p>
                    <p>
                        Uptrillion is a cloud-based payment platform that enables merchants to seamlessly integrate
                        payment processing directly into their applications. This integration eliminates the need for
                        traditional POS terminals and computers, streamlining the payment process and enhancing
                        operational efficiency. Merchants and resellers can initiate payments directly through the app,
                        supporting various payment methods, including tap-to-pay, text-to-pay, and virtual terminals.
                    </p>

                    <p><strong>Key Benefits of Uptrillion:</strong></p>
                    <ul>
                        <li><strong>Enhanced Sales Efficiency:</strong> Sales representatives can process transactions
                            on-site using mobile devices, reducing the sales cycle and increasing conversion rates.
                        </li>
                        <li><strong>Operational Streamlining:</strong> By integrating payment processing into existing
                            applications, businesses can simplify operations and reduce hardware dependencies.
                        </li>
                        <li><strong>Comprehensive Payment Support:</strong> Uptrillion supports various payment methods,
                            including contactless payments, catering to diverse customer preferences.
                        </li>
                    </ul>
                </motion.div>

                 {/* 下载 Word 文件的链接 */}
                <motion.a
                    href="/Test Plan for Uptrillion Portal.docx"
                    download="Yao_TestPlanSample.docx"
                    className="download-link"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    Download the Test Plan sample designed by Yao Ma Here.
                    {/*<img src={download} alt="Download Word" className="word-icon" />*/}
                </motion.a>

            </section>


            {/* Core Features Section */}
            <section className="core-features-section">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="section-title"
                >
                    🚀 Core Features
                </motion.h2>
                <div className="core-features">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="core-feature-card"
                    >
                        <div className="core-feature-icon">💳</div>
                        <h3 className="feature-title">Sales & Checkout</h3>
                        <p className="feature-description">
                            Streamlined sales process with secure checkout and payment gateway integration.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="core-feature-card"
                    >
                        <div className="core-feature-icon">💰</div>
                        <h3 className="feature-title">Payment Processing</h3>
                        <p className="feature-description">
                            Secure, fast, and reliable payment processing with multiple payment methods.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="core-feature-card"
                    >
                        <div className="core-feature-icon">📦</div>
                        <h3 className="feature-title">Inventory Management</h3>
                        <p className="feature-description">
                            Manage and track your product inventory in real-time for better control.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="core-feature-card"
                    >
                        <div className="core-feature-icon">📊</div>
                        <h3 className="feature-title">Reporting & Analytics</h3>
                        <p className="feature-description">
                            Get insights and analytics to make data-driven decisions and optimize business performance.
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
