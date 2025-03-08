/* eslint-disable no-unused-vars */
import {motion} from "framer-motion";
import "./CICD.css";
import cicdDiagram from "../../../assets/cicdDiagram.png"
import React, {useEffect, useState} from "react";
import TitleBar from "../../../components/TitleBar/TitleBar";
import ChallengeTable from "../../../components/ChallengeTable/ChallengeTable";
import Divider from "../../../components/Divider/Divider";

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

    const jenkinsfileContent = `pipeline {
    agent any

    triggers {
        cron('0 8 * * *') // EST 3 A.M.
    }

    environment {
        JAVA_HOME = "/usr/lib/jvm/java-11-openjdk-amd64"
        PATH = "$JAVA_HOME/bin:$PATH"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/pax/uptrillion-automation.git'
            }
        }

        stage('Setup Environment') {
            steps {
                sh 'java -version'
                sh 'mvn --version'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'mvn clean install'
            }
        }

        stage('Run Selenium Tests') {
            steps {
                sh 'mvn test'
            }
        }

        stage('Publish Test Results') {
            steps {
                junit 'target/surefire-reports/*.xml'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'target/*.jar', fingerprint: true
        }
        success {
            echo "Tests executed successfully!"
        }
        failure {
            echo "Tests failed!"
        }
    }
}`;

    const challenges = [
        {
            id: 1,
            challenge: "Flaky Tests",
            solution: "Analyze logs, implement retry mechanism, optimize wait strategies, and isolate test environments.",
            result: "Reduced flaky test occurrences by 60%, improving pipeline reliability and reducing unnecessary reruns."
        },
        {
            id: 2,
            challenge: "Long Test Execution Time",
            solution: "Use test layering, parallel execution, and selective testing based on code changes.",
            result: "Decreased test execution time by 50%, reducing pipeline completion time from 2 hours to under 1 hour."
        },
        {
            id: 3,
            challenge: "Unstable Test Environment",
            solution: "Utilize Docker/Kubernetes, mock external dependencies, and ensure database consistency.",
            result: "Improved test environment stability by 80%, reducing environment-related failures and setup time by 70%."
        },
        {
            id: 4,
            challenge: "Test Failures After Code Merge",
            solution: "Run PR-level tests, implement feature toggles, and use static code analysis tools.",
            result: "Reduced post-merge test failures by 40%, improving development efficiency and reducing rollback incidents."
        },
        {
            id: 5,
            challenge: "Test Data Management Issues",
            solution: "Use data generation tools, database snapshots, and environment isolation techniques.",
            result: "Improved test data reliability, reducing test failures due to inconsistent data by 50%."
        },
        {
            id: 6,
            challenge: "Automation Test Incompatibility with CI/CD",
            solution: "Standardize test reports, integrate logging tools, and monitor pipeline performance.",
            result: "Achieved 90% compatibility between automated tests and CI/CD, reducing debugging efforts by 40%."
        },
        {
            id: 7,
            challenge: "Excessive CI/CD Triggers",
            solution: "Optimize trigger conditions and batch commits to reduce pipeline overload.",
            result: "Reduced unnecessary pipeline executions by 35%, optimizing resource utilization and speeding up deployment cycles."
        }
    ];



    return (
        <div>
            <TitleBar title="CI/CD"/>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
                className="cicd-showcase"
            >

                <section className="cicd-section1">
                    <motion.div
                        className="cicd-description"
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
                        src={cicdDiagram}
                        alt="Argo System"
                        className="cicd-image"
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1, delay: 0.5}}
                    />
                </section>

                <Divider />

                <section className="cicd-section2">
                    <div className="test-container-githubaction">
                        <div className="code-container-githubaction">
                            <h2>.github/workflows/main.yml</h2>
                            <pre className="test-code-githubaction">{githubActionYaml}</pre>
                        </div>
                    </div>
                    <motion.div
                        className="cicd-description"
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

                <Divider />

                <section className="cicd-section2">
                    <motion.div
                        className="cicd-description"
                        initial={{opacity: 0, x: -50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1, delay: 0.3}}
                    >
                        <p><strong>Key Benefits of Genkins:</strong></p>
                        <ul>
                            <li><strong>Flexibility and Customization: </strong>Jenkins is
                                highly customizable, with a wide range of plugins, enabling tailored CI/CD pipelines for
                                testing, deployment, and tool integration.
                            </li>
                            <li><strong>Advanced Scheduling: </strong>Jenkins allows
                                scheduling of tests and builds at specific times, intervals, or external triggers, ideal
                                for long-running or resource-heavy tasks.
                            </li>
                            <li><strong>Handling Sensitive Data: </strong>Jenkins can be securely
                                configured on local or private servers, ensuring sensitive data remains within the
                                internal network, making it suitable for data-sensitive applications.
                            </li>
                            <li><strong>On-Premise Deployment: </strong>Jenkins can be deployed
                                on private infrastructure, offering full control over security, pipeline, and resource
                                management.
                            </li>
                        </ul>
                    </motion.div>

                    <div className="test-container-jenkins">
                        <div className="code-container-jenkins">
                            <h2>./Jenkinsfile</h2>
                            <pre className="test-code-jenkins">{jenkinsfileContent}</pre>
                        </div>
                    </div>
                </section>

                <Divider />

                <section className="cicd-section4">
                    <ChallengeTable challenges={challenges}/>
                </section>
            </motion.div>
        </div>
    );
}
