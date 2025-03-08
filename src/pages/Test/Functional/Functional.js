/* eslint-disable no-unused-vars */
import {motion} from "framer-motion";
import "./Functional.css";
import React, {useEffect, useState} from "react";
import TitleBar from "../../../components/TitleBar/TitleBar";
import Divider from "../../../components/Divider/Divider";
import ChallengeTable from "../../../components/ChallengeTable/ChallengeTable";
import sales from "../../../assets/uptrillion_sales1.png";
import sales2 from "../../../assets/uptrillion_sales2.png";

export default function Functional() {
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

        const images = document.querySelectorAll('.functional-product-section img');
        images.forEach(image => observer.observe(image));

        return () => {
            images.forEach(image => observer.unobserve(image)); // Clean up observer
        };
    }, []);

    const challenges = [
        {
            id: 1,
            challenge: "Incomplete Test Coverage Due to Time Constraints",
            solution: "Prioritize test cases based on risk assessment and automate critical functional tests.",
            result: "Increased test coverage by 35%, reducing critical defects slipping into production by 50%."
        },
        {
            id: 2,
            challenge: "Frequent Changes in Requirements Affect Test Stability",
            solution: "Adopt modular test case design and use version control for test scripts.",
            result: "Reduced test case maintenance effort by 40%, ensuring faster adaptation to requirement changes."
        },
        {
            id: 3,
            challenge: "Difficulty in Identifying Edge Cases During Testing",
            solution: "Leverage exploratory testing alongside structured test cases and integrate static analysis tools.",
            result: "Identified 30% more edge case defects, reducing unexpected failures in production."
        },
        {
            id: 4,
            challenge: "Manual Functional Testing is Slow and Resource-Intensive",
            solution: "Automate repetitive functional tests using Selenium, Cypress, or Playwright.",
            result: "Reduced test execution time by 70%, allowing teams to focus more on exploratory and high-risk testing."
        },
        {
            id: 5,
            challenge: "Inconsistent Test Execution Across Different Environments",
            solution: "Utilize containerization and cloud-based testing platforms (e.g., Docker, BrowserStack).",
            result: "Achieved 90% consistency in test results across multiple environments, reducing environment-related defects by 60%."
        }
    ];


    return (
        <div>
            <TitleBar title="Functional Testing"/>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
                className="analytics-showcase"
            >

                <section className="functional-section">
                    <motion.div
                        className="functional-description"
                        initial={{opacity: 0, x: -50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1, delay: 0.3}}
                    >
                        <p><strong>Functional Testing in Uptrillion POSket App</strong></p>
                        <p>
                            In the POSket app, functional testing confirms that item customization, cart management,
                            pricing, and checkout work correctly. It is primarily conducted in early development or
                            small updates, ensuring quick validation before deployment.
                        </p>
                        <p>Key aspects</p>
                        <ul>
                            <li><strong>Positive testing</strong>: Verifying that the system functions as intended under
                                normal conditions (e.g., adding an item to the cart, successful payment).
                            </li>
                            <li><strong>Negative testing</strong>: Ensuring the system handles invalid inputs or edge
                                cases properly
                                (e.g., adding an invalid coupon, invalid payment details).
                            </li>
                            <li><strong>Exception testing</strong>: Checking how the system reacts to unexpected
                                scenarios (e.g., network
                                failure during checkout).
                            </li>

                        </ul>

                    </motion.div>

                    <motion.img
                        src={sales}
                        alt="Argo System"
                        className="performance-image"
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1, delay: 0.5}}
                    />
                    <motion.img
                        src={sales2}
                        alt="Argo System"
                        className="performance-image"
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1, delay: 0.5}}
                    />
                </section>

                <Divider/>

                <section className="functional-section7">
                    <ChallengeTable challenges={challenges}/>
                </section>
            </motion.div>
        </div>
    );
}
