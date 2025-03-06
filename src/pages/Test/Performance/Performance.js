import {motion} from "framer-motion";
import "./Performance.css";
import performanceDiagram from "../../../assets/performanceDiagram.PNG"
import React, {useEffect, useState} from "react";
import TitleBar from "../../../components/TitleBar/TitleBar";

export default function Performance() {
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

    const githubActionYaml = `
    name: Build and Deploy
    on:
      push:
        branches:
          - main
    jobs:
      build:
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v2
          - name: Set up JDK 11
            uses: actions/setup-java@v2
            with:
              java-version: '11'
          - name: Cache Maven dependencies
            uses: actions/cache@v2
            with:
              path: ~/.m2/repository
              key: \${{ runner.os }}-maven-\${{ hashFiles('**/pom.xml') }}
              restore-keys: |
                \${{ runner.os }}-maven-
          - name: Build with Maven
            run: mvn clean install
          - name: Deploy to Production
            run: ./deploy.sh
  `;


    return (
        <div>
            <TitleBar title="Performance Testing"/>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
                className="analytics-showcase"
            >

                <section className="performance-section1">
                    <motion.div
                        className="performance-description"
                        initial={{opacity: 0, x: -50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1, delay: 0.3}}
                    >
                        <p><strong>CI/CD for Uptrillion</strong></p>
                        <p>
                            The CI/CD pipeline for the Uptrillion project is designed to ensure automated testing and
                            consistent software quality throughout the development cycle. After completing the
                            automation test scripts, we push the code to GitHub for review. Once the changes are
                            approved, they are merged into the main repository. The repository is integrated with GitHub
                            Actions, which automatically triggers a build and test process whenever code is merged into
                            the main branch. This step ensures that the newly merged code does not disrupt existing
                            functionality or tests.
                        </p>
                        <p>
                            Given the sensitive nature of transaction data in the company's apps, we avoid running tests
                            on GitHub Actions, which is not secure enough for handling such information. Instead,
                            Jenkins is used to manage the local scheduling of tests, where it regularly executes the
                            test cases to verify the functionality of Uptrillion's features. This setup helps maintain
                            the stability and reliability of the application while safeguarding sensitive data.
                        </p>
                        <p>
                            The process is continuously refined based on feedback from test results. The feedback loop
                            ensures that the test strategy, scripts, and scheduling remain aligned with the evolving
                            project requirements.
                        </p>
                    </motion.div>

                    <motion.img
                        src={performanceDiagram}
                        alt="Argo System"
                        className="performance-image"
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1, delay: 0.5}}
                    />
                </section>


                {/* Product Picture Section */}
                <section className="performance-section2">
                    <div className="test-container-githubaction">
                        <div className="code-container-githubaction">
                            <h2>.github/workflows/main.yml</h2>
                            <pre className="test-code-githubaction">{githubActionYaml}</pre>
                        </div>
                    </div>
                    <motion.div
                        className="performance-description"
                        initial={{opacity: 0, x: -50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1, delay: 0.3}}
                    >
                        <p><strong>Key Benefits of Github Action:</strong></p>
                        <ul>
                            <li><strong>Integration with GitHub: </strong>GitHub Actions
                                is built into GitHub, so it offers seamless integration with the repository. Every
                                commit or pull request can automatically trigger workflows, making it easy to automate
                                testing, building, and deployment directly from GitHub.
                            </li>
                            <li><strong>Faster Setup for Simple Pipelines: </strong>For
                                projects hosted on GitHub, setting up GitHub Actions can be quicker and more
                                straightforward compared to Jenkins, especially for smaller or less complex pipelines.
                            </li>
                            <li><strong>Free for Open Source: </strong>GitHub Actions provides
                                free CI/CD services for public repositories, which can be a significant benefit for
                                open-source projects.
                            </li>
                        </ul>
                    </motion.div>
                </section>
            </motion.div>
        </div>
    );
}
