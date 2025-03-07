/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import "./Payment.css";
import d135 from "../../../assets/uptrillion_d135.jpg";
import payment1 from "../../../assets/uptrillion_payment.png";
import payment2 from "../../../assets/uptrillion_payment2.png";
import payment3 from "../../../assets/uptrillion_payment3.png";
import React, { useEffect, useState } from "react";

export default function Payment() {
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

        const images = document.querySelectorAll('.payment-product-section img');
        images.forEach(image => observer.observe(image));

        return () => {
            images.forEach(image => observer.unobserve(image)); // Clean up observer
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="payment-showcase"
        >
            {/* Header Section */}
            <header className="payment-header">
                <h1 className="payment-title">Payment Processing</h1>
                <div className="title-bg-bar"></div>
            </header>

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

                <motion.img
                    src={d135}
                    alt="Argo System"
                    className="sales-image"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                />
            </section>

            {/* Product Picture Section */}
            <section className="payment-product-section">
                <motion.img
                    src={payment1}
                    alt="Argo System"
                    className="sales-image"
                    initial={{ opacity: 0, x: 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                />
                <motion.img
                    src={payment2}
                    alt="Argo System"
                    className="sales-image"
                    initial={{ opacity: 0, x: 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                />
                <motion.img
                    src={payment3}
                    alt="Argo System"
                    className="sales-image"
                    initial={{ opacity: 0, x: 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                />
            </section>
        </motion.div>
    );
}
