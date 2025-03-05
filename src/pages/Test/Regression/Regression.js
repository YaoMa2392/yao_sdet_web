import {motion} from "framer-motion";
import "./Regression.css";
import testplan from "../../../assets/Test Plan0.png";
import analytics1 from "../../../assets/Uptrillion_web.png";
import analytics2 from "../../../assets/uptrillion_Analytics.png";
import React, {useEffect, useState} from "react";

export default function Regression() {
    const [inView, setInView] = useState(false);

    const handleScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setInView(true);
                observer.unobserve(entry.target);  // Stop observing once in view
            }
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleScroll, {
            threshold: 0.5,  // When 50% of the element is visible
        });

        const images = document.querySelectorAll('.analytics-product-section img');
        images.forEach(image => observer.observe(image));

        return () => {
            images.forEach(image => observer.unobserve(image)); // Clean up observer
        };
    }, []);

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}
            className="analytics-showcase"
        >


            {/* Product Section */}{/* Header Section */}
            <motion.h1
                initial={{opacity: 0, y: -30}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1}}
                className="regression-hero-title"
            >
                Regression Testing
            </motion.h1>
            <section className="regression-section">
                <motion.div
                    className="regression-description"
                    initial={{opacity: 0, x: -50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 1, delay: 0.3}}
                >
                    <p><strong>Empowering Business Decisions</strong></p>
                    <p>
                        Uptrillion not only streamlines payment processing and inventory management but also offers
                        robust analytics
                        capabilities. This feature enables merchants to gain valuable insights into their business
                        operations through detailed data visualization and reporting, facilitating informed
                        decision-making and strategic planning.
                    </p>
                    <p><strong>Key Benefits of Uptrillion Analytics:</strong></p>
                    <ul>
                        <li><strong>Custom Reports:</strong> Create tailored reports to focus on key metrics, enabling
                            targeted business analysis.
                        </li>
                        <li><strong>Data Export:</strong> Export data for further analysis or integration with other
                            tools to gain deeper insights.
                        </li>
                        <li><strong>Performance Monitoring:</strong> Track sales and inventory performance to identify
                            trends and optimize operations.
                        </li>
                    </ul>
                    <span>⭐ Download the Test Plan sample designed by Yao Ma </span>
                    {/* 下载 Word 文件的链接 */}
                    <motion.a
                        href="/Test Plan for Uptrillion Portal.docx"
                        download="Yao_TestPlanSample.docx"
                        className="download-link"
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1, delay: 0.5}}
                    >
                        Here
                        {/*<img src={download} alt="Download Word" className="word-icon" />*/}
                    </motion.a>
                    <span>.</span>
                </motion.div>

                <motion.img
                    src={testplan}
                    alt="Argo System"
                    className="regression-image"
                    initial={{opacity: 0, x: 50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 1, delay: 0.5}}
                />
            </section>

            {/* Product Picture Section */}
            <section className="analytics-product-section">
                <motion.img
                    src={analytics1}
                    alt="Argo System"
                    className="regression-image"
                    initial={{opacity: 0, x: 50}}
                    animate={inView ? {opacity: 1, x: 0} : {}}
                    transition={{duration: 1, delay: 0.5}}
                />
                <motion.img
                    src={analytics2}
                    alt="Argo System"
                    className="regression-image"
                    initial={{opacity: 0, x: 50}}
                    animate={inView ? {opacity: 1, x: 0} : {}}
                    transition={{duration: 1, delay: 0.5}}
                />
            </section>
        </motion.div>
    );
}
