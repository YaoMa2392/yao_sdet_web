import {motion} from "framer-motion";
import "./Regression.css";
import testplan from "../../../assets/Test Plan0.png";
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

        const images = document.querySelectorAll('.regression-product-section img');
        images.forEach(image => observer.observe(image));

        return () => {
            images.forEach(image => observer.unobserve(image)); // Clean up observer
        };
    }, []);

    const alamarAuto = `@Test
public void testImmBtn() {
    try {
        driver.get(BASE_URL);

        // Locate the "Request a Quote" button and click
        WebElement button = driver.findElement(By.xpath("//a[@href='https://alamarbio.com/contact-us/']//span[contains(text(),'request a Quote')]"));
        Assert.assertNotNull(button, "Button Not Found");
        button.click();

        // Wait until the page's <h1> element with the text "Contact us" is visible
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//h1[contains(@class, 'elementor-heading-title') and contains(text(), 'Contact us')]")));

        // Verify page title
        String expectedTitle = "A Silicon Valley Proteomics Startup Company: Alamar Biosciences Inc.";
        String actualTitle = driver.getTitle();
        Assert.assertTrue(actualTitle.contains(expectedTitle), "Quote page title does not match!");

    } catch (Exception e) {
        e.printStackTrace();
        Assert.fail("Exception occurred in testForm: " + e.getMessage());
    }
}`;

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
            <TitleBar title="Regression Testing"/>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
                className="analytics-showcase"
            >

                <section className="regression-section">
                    <motion.div
                        className="regression-description"
                        initial={{opacity: 0, x: -50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1, delay: 0.3}}
                    >
                        <p><strong>Regression Testing for Uptrillion</strong></p>
                        <p>
                            Regression testing is a critical quality assurance process designed to ensure that new
                            changes, such as feature updates, bug fixes, or system optimizations, do not negatively
                            impact existing functionality. It involves re-executing previously validated test cases
                            across different areas of the application to detect unintended side effects.
                        </p>
                        <p><strong>Why Regression Testing Must Cover the Entire Application:</strong></p>
                        <ul>
                            <li>Even small code changes can introduce unexpected failures in unrelated modules.</li>
                            <li>A comprehensive regression suite minimizes production risks by catching defects early.
                            </li>
                            <li>Ensuring complete coverage reduces business impact and maintains application
                                reliability.
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

                <hr className="divider"/>

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

                <div className="test-container-jenkins">
                    <div className="code-container-jenkins">
                        <h2>./alamarAuto</h2>
                        <pre className="test-code-jenkins">{alamarAuto}</pre>
                    </div>
                </div>

                <Divider />

                <section className="regression-section7">
                    <ChallengeTable challenges={challenges} />
                </section>


            </motion.div>
        </div>
    );
}
