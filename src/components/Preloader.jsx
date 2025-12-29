import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const scaleIn = keyframes`
  0% { transform: scale(0); opacity: 0; }
  10% { transform: scale(1.1); opacity: 1; }
  20% { transform: scale(1); }
  100% { transform: scale(1); }
`;

const spinAndPulse = keyframes`
  0% { filter: drop-shadow(0 0 10px #4ce609); transform: rotate(0deg); }
  50% { filter: drop-shadow(0 0 25px #4ce609); transform: rotate(10deg); }
  100% { filter: drop-shadow(0 0 10px #4ce609); transform: rotate(0deg); }
`;

const fadeOut = keyframes`
  0% { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(5); }
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #050705;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: ${props => (props.closing ? fadeOut : "none")} 0.5s forwards;
`;

const OmnitrixSVG = styled.svg`
  width: 200px;
  height: 200px;
  animation: ${scaleIn} 3s ease-out forwards, ${spinAndPulse} 2s infinite ease-in-out;
`;

const Text = styled.h2`
  position: absolute;
  bottom: 20%;
  color: #4ce609;
  font-family: "Orbitron", sans-serif;
  letter-spacing: 2px;
  opacity: 0.8;
  font-size: 1.2rem;
  animation: ${scaleIn} 3s ease-out forwards;
`;

const Preloader = ({ onComplete }) => {
    const [closing, setClosing] = useState(false);

    useEffect(() => {
        // 1. Start Close Animation at 2.5s
        const closeTimer = setTimeout(() => {
            setClosing(true);
        }, 2500);

        // 2. Complete at 3.0s
        const endTimer = setTimeout(() => {
            onComplete();
        }, 3000);

        return () => {
            clearTimeout(closeTimer);
            clearTimeout(endTimer);
        };
    }, [onComplete]);

    return (
        <Container closing={closing}>
            <OmnitrixSVG viewBox="0 0 100 100">
                {/* Outer Ring */}
                <circle cx="50" cy="50" r="48" fill="#333" stroke="#888" strokeWidth="4" />

                {/* Black Face */}
                <circle cx="50" cy="50" r="38" fill="black" />

                {/* Green Hourglass Shape */}
                {/* Top Triangle */}
                <path d="M 20 25 L 80 25 L 50 50 Z" fill="#4ce609" />
                {/* Bottom Triangle */}
                <path d="M 20 75 L 80 75 L 50 50 Z" fill="#4ce609" />

                {/* Side Lines to make it proper hourglass shape */}
                <path d="M 18 25 L 18 75" stroke="#4ce609" strokeWidth="2" opacity="0" />
            </OmnitrixSVG>

            {!closing && <Text>LOADING...</Text>}
        </Container>
    );
};

export default Preloader;
