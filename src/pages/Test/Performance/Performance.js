/* eslint-disable no-unused-vars */
import {motion} from "framer-motion";
import "./Performance.css";
import payment from "../../../assets/uptrillion_payment.png";
import payment2 from "../../../assets/uptrillion_payment2.png";
import performanceExcuteDiagram from "../../../assets/performanceExcuteDiagram.png";
import React, {useEffect, useState} from "react";
import TitleBar from "../../../components/TitleBar/TitleBar";
import ChallengeTable from "../../../components/ChallengeTable/ChallengeTable";
import Divider from "../../../components/Divider/Divider";
import JMeter from "../../../assets/JMeterReport.png"

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

        const images = document.querySelectorAll('.performance-product-section img');
        images.forEach(image => observer.observe(image));

        return () => {
            images.forEach(image => observer.unobserve(image)); // Clean up observer
        };
    }, []);

    const challenges = [
        {
            id: 1,
            challenge: "Payment API Bottlenecks",
            solution: "Optimize database queries, caching, and load balancing.",
            result: "Reduced API response time by 40%, improving overall system throughput by 30%."
        },
        {
            id: 2,
            challenge: "High Response Times During Peak Load",
            solution: "Introduce asynchronous processing for payments.",
            result: "Reduced peak load response time by 50%, ensuring a smoother user experience during high traffic periods."
        },
        {
            id: 3,
            challenge: "Server Overload or Crashes",
            solution: "Implement auto-scaling to handle traffic spikes dynamically.",
            result: "Achieved 99.9% uptime with zero server crashes during peak traffic, handling 3x the expected load."
        },
        {
            id: 4,
            challenge: "Database Locking or Deadlocks",
            solution: "Optimize transaction isolation levels and use read replicas.",
            result: "Eliminated 90% of database deadlocks, improving transaction throughput by 25%."
        },
        {
            id: 5,
            challenge: "Third-Party API Rate Limits",
            solution: "Implement retry logic and queuing systems.",
            result: "Reduced third-party API failures by 70%, ensuring consistent service availability even during rate limit thresholds."
        },
    ];


    return (
        <div>
            <TitleBar title="Performance Testing"/>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
                className="performance-showcase"
            >
                <section className="performance-section1">
                    <motion.div
                        className="performance-description"
                        initial={{opacity: 0, x: -50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1, delay: 0.3}}
                    >
                        <p><strong>Performance Testing in Uptrillion POSket App</strong></p>
                        <p>
                            Performance testing, particularly stress testing, is critical for Uptrillion's POSket App,
                            as it handles restaurant orders where peak hours create high transactional loads. The
                            primary concern is ensuring the payment server's stability, as it is the backbone of the POS
                            system.
                            Key objectives of performance testing:
                        </p>
                        <ul>
                            <li>Identify system bottlenecks during peak times (e.g., dinner rush).</li>
                            <li>Ensure payment processing remains stable and responsive under high loads.</li>
                            <li>Determine system's breaking point and optimize performance before failures occur.</li>
                        </ul>
                    </motion.div>

                    <motion.img
                        src={payment}
                        alt="Argo System"
                        className="performance-image"
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1, delay: 0.5}}
                    />
                    <motion.img
                        src={payment2}
                        alt="Argo System"
                        className="performance-image"
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1, delay: 0.5}}
                    />
                </section>

                <Divider/>

                <section className="performance-section2">
                    <motion.div
                        className="cicd-description"
                        initial={{opacity: 0, x: -50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1, delay: 0.3}}
                    >
                        <p><strong>Performance Testing Process</strong></p>
                        <ul>
                            <li><strong>Step 1: Define Testing Scope</strong></li>
                            <ul><strong>Critical Endpoints:</strong>
                                <pre className="api-code"><code>POST /add_to_cart</code></pre>
                                <pre className="api-code"><code>POST /checkout</code></pre>
                                <pre className="api-code"><code>POST /process_payment</code></pre>
                            </ul>
                            <ul><strong>Test Environment:</strong>
                                <li>Simulated production-like setup.</li>
                                <li>Database preloaded with realistic restaurant data.</li>
                                <li>Concurrent users emulating real-world peak loads.</li>
                            </ul>

                            <li><strong>Step 2: Establish Performance Metrics</strong></li>
                            <ul>
                                <li>Response Time: ≤ 500ms</li>
                                <li>Peak Concurrent Users: 10,000+</li>
                                <li>Transactions Per Second (TPS): 20,000+</li>
                                <li>Error Rate: ≤ 0.5%</li>
                                <li>CPU/Memory Utilization: ≤ 80%</li>
                            </ul>

                            <li><strong>Step 3: Execute Performance Testing</strong></li>
                            <ul>
                                <li>Tool: JMeter</li>
                                <li>Load Strategy:</li>
                                <ul>
                                    <li>Gradual ramp-up from 100 to 10,000 users.</li>
                                    <li>Peak load testing for 5+ minutes.</li>
                                    <li>Extreme load testing to failure point.</li>
                                </ul>
                            </ul>

                            <li><strong>Step 4: JMeter Stress Testing Results</strong></li>
                            <ul>
                                <li>Tool: JMeter</li>
                                <li>Load Strategy:</li>
                                <ul>
                                    <li>Gradual ramp-up from 100 to 10,000 users.</li>
                                    <li>Peak load testing for 5+ minutes.</li>
                                    <li>Extreme load testing to failure point.</li>
                                </ul>
                            </ul>
                        </ul>
                    </motion.div>
                    <motion.img
                        src={performanceExcuteDiagram}
                        alt="Argo System"
                        className="performance-image-diagram"
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1, delay: 0.5}}
                    />
                </section>

                <Divider/>
                <motion.img
                    src={JMeter}
                    alt="Argo System"
                    className="regression-image-report"
                    initial={{opacity: 0, x: 50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 1, delay: 0.5}}
                />
                <Divider/>

                <section className="performance-section4">
                    <ChallengeTable challenges={challenges}/>
                </section>
            </motion.div>
        </div>
    );
}
