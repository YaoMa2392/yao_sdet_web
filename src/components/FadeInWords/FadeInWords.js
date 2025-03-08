import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// styled-components for styling
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

// FadeInWords component that accepts words as input
const FadeInWords = ({ words }) => {
    return (
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
    );
};

export default FadeInWords;
