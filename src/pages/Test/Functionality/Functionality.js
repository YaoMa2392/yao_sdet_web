import {motion} from "framer-motion";
import "./Functionality.css";
import analytics from "../../../assets/uptrillion_analytics.jpg";
import analytics1 from "../../../assets/Uptrillion_web.png";
import analytics2 from "../../../assets/uptrillion_Analytics.png";
import React, {useEffect, useState} from "react";

export default function Functionality() {
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

        const images = document.querySelectorAll('.functionality-product-section img');
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
            className="Functionality-showcase"
        >
            {/* Header Section */}
            <header className="functionality-header">
                <h1 className="functionality-title">Reporting & Analytics</h1>
                <div className="title-bg-bar"></div>
            </header>

            {/* Product Section */}
            <section className="functionality-section">
                <motion.div
                    className="functionality-description"
                    initial={{opacity: 0, x: -50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 1, delay: 0.3}}
                >
                    <p><strong>Empowering Business Decisions</strong></p>
                    <p>
                        Uptrillion not only streamlines payment processing and inventory management but also offers robust analytics
                        capabilities. This feature enables merchants to gain valuable insights into their business
                        operations through detailed data visualization and reporting, facilitating informed
                        decision-making and strategic planning.
                    </p>
                    <p><strong>Key Benefits of Uptrillion Analytics:</strong></p>
                    <ul>
                        <li><strong>Custom Reports:</strong> Create tailored reports to focus on key metrics, enabling targeted business analysis.</li>
                        <li><strong>Data Export:</strong> Export data for further analysis or integration with other tools to gain deeper insights.</li>
                        <li><strong>Performance Monitoring:</strong> Track sales and inventory performance to identify trends and optimize operations.</li>
                      </ul>

                </motion.div>

                <motion.img
                    src={analytics}
                    alt="Argo System"
                    className="sales-image"
                    initial={{opacity: 0, x: 50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 1, delay: 0.5}}
                />
            </section>

            {/* Product Picture Section */}
            <section className="functionality-product-section">
                <motion.img
                    src={analytics1}
                    alt="Argo System"
                    className="sales-image"
                    initial={{opacity: 0, x: 50}}
                    animate={inView ? {opacity: 1, x: 0} : {}}
                    transition={{duration: 1, delay: 0.5}}
                />
                <motion.img
                    src={analytics2}
                    alt="Argo System"
                    className="sales-image"
                    initial={{opacity: 0, x: 50}}
                    animate={inView ? {opacity: 1, x: 0} : {}}
                    transition={{duration: 1, delay: 0.5}}
                />
            </section>
        </motion.div>
    );
}
