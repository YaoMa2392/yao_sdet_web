import React, {useState} from "react";
import "./Presentation.css";
import {motion} from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import preDiagram from "../../assets/presentationDiagram.png";
import TitleBar from "../../components/TitleBar/TitleBar";


function Presentation() {
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
            <TitleBar title="READ ME"/>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
                className="presentation-showcase"
            >

                <section className="presentation-section">
                    <motion.img
                        src={preDiagram}
                        alt="Argo System"
                        className="presentation-image"
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1, delay: 0.5}}
                        onClick={() => handleImageClick(preDiagram)} // Open modal with this image
                    />
                </section>

                {/* Modal for Enlarged Image */}
                {modalOpen && (
                    <div className="modal-overlay" onClick={closeModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <img src={currentImage} alt="Enlarged view" className="modal-image"/>
                            <button className="presentation-close-btn" onClick={closeModal}><FontAwesomeIcon icon={faTimes}/></button>
                        </div>
                    </div>
                )}
            </motion.div>
        </div>
    );
}

export default Presentation;
