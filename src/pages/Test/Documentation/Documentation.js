import {motion} from "framer-motion";
import "./Documentation.css";
import testplan from "../../../assets/Test Plan0.png";
import analytics from "../../../assets/Uptrillion_web.png";
import inventory from "../../../assets/uptrillion_inventory1.png";
import regressionAnalytics from "../../../assets/regression_analytics.png";
import regressionInventory from "../../../assets/regression_inventory.png";
import regressionObj from "../../../assets/regression_ObjSco.PNG";
import regressionApproach from "../../../assets/regression_Approach.PNG";
import regressionAnalyticsPlan from "../../../assets/regression_analytics_plan.PNG";
import regressionInventoryPlan from "../../../assets/regression_inventory_plan.PNG"

import React, {useEffect, useState} from "react";
import TitleBar from "../../../components/TitleBar/TitleBar";
import Divider from "../../../components/Divider/Divider";
import ChallengeTable from "../../../components/ChallengeTable/ChallengeTable";

export default function Documentation() {
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

        const images = document.querySelectorAll('.regression-product-section img');
        images.forEach(image => observer.observe(image));

        return () => {
            images.forEach(image => observer.unobserve(image)); // Clean up observer
        };
    }, []);

    const challenges = [
        {
            id: 1,
            challenge: "Manual Regression Testing is Time-Consuming and Error-Prone",
            solution: "Automate the regression testing using tools like Selenium or Cypress.",
            result: "Reduced testing time from 4-5 days to 3-4 hours, improving efficiency by 98%, enabling faster product releases."
        },
        {
            id: 2,
            challenge: "Maintaining Test Coverage Across Increasingly Complex Systems",
            solution: "Adopt modular test case design and integrate with the CI/CD pipeline.",
            result: "Reduced maintenance costs by 30% and ensured consistent test execution, improving code quality across updates."
        },
        {
            id: 3,
            challenge: "Inconsistent Test Environments Across Devices and Browsers",
            solution: "Use containerization or cloud testing platforms (e.g., Sauce Labs, BrowserStack).",
            result: "Reduced manual environment setup time by 60%, achieving consistent testing across 10+ devices and browsers."
        },
        {
            id: 4,
            challenge: "High Redundancy in Regression Tests",
            solution: "Implement reusable test scripts and data-driven testing strategies.",
            result: "Eliminated 50% of redundant test cases, reducing test maintenance and improving execution time."
        },
        {
            id: 5,
            challenge: "Limited Coverage of Edge Cases and Non-Core Features",
            solution: "Prioritize test cases based on risk and use static analysis tools for full code coverage.",
            result: "Increased edge case test coverage by 40%, reducing the chances of undetected defects and production issues."
        },
        {
            id: 6,
            challenge: "Conflicts Between Regression Testing and New Feature Development",
            solution: "Automate regression tests and integrate them with the CI/CD pipeline.",
            result: "Allowed parallel development and testing, improving project timeline by 25% and fostering better collaboration between teams."
        }
    ];


    return (
        <div>
            <TitleBar title="Documentation"/>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
                className="analytics-showcase"
            >

                <section className="regression-section2">
                    <motion.div
                        className="regression-description"
                        initial={{opacity: 0, x: -50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1, delay: 0.3}}
                    >
                        <p><strong>Exclusions: </strong></p>
                        <p>
                            Due to non-disclosure constraints and time limitations for this presentation,
                            the regression testing demonstration is limited to Pax’s publicly available Analytics and
                            Inventory pages. The core regression testing methodology remains unchanged, and the test
                            design principles apply consistently across all modules.
                        </p>
                    </motion.div>
                </section>


                <section className="regression-section3">
                    <motion.img
                        src={regressionObj}
                        alt="Argo System"
                        className="regression-image"
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1, delay: 0.5}}
                    />

                    <motion.img
                        src={regressionApproach}
                        alt="Argo System"
                        className="regression-image"
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1, delay: 0.5}}
                    />
                </section>

                <Divider/>

                <section className="regression-section4">
                    <motion.div
                        className="regression-description"
                        initial={{opacity: 0, x: -50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1, delay: 0.3}}
                    >
                        <p><strong>Note: </strong></p>
                        <p>In this regression test plan, all test cases are required to be executed without
                            prioritization. Bug priority is defined in a separate metrics document to ensure better
                            clarity and tracking of issue severity.</p>
                    </motion.div>
                </section>

                <section className="regression-section5">
                    <motion.img
                        src={regressionAnalytics}
                        alt="Argo System"
                        className="regression-image"
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1, delay: 0.5}}
                    />

                    <motion.img
                        src={regressionInventory}
                        alt="Argo System"
                        className="regression-image"
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1, delay: 0.5}}
                    />
                </section>

                <section className="regression-section6">
                    <motion.img
                        src={regressionAnalyticsPlan}
                        alt="Argo System"
                        className="regression-image"
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1, delay: 0.5}}
                    />

                    <motion.img
                        src={regressionInventoryPlan}
                        alt="Argo System"
                        className="regression-image"
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1, delay: 0.5}}
                    />
                </section>

                <Divider />

                <section className="regression-section7">
                    <ChallengeTable challenges={challenges} />
                </section>

            </motion.div>
        </div>
    );
}
