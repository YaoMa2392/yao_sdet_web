import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';


const words = "Feel free to ask any questions!".split(' ');

const GradientBackground = styled.div`
  background: linear-gradient(45deg, #1C3775, #FFCE00);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Word = styled(motion.span)`
  font-size: 3em;
  font-weight: bold;
  color: #333;
  margin: 0 5px;
`;

const QA = () => {
    return (
        <GradientBackground>
            <TextContainer>
                {words.map((word, index) => (
                    <Word
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 * index }}
                    >
                        {word}
                    </Word>
                ))}
            </TextContainer>
        </GradientBackground>
    );
};

export default QA;
