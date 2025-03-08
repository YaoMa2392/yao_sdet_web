/* eslint-disable no-unused-vars */
import {motion} from "framer-motion";
import "./Documentation.css";
import documentPlan from "../../../assets/Test Plan0.png";
import documentPlan2 from "../../../assets/Document_plan2.PNG";
import documentBug from "../../../assets/Document_bug.PNG";
import documentBugTicket from "../../../assets/Document_bugTicket.PNG";
import documentReport from "../../../assets/Document_report1.PNG";
import documentReport2 from "../../../assets/Document_report2.PNG";
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
            challenge: "Inadequate Test Documentation Leading to Misunderstandings",
            solution: "Create clear, structured test case documents and use standard templates for consistency.",
            result: "Improved clarity in communication, reducing the number of follow-up queries from developers by 40%."
        },
        {
            id: 2,
            challenge: "Test Case Redundancy and Maintenance Overhead",
            solution: "Implement modular test case design and leverage data-driven testing to minimize redundancy.",
            result: "Reduced test case maintenance overhead by 35%, while maintaining 95% test coverage after system updates."
        },
        {
            id: 3,
            challenge: "Difficulty in Keeping Documentation Updated with Frequent System Changes",
            solution: "Integrate test documentation updates into the CI/CD pipeline, ensuring automated updates when code changes are made.",
            result: "Reduced the time spent updating documentation by 50%, ensuring alignment with code changes and speeding up test preparation."
        },
        {
            id: 4,
            challenge: "Lack of Traceability Between Test Cases and Requirements",
            solution: "Map test cases directly to user stories or requirements and use a test management tool like Jira for traceability.",
            result: "Improved test traceability by 80%, ensuring that all requirements were tested and reducing missed defect detection."
        },
        {
            id: 5,
            challenge: "Inconsistent Test Data for Regression Testing",
            solution: "Automate the generation of test data based on pre-defined configurations or use production-like environments for testing.",
            result: "Reduced data-related errors in regression testing by 60%, leading to fewer false positives and more reliable results."
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
                <section className="regression-section3">
                    <motion.img
                        src={documentPlan}
                        alt="Argo System"
                        className="regression-image"
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1, delay: 0.5}}
                    />

                    <motion.img
                        src={documentPlan2}
                        alt="Argo System"
                        className="regression-image"
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1, delay: 0.5}}
                    />
                </section>

                <Divider/>

                <section className="regression-section3">
                    <motion.img
                        src={documentBug}
                        alt="Argo System"
                        className="document-image-bugRep"
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1, delay: 0.5}}
                    />

                    <motion.img
                        src={documentBugTicket}
                        alt="Argo System"
                        className="regression-image"
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1, delay: 0.5}}
                    />
                </section>

                <Divider/>

                <section className="regression-section5">
                    <motion.img
                        src={documentReport}
                        alt="Argo System"
                        className="document-image-rep"
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1, delay: 0.5}}
                    />

                    <motion.img
                        src={documentReport2}
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
