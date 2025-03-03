import { motion } from "framer-motion";
import "./styles.css";
import target1 from "../../assets/Uptrillion_target1.png";
import target2 from "../../assets/Uptrillion_target2.png";

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
    return (
        <div className="container">
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

            {/* Project Details */}
            <section className="content-section">
                <FadeInSection>
                    <h2 className="section-title">🛠 Project Background</h2>
                    <p className="section-text">
                        This project aims to improve UI automation test coverage and optimize the CI/CD pipeline to ensure software reliability.
                    </p>
                </FadeInSection>

                <FadeInSection>
                    <h2 className="section-title">🔍 Key Challenges</h2>
                    <p className="section-text">
                        Handling dynamic elements, API response variations, and integrating automation into an existing development workflow.
                    </p>
                </FadeInSection>

                <FadeInSection>
                    <h2 className="section-title">🚀 Solutions</h2>
                    <p className="section-text">
                        We implemented Cypress for end-to-end testing, integrated GitHub Actions for automation, and developed a robust reporting system.
                    </p>
                </FadeInSection>
            </section>
        </div>
    );
}
