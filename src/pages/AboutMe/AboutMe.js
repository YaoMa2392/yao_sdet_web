import React from "react";
import { motion } from "framer-motion";
import WordCloud from "../../components/WordCloud";
import "./AboutMe.css";

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

const AboutMe = () => {
    return (
        <div className="about-me-container">
            <div className="page-content">
                {/* Hero Section with Word Cloud */}
                <section className="aboutme-hero-section">
                    <motion.h1
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="aboutme-hero-title"
                    >
                        Yao Ma
                    </motion.h1>
                    <WordCloud />
                </section>

                {/* About Me Details */}
                <section className="content-section">
                    <FadeInSection>
                        <h2 className="section-title">🌟 Software Test Engineer</h2>
                        <p className="section-text">
                            <strong>Experience:</strong> 2 years as an SDE Tester, 1 year as an SDE.
                        </p>
                        <p className="section-text">
                            <strong>Master's Degree:</strong> MSCS @ NYU Courant Institute of Mathematical Sciences.
                        </p>
                        <p className="section-text">
                            <strong>Test Expertise:</strong> Smoke, Functional, Regression, Integration, Performance, API, Security, Recovery.
                        </p>
                        <p className="section-text">
                            <strong>Automation Tools:</strong> Python, Java, R, Selenium, Pytest, OpenCV, Cypress, TestNG, JUnit.
                        </p>
                        <p className="section-text">
                            <strong>Documentation Skills:</strong> Test Plans, Test Cases, Bug Tickets, Test Reports, PRDs, FRDs.
                        </p>
                        <p className="section-text">
                            <strong>CI/CD & Tools:</strong> Jira, JMeter, Jenkins, GitHub Actions, GitLab CI, Docker, Kubernetes.
                        </p>
                    </FadeInSection>

                    <FadeInSection>
                        <h2 className="section-title">💡 Key Strengths & Soft Skills</h2>
                        <p className="section-text">
                            <strong>Problem Solver:</strong> Strong problem-solving abilities to tackle complex challenges.
                        </p>
                        <p className="section-text">
                            <strong>Creative:</strong> Innovative thinking to generate new ideas and solutions.
                        </p>
                        <p className="section-text">
                            <strong>Detail-Focused:</strong> Attention to detail ensures accuracy and quality in every task.
                        </p>
                        <p className="section-text">
                            <strong>Communication:</strong> Excellent verbal and written communication skills for effective collaboration.
                        </p>
                        <p className="section-text">
                            <strong>Teamwork:</strong> Collaborative and supportive team player to achieve common goals.
                        </p>
                    </FadeInSection>

                    <FadeInSection>
                        <h2 className="section-title">🚀 Work Experience</h2>
                        <p className="aboutme-section-text">Description for Module 3.</p>
                    </FadeInSection>

                    <FadeInSection>
                        <h2 className="section-title">🌟 Module 4</h2>
                        <p className="section-text">Description for Module 4.</p>
                    </FadeInSection>
                </section>
            </div>
        </div>
    );
};

export default AboutMe;
