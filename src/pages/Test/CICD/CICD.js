import {motion} from "framer-motion";
import "./CICD.css";
import cicd from "../../../assets/cicd.png";
import analytics1 from "../../../assets/Uptrillion_web.png";
import analytics2 from "../../../assets/uptrillion_Analytics.png";
import React, {useEffect, useState} from "react";

export default function CICD() {
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
                CI/CD
            </motion.h1>

            <section className="cicd-section">
                <motion.img
                    src={cicd}
                    alt="Argo System"
                    className="cicd-image"
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
