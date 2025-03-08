import React, {useState} from "react";
import "./Workflow.css";
import {motion} from "framer-motion";
import TitleBar from "../../../components/TitleBar/TitleBar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import sdetDiagram from "../../../assets/SDETDiagram.PNG";
import testDiagram from "../../../assets/test_diagram.PNG";


function Workflow() {
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
            <TitleBar title="Workflow"/>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
                className="workflow-showcase"
            >

                <section className="workflow-section">
                    <motion.img
                        src={testDiagram}
                        alt="Argo System"
                        className="workflow-test-image"
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1, delay: 0.5}}
                        onClick={() => handleImageClick(testDiagram)} // Open modal with this image
                    />
                    <motion.img
                        src={sdetDiagram}
                        alt="Argo System"
                        className="workflow-sdet-image"
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1, delay: 0.5}}
                        onClick={() => handleImageClick(sdetDiagram)} // Open modal with this image
                    />
                </section>

                {/* Modal for Enlarged Image */}
                {modalOpen && (
                    <div className="modal-overlay" onClick={closeModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <img src={currentImage} alt="Enlarged view" className="modal-image"/>
                            <button className="workflow-close-btn" onClick={closeModal}><FontAwesomeIcon icon={faTimes}/></button>
                        </div>
                    </div>
                )}
            </motion.div>
        </div>
    );
}

export default Workflow;
