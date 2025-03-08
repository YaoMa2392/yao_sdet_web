/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import FadeInWords from "../../components/FadeInWords/FadeInWords";


const words = "Feel free to ask any questions!".split(' ');

const GradientBackground = styled.div`
  background: linear-gradient(45deg, #1C3775, #FFCE00);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;


const QA = () => {
    const words = "Feel free to ask any questions!".split(' '); // Words as input

    return (
        <GradientBackground>
            <FadeInWords words={words} /> {/* Pass words to the FadeInWords component */}
        </GradientBackground>
    );
};

export default QA;
