/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import "./ARGO Testing.css";
import {motion} from "framer-motion";
import TitleBar from "../../../components/TitleBar/TitleBar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import alamarData from "../../../assets/alamar_data1.png";
import alamarFunction from "../../../assets/alamar_function.png";
import alamarManual from "../../../assets/alamar_manual.png";
import alamarPerformance from "../../../assets/alamar_performance.png";
import alamarRecovery from "../.././../assets/alamar_recovery.png";
import Divider from "../../../components/Divider/Divider";
import FadeInWords from "../../../components/FadeInWords/FadeInWords";



function ARGOTesting() {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    const handleImageClick = (imageSrc) => {
        setCurrentImage(imageSrc);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

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
                            onClick={() => handleImageClick(alamarFunction)} // Open modal with this image
                        />
                        <motion.img
                            src={alamarData}
                            alt="Argo System"
                            className="argo-sdet-image"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            onClick={() => handleImageClick(alamarData)} // Open modal with this image
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


                {/* Modal for Enlarged Image */}
                {modalOpen && (
                    <div className="modal-overlay" onClick={closeModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <img src={currentImage} alt="Enlarged view" className="modal-image"/>
                            <button className="argo-close-btn" onClick={closeModal}><FontAwesomeIcon icon={faTimes}/></button>
                        </div>
                    </div>
                )}
            </motion.div>
        </div>
    );
}

export default ARGOTesting;
