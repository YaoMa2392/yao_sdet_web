/* eslint-disable no-unused-vars */
import {motion} from "framer-motion";
import "./Sales.css";
import order from "../../../assets/resautrant_order.jpg";
import sales1 from "../../../assets/uptrillion_sales1.png";
import sales2 from "../../../assets/uptrillion_sales2.png";
import sales3 from "../../../assets/uptrillion_sales3.png";
import React, {useEffect, useState} from "react";

export default function Sales() {
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

        const images = document.querySelectorAll('.sales-product-section img');
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
            className="sales-showcase"
        >
            {/* Header Section */}
            <header className="sales-header">
                <h1 className="sales-title">Sales & Checkout</h1>
                <div className="title-bg-bar"></div>
            </header>

            {/* Product Section */}
            <section className="sales-section">
                <motion.div
                    className="sales-description"
                    initial={{opacity: 0, x: -50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 1, delay: 0.3}}
                >
                    <p><strong>Integrated Sales & Checkout Solution</strong></p>
                    <p>
                        Uptrillion's Sales and Checkout module offers a streamlined sales process with secure checkout
                        and payment gateway integration. Designed for businesses on the go, it allows merchants and
                        resellers to process transactions directly through mobile devices, enhancing operational
                        efficiency.
                    </p>

                    <p><strong>Key Benefits of Uptrillion:</strong></p>
                    <ul>
                        <li><strong>Enhanced Sales Efficiency:</strong> Sales representatives can process
                            transactions on-site using mobile devices, reducing the sales cycle and increasing
                            conversion rates.
                        </li>
                        <li><strong>Operational Streamlining:</strong> By integrating payment processing into
                            existing applications, businesses can simplify operations and reduce hardware
                            dependencies.
                        </li>
                        <li><strong>Customizable User Interface:</strong> Businesses can tailor the user interface
                            to align with their brand identity and provide a personalized customer experience.
                        </li>
                    </ul>
                </motion.div>

                <motion.img
                    src={order}
                    alt="uptrillion sales"
                    className="sales-image"
                    initial={{opacity: 0, x: 50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 1, delay: 0.5}}
                />
            </section>

            {/* Product Picture Section */}
            <section className="sales-product-section">
                <motion.img
                    src={sales1}
                    alt="uptrillion sales1"
                    className="sales-image"
                    initial={{opacity: 0, x: 50}}
                    animate={inView ? {opacity: 1, x: 0} : {}}
                    transition={{duration: 1, delay: 0.5}}
                />
                <motion.img
                    src={sales2}
                    alt="uptrillion sales2"
                    className="sales-image"
                    initial={{opacity: 0, x: 50}}
                    animate={inView ? {opacity: 1, x: 0} : {}}
                    transition={{duration: 1, delay: 0.5}}
                />
                <motion.img
                    src={sales3}
                    alt="uptrillion sales3"
                    className="sales-image"
                    initial={{opacity: 0, x: 50}}
                    animate={inView ? {opacity: 1, x: 0} : {}}
                    transition={{duration: 1, delay: 0.5}}
                />
            </section>
        </motion.div>
    );
}
