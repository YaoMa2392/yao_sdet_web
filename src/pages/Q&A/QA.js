import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Q&A数据
const qaData = [
    { question: "What is the company's vision?", answer: "The company aims to revolutionize the tech industry with cutting-edge innovations." },
    { question: "What are the biggest challenges the team faces?", answer: "Scaling and optimizing our infrastructure to handle increasing user demands." },
    { question: "How do you foster innovation within the team?", answer: "We encourage cross-functional collaboration and maintain a flat structure to share ideas freely." },
    { question: "What is the work-life balance like?", answer: "We believe in providing flexibility while maintaining high productivity and a collaborative environment." },
];

// 卡片容器样式
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
  padding: 20px;
`;

// 每个Q&A卡片样式
const Card = styled(motion.div)`
  background: white;
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  height: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
`;

// 问题部分样式
const Question = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

// 答案部分样式
const Answer = styled.p`
  font-size: 14px;
  color: #555;
  line-height: 1.6;
  text-align: center;
`;

// 背景渐变样式
const GradientBackground = styled.div`
  background: linear-gradient(45deg, #1C3775, #FFCE00);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

const QA = () => {
    return (
        <GradientBackground>
            <CardContainer>
                {qaData.map((item, index) => (
                    <Card
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 * index }}
                    >
                        <Question>{item.question}</Question>
                        <Answer>{item.answer}</Answer>
                    </Card>
                ))}
            </CardContainer>
        </GradientBackground>
    );
};

export default QA;
