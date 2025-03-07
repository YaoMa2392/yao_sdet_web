/* eslint-disable no-unused-vars */
import {motion} from "framer-motion";
import "./TestDesign.css";
import testplanDiagram from "../../../assets/testplanDiagram.png";
import React, {useEffect, useState} from "react";
import TitleBar from "../../../components/TitleBar/TitleBar";
import testmethodDiagram from "../../../assets/testmethodDiagram.png";
import testprotocolDiagram from "../../../assets/testprotocolDiagram.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

export default function TestDesign() {
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

        const images = document.querySelectorAll('.design-product-section img');
        images.forEach(image => observer.observe(image));

        return () => {
            images.forEach(image => observer.unobserve(image)); // Clean up observer
        };
    }, []);

    const [modalOpen, setModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    const handleImageClick = (imageSrc) => {
        setCurrentImage(imageSrc);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <TitleBar title="Test Design"/>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
                className="design-showcase"
            >

                <section className="design-section">
                    <motion.div
                        className="design-description"
                        initial={{opacity: 0, x: -50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1, delay: 0.3}}
                    >
                        <p><strong>How to Design Tests</strong></p>
                        <p>
                            Designing tests begins with understanding the requirements and the behavior of the
                            application. The process involves identifying test scenarios based on functional and
                            non-functional requirements, creating test cases that validate these scenarios, and
                            determining the test data needed to execute them. Good test design requires a comprehensive
                            review of the application flow, potential edge cases, and integration points to ensure all
                            aspects of the system are covered. The main test types (e.g., unit, integration, system, and
                            acceptance tests) should be planned to provide full coverage.
                        </p>
                        <p><strong>What Makes a Good Test Design?</strong></p>
                        <p>
                            A good test design is defined by its ability to be repeatable, reliable, and comprehensive.
                            It should cover all possible use cases, including edge cases, while being simple enough to
                            maintain. Key characteristics of a well-designed test include:
                        </p>
                        <ul>
                            <li><strong>Clarity</strong>: Clear, understandable, and concise test cases.</li>
                            <li><strong>Maintainability</strong>: Easy to update as the system evolves.</li>
                            <li><strong>Traceability</strong>: Linking test cases back to requirements.</li>
                            <li><strong>Effectiveness</strong>: Identifying defects early in the process.</li>
                        </ul>
                    </motion.div>

                    <motion.img
                        src={testplanDiagram}
                        alt="Argo System"
                        className="design-pic"
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1, delay: 0.5}}
                        onClick={() => handleImageClick(testplanDiagram)}
                    />
                </section>

                <section className="design-product-section">
                    <motion.img
                        src={testmethodDiagram}
                        alt="Argo System"
                        className="design-image"
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1, delay: 0.5}}
                        onClick={() => handleImageClick(testmethodDiagram)} // Open modal with this image
                    />
                    <motion.img
                        src={testprotocolDiagram}
                        alt="Argo System"
                        className="design-image"
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1, delay: 0.5}}
                        onClick={() => handleImageClick(testprotocolDiagram)} // Open modal with this image
                    />
                </section>

                <section className="design-section">
                    <motion.div
                        className="design-description"
                        initial={{opacity: 0, x: -50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1, delay: 0.3}}
                    >
                        <p><strong>Common Challenges in Test Design</strong></p>
                        <p>
                            In real work scenarios, several challenges arise during test design, such as:
                        </p>
                        <ul>
                            <li><strong>Complexity of the application</strong>: Understanding intricate business logic
                                or integration points.
                            </li>
                            <li><strong>Incomplete or vague requirements</strong>: When requirements are unclear or
                                ambiguous, it can be difficult to design effective tests.
                            </li>
                            <li><strong>Lack of test data</strong>: Insufficient or unrepresentative test data can lead
                                to inaccurate test results.
                            </li>
                            <li><strong>Changing requirements</strong>: Modifications to requirements during the
                                development process can make existing tests obsolete or require constant rework.
                            </li>
                            <li><strong>Time and resource constraints</strong>: Balancing thorough testing with limited
                                time and resources can impact the quality of the test design.
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        className="design-description"
                        initial={{opacity: 0, x: -50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1, delay: 0.3}}
                    >
                        <p><strong>How to Overcome These Challenges</strong></p>
                        <ul>
                            <li><strong>Collaborate with stakeholders</strong>: Close
                                communication with developers, product owners, and other stakeholders can help clarify
                                requirements and ensure a common understanding of the application’s behavior.
                            </li>
                            <li><strong>Automate repetitive tests</strong>: Automation
                                can speed up regression testing, especially when the application is complex or undergoes
                                frequent changes.
                            </li>
                            <li><strong>Utilize risk-based testing</strong>: Prioritize testing based
                                on the areas with the highest risk, ensuring the most critical parts of the system are
                                tested thoroughly.
                            </li>
                            <li><strong>Establish robust test data management</strong>: Create a
                                controlled test environment with a diverse range of test data, including edge cases, to
                                ensure complete test coverage.
                            </li>
                            <li><strong>Adapt and improve</strong>: Continuously evaluate
                                test cases and adjust them based on feedback, results, and any changes to the
                                application.
                            </li>
                        </ul>
                    </motion.div>
                </section>

                {/* Modal for Enlarged Image */}
                {modalOpen && (
                    <div className="modal-overlay" onClick={closeModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <img src={currentImage} alt="Enlarged view" className="modal-image"/>
                            <button className="design-close-btn" onClick={closeModal}><FontAwesomeIcon icon={faTimes}/>
                            </button>
                        </div>
                    </div>
                )}
            </motion.div>
        </div>
    );
}
