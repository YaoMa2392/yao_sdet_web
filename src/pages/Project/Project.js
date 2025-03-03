import { motion } from "framer-motion";
import "./Project.css";
import web from "../../assets/uptrillion_web.jpg";
import mobile from "../../assets/uptrillion_mobile.jpg";
import cloud from "../../assets/uptrillion_cloud.png";
import {useState} from "react";

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

export default function Project() {
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
        <div className="container" onMouseMove={handleMouseMove}>
            {/* Hero Section */}
            <section className="hero-section">
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="hero-title"
                >

                    Uptrillion
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="hero-subtitle"
                >
                    The Cloud Commerce Platform
                </motion.p>
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



            {/* Project Details */}
            <section className="content-section">
                <FadeInSection>
                    <h2 className="section-title center-title">About Uptrillion</h2>
                    <p className="project-section-text">
                        Uptrillion, a subsidiary of PAX Technology, Inc., offers an integrated cloud solution for mobile point of sale (mPOS) applications, catering to businesses across various platforms. Their flagship product, the Hummingbird Payment Solution, enables Android devices to process contactless transactions with major card networks, including Visa, MasterCard, American Express, and Discover, without requiring PINs or signatures.
                        VISA PARTNER. This solution is compatible with Android 10 and above, ensuring a seamless payment experience for businesses on the go.
                    </p>
                </FadeInSection>

                {/* 图片展示部分 */}
                <div className="image-container">
                    <div className="image-box">
                        <img src={web} alt="Project screenshot 1" className="project-image" />
                    </div>
                    <div className="image-box">
                        <img src={mobile} alt="Project screenshot 2" className="project-image" />
                    </div>
                </div>
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
