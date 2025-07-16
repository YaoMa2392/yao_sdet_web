/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import FadeInWords from "../../components/FadeInWords/FadeInWords";


const GradientBackground = styled.div`
  background: linear-gradient(45deg, #1C3775, #7045AF, #977BBF, #713DBA);
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

const QA = () => {
    const words = "Please feel free to contact me!".split(' '); // Words as input

    return (
        <GradientBackground>
            <FadeInWords words={words} /> {/* Pass words to the FadeInWords component */}
        </GradientBackground>
    );
};

export default QA;
