import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 330px;
  height: 400px;
  background-color: rgba(11, 18, 12, 0.83);
  border-radius: 10px;
  box-shadow: rgba(76, 230, 9, 0.15) 0px 4px 24px;
  border: 1px solid rgba(76, 230, 9, 0.3);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(76, 230, 9, 0.6);
    filter: brightness(1.1);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(76, 230, 9, 0.3);
  object-fit: contain;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Issuer = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};
  margin-top: 4px;
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  margin-top: 4px;
`;

const CertificationCard = ({ certificate }) => {
  return (
    <Card>
      <Image src={certificate.image} />
      <Details>
        <Title>{certificate.title}</Title>
        <Issuer>{certificate.issuer}</Issuer>
        <Date>{certificate.date}</Date>
      </Details>
    </Card>
  );
};

export default CertificationCard;
