// import {motion} from "framer-motion";
// import "./Sales.css";
// import sales1 from "../../../assets/uptrillion_sales1.png"
// import sales2 from "../../../assets/uptrillion_sales2.png";
// import cloud from "../../../assets/uptrillion_cloud.png";
// import {useState} from "react";
//
// const FadeInSection = ({children}: { children: React.ReactNode }) => {
//     return (
//         <motion.div
//             initial={{opacity: 0, y: 50}}
//             whileInView={{opacity: 1, y: 0}}
//             viewport={{once: true}}
//             transition={{duration: 0.8, ease: "easeOut"}}
//             className="fade-section"
//         >
//             {children}
//         </motion.div>
//     );
// };
//
// export default function Sales() {
//     const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
//
//     // 处理鼠标位置的变化
//     const handleMouseMove = (e) => {
//         const {clientX: x, clientY: y} = e;
//         setMousePosition({x, y});
//     };
//
//     // 设置图片的样式和动画效果
//     const imageStyle = {
//         transform: `translate(${(mousePosition.x - window.innerWidth / 2) / 30}px, ${(mousePosition.y - window.innerHeight / 2) / 30}px)`,
//         transition: 'transform 0.1s ease-out', // 添加平滑效果
//     };
//
//     return (
//         <div className="sales-container" onMouseMove={handleMouseMove}>
//                         {/* Hero Section */}
//             <section className="sales-hero-section">
//                 <motion.h1
//                     initial={{opacity: 0, y: -30}}
//                     animate={{opacity: 1, y: 0}}
//                     transition={{duration: 1}}
//                     className="sales-hero-title"
//                 >
//                     Sales & Checkout
//                 </motion.h1>
//
//                 {/* New Module */}
//                 <div className="sales-module">
//                     <motion.div
//                         className="sales-description"
//                         initial={{opacity: 0, x: -30}}
//                         animate={{opacity: 1, x: 0}}
//                         transition={{duration: 1, delay: 0.3}}
//                     >
//                         <p>
//                             Experience a seamless sales and checkout process with our Cloud Commerce Platform.
//                             Designed for efficiency and ease of use, our system ensures smooth transactions and
//                             enhanced customer satisfaction.
//                         </p>
//                     </motion.div>
//
//                     <motion.img
//                         src={cloud}
//                         alt="Product Showcase"
//                         className="sales-product-image"
//                         style={{width: "300px", height: "auto"}} // 设置宽度，高度自适应
//                         initial={{opacity: 0, x: 30}}
//                         animate={{opacity: 1, x: 0}}
//                         transition={{duration: 1, delay: 0.5}}
//                     />
//
//                 </div>
//             </section>
//
//
//             {/* Project Details */}
//             <section className="content-section">
//                 <FadeInSection>
//                     <h2 className="section-title center-title">About Uptrillion</h2>
//                     <p className="project-section-text">
//                         Uptrillion, a subsidiary of PAX Technology, Inc., offers an integrated cloud solution for mobile
//                         point of sale (mPOS) applications, catering to businesses across various platforms. Their
//                         flagship product, the Hummingbird Payment Solution, enables Android devices to process
//                         contactless transactions with major card networks, including Visa, MasterCard, American Express,
//                         and Discover, without requiring PINs or signatures.
//                         VISA PARTNER. This solution is compatible with Android 10 and above, ensuring a seamless payment
//                         experience for businesses on the go.
//                     </p>
//                 </FadeInSection>
//
//                 {/* 图片展示部分 */}
//                 <div className="sales-image-container">
//                     <div className="image-box">
//                         <img src={sales1} alt="Project screenshot 1" className="project-image"/>
//                     </div>
//                     <div className="image-box">
//                         <img src={sales2} alt="Project screenshot 2" className="project-image"/>
//                     </div>
//                 </div>
//             </section>
//
//
//             {/* Core Features Section */}
//             <section className="core-features-section">
//                 <motion.h2
//                     initial={{opacity: 0, y: -30}}
//                     animate={{opacity: 1, y: 0}}
//                     transition={{duration: 1}}
//                     className="section-title"
//                 >
//                     🚀 Core Features
//                 </motion.h2>
//                 <div className="core-features">
//                     <motion.div
//                         initial={{opacity: 0, y: 50}}
//                         whileInView={{opacity: 1, y: 0}}
//                         viewport={{once: true}}
//                         transition={{duration: 0.8, ease: "easeOut"}}
//                         className="core-feature-card"
//                     >
//                         <div className="core-feature-icon">💳</div>
//                         <h3 className="feature-title">Sales & Checkout</h3>
//                         <p className="feature-description">
//                             Streamlined sales process with secure checkout and payment gateway integration.
//                         </p>
//                     </motion.div>
//
//                     <motion.div
//                         initial={{opacity: 0, y: 50}}
//                         whileInView={{opacity: 1, y: 0}}
//                         viewport={{once: true}}
//                         transition={{duration: 0.8, ease: "easeOut"}}
//                         className="core-feature-card"
//                     >
//                         <div className="core-feature-icon">💰</div>
//                         <h3 className="feature-title">Payment Processing</h3>
//                         <p className="feature-description">
//                             Secure, fast, and reliable payment processing with multiple payment methods.
//                         </p>
//                     </motion.div>
//
//                     <motion.div
//                         initial={{opacity: 0, y: 50}}
//                         whileInView={{opacity: 1, y: 0}}
//                         viewport={{once: true}}
//                         transition={{duration: 0.8, ease: "easeOut"}}
//                         className="core-feature-card"
//                     >
//                         <div className="core-feature-icon">📦</div>
//                         <h3 className="feature-title">Inventory Management</h3>
//                         <p className="feature-description">
//                             Manage and track your product inventory in real-time for better control.
//                         </p>
//                     </motion.div>
//
//                     <motion.div
//                         initial={{opacity: 0, y: 50}}
//                         whileInView={{opacity: 1, y: 0}}
//                         viewport={{once: true}}
//                         transition={{duration: 0.8, ease: "easeOut"}}
//                         className="core-feature-card"
//                     >
//                         <div className="core-feature-icon">📊</div>
//                         <h3 className="feature-title">Reporting & Analytics</h3>
//                         <p className="feature-description">
//                             Get insights and analytics to make data-driven decisions and optimize business performance.
//                         </p>
//                     </motion.div>
//                 </div>
//             </section>
//         </div>
//     );
// }
