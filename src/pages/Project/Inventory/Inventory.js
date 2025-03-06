import {motion} from "framer-motion";
import "./Inventory.css";
import inventory from "../../../assets/uptrillion_inventory.webp";
import inventory1 from "../../../assets/uptrillion_inventory1.png";
import inventory2 from "../../../assets/uptrillion_inventory2.png";
import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

export default function Inventory() {
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

        const images = document.querySelectorAll('.inventory-product-section img');
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
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1}}
            className="inventory-showcase"
        >
            {/* Header Section */}
            <header className="inventory-header">
                <h1 className="inventory-title">Inventory Management</h1>
                <div className="title-bg-bar"></div>
            </header>

            {/* Product Section */}
            <section className="inventory-section">
                <motion.div
                    className="inventory-description"
                    initial={{opacity: 0, x: -50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 1, delay: 0.3}}
                >
                    <p><strong>Streamlined Inventory Management</strong></p>
                    <p>
                        Uptrillion offers robust inventory management capabilities that empower merchants to efficiently
                        oversee their inventory, streamline operations, and enhance profitability.
                    </p>
                    <p><strong>Key Benefits of Uptrillion's Inventory Management:</strong></p>
                    <ul>
                        <li><strong>Centralized Inventory Control:</strong> Manage your inventory seamlessly through a
                            cloud-based system, allowing for real-time updates and synchronization across all devices.
                            This centralized approach ensures accurate tracking and reduces the risk of discrepancies.
                        </li>
                        <li><strong>Efficient Item Management:</strong> Add, update, or remove inventory items with
                            ease, including setting prices and managing stock levels. This flexibility allows businesses
                            to adapt quickly to market demands and optimize their product offerings.
                        </li>
                        <li><strong>Customizable Features:</strong> Tailor the inventory management system to align with
                            your business needs by customizing tax rates, categories, and themes, ensuring the platform
                            supports your unique operational requirements.
                        </li>
                    </ul>
                </motion.div>

                <motion.img
                    src={inventory}
                    alt="Argo System"
                    className="inventory-pic"
                    initial={{opacity: 0, x: 50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 1, delay: 0.5}}
                />
            </section>

            {/* Inventory Images Section */}
            <section className="inventory-product-section">
                <motion.img
                    src={inventory1}
                    alt="Argo System"
                    className="inventory-image"
                    initial={{opacity: 0, x: 50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 1, delay: 0.5}}
                    onClick={() => handleImageClick(inventory1)} // Open modal with this image
                />
                <motion.img
                    src={inventory2}
                    alt="Argo System"
                    className="inventory-image"
                    initial={{opacity: 0, x: 50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 1, delay: 0.5}}
                    onClick={() => handleImageClick(inventory2)} // Open modal with this image
                />
            </section>

            {/* Modal for Enlarged Image */}
            {modalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <img src={currentImage} alt="Enlarged view" className="modal-image"/>
                        <button className="close-btn" onClick={closeModal}><FontAwesomeIcon icon={faTimes}/></button>
                    </div>
                </div>
            )}

        </motion.div>
    );
}
