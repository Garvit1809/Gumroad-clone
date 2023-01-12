import React from "react";
import styled from "styled-components";
import sahil from "../../assets/blog/sahil.svg";
import gum from './Gum.svg'

const Section = styled.div`
  display: grid;
  width: 100%;
  grid-auto-columns: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  border-bottom: 2px solid #000;
  background-color: #000;
`;

const ImageContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

const RightContainer = styled.div`
  display: grid;
  width: 100%;
  max-width: 48rem;
  margin-right: 0px;
  margin-left: 0px;
  justify-items: stretch;
  align-items: stretch;
  align-content: start;
  grid-auto-columns: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 3rem;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  padding: 6.5vw;
  padding-left: 0;
  color: #fff;
`;

const SahilBio = styled.div`
  display: grid;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  grid-auto-columns: 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  -ms-grid-columns: 7rem 1fr;
  grid-template-columns: 7rem 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto;
`;

const GumroadFounder = () => {
  return (
    <Section>
      <ImageContainer><img src={gum} alt="" /></ImageContainer>
      <RightContainer>
        <SahilBio>
          <img src={sahil} alt="" />
          <div>
            <p>Sahil Lavingia</p>
            <p>Gumroad founder, Irregular painter,</p>
            <span>VC-hating VC, Aspiring Sci-Fi author</span>
          </div>
        </SahilBio>
        <h2>Betting on a new Gumroad</h2>
        <p>
          Gumroad is ten years old, but instead of just celebrating, we’re
          focusing on the next 10 years. I’ve been asking myself, and many
          others, which path Gumroad should take next to further support
          creators. Read more about the bets we're placing — beginning with our
          new brand.
        </p>
        <p>November 26, 2021</p>
      </RightContainer>
    </Section>
  );
};

export default GumroadFounder;
