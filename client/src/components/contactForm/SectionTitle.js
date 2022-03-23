import React from 'react';
import styled from 'styled-components';

const SectionTitleStyle = styled.div`
  text-align: center;

  h2 {
    font-family: 'Montserrat Bold';
    font-size: 3rem;
    margin-top: 0.5rem;
    text-transform: uppercase;
    color:grey;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
   
    h2 {
      font-size: 3.6rem;
    }
  }
`;

export default function SectionTitle({
  heading = 'need heading',
}) {
  return (
    <SectionTitleStyle className="section-title">
      <h2>{heading}</h2>
    </SectionTitleStyle>
  );
}