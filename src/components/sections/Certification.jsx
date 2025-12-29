import React from "react";
import styled from "styled-components";
import CertificationCard from "../cards/CertificationCard";
import { certifications } from "../../data/constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0px 80px 0px;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  font-family: 'Orbitron', sans-serif;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
  margin-top: 30px;
`;

const Certification = () => {
  // If certifications is undefined (until added to constants.js), default to empty array
  const certs = typeof certifications !== 'undefined' ? certifications : [];

  return (
    <Container id="Certifications">
      <Wrapper>
        <Title>Certifications</Title>
        <Desc>
          Here are some of my certifications and achievements.
        </Desc>
        <CardContainer>
          {certs.map((cert, index) => (
            <CertificationCard key={index} certificate={cert} />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Certification;
