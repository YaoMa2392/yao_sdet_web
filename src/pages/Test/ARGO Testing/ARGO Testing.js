/* eslint-disable no-unused-vars */
import React from "react";
import "./ARGO Testing.css";
import {motion} from "framer-motion";
import TitleBar from "../../../components/TitleBar/TitleBar";
import alamarData from "../../../assets/alamar_data1.png";
import alamarFunction from "../../../assets/alamar_function.png";
import alamarManual from "../../../assets/alamar_manual.png";
import alamarPerformance from "../../../assets/alamar_performance.png";
import alamarRecovery from "../.././../assets/alamar_recovery.png";
import Divider from "../../../components/Divider/Divider";
import FadeInWords from "../../../components/FadeInWords/FadeInWords";



function ARGOTesting() {
    const functional = "Functional Testing".split(' ');
    const performance = "Performance Testing".split(' ');
    const recovery = "Recovery Testing".split(' ');
    const manual = "Manual Testing".split(' ');

    return (
        <div>
            <TitleBar title="ARGO™ HT System Testing"/>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
                className="argo-showcase"
            >

                <section className="argo-section">
                    <div className="argo-images">
                        <motion.img
                            src={alamarFunction}
                            alt="Argo System"
                            className="argo-sdet-image"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        />
                        <motion.img
                            src={alamarData}
                            alt="Argo System"
                            className="argo-sdet-image"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        />
                    </div>

                    <FadeInWords words={functional}/>
                </section>

                <Divider/>

                <section className="argo-section">
                    <FadeInWords words={performance}/>

                    <motion.img
                        src={alamarPerformance}
                        alt="Argo System"
                        className="regression-image"
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1, delay: 0.5}}
                    />
                </section>

                <Divider/>

                <section className="argo-section">
                    <motion.img
                        src={alamarRecovery}
                        alt="Argo System"
                        className="regression-image"
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1, delay: 0.5}}
                    />

                    <FadeInWords words={recovery}/>
                </section>

                <Divider/>

                <section className="argo-section">
                    <FadeInWords words={manual}/>

                    <motion.img
                        src={alamarManual}
                        alt="Argo System"
                        className="regression-image"
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1, delay: 0.5}}
                    />
                </section>
            </motion.div>
        </div>
    );
}

export default ARGOTesting;
