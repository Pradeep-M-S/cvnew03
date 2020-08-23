import React from "react";
import styled from "styled-components";
import Header from "../Header/header.component";
import Image from "../../assets/images/Picture4.png";

const HeroWrapper = styled.div`
  background: linear-gradient(to right bottom, #6336e0, #4e1dbb);
  clip-path: polygon(100% 0, 100% 68%, 33% 100%, 0 100%, 0 0);
  height: 98vh;
  z-index: 0;
  width: 100%;
  position: relative;
`;

const HeroSection = styled.div`
  display: grid;
  align-items: center;
  height: 100%;

  color: white;
  text-align: left;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const HeroHeading = styled.div`
  width: 80%;
  margin: 0 auto;

  h1 {
    font-size: 2.8em;
    line-height: 62.4px;
  }
  p {
    font-size: 1.5em;
    font-weight: 600;
    line-height: 40px;
  }
  span {
    color: black;
    padding: 2px;
  }

  @media screen and (max-width: 980px) {
    width: 90%;
    padding-top: 5em;

    h1 {
      font-size: 1.3em;
      line-height: 12.4px;
    }

    h2,
    p,
    span {
      font-size: 1em;
      line-height: 22.2px;
    }
  }
`;
const HeroImage = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-bottom: 50px;
  z-index: 200;
  cursor: pointer;
  h2 {
    font-size: 2em;
  }
`;

const HeroButton = styled.button`
  padding: 10px 30px;
  font-size: 1.1em;
  border-radius: 28032000px;

  border: none;
  outline: none;
  box-shadow: 10px 20px 30px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  letter-spacing: 1px;
  text-transform: uppercase;
  place-items: center;

  @media screen and (max-width: 980px) {
    display: none;
  }

  &:hover {
    transform: scale(1.05);
    background-color: black;
    color: white;
    box-shadow: 21px 30px 30px rgba(0, 0, 0, 0.3);
  }
`;

function Hero() {
  return (
    <HeroWrapper>
      <Header />
      <HeroSection>
        <HeroHeading>
          <h1>Hey , I am Pradeep M S</h1>
          <h2>front-end developer</h2>
          <p>
            {" "}
            I am a <span>Front-End Web Developer</span> based on Madurai,India .
            I like to code things from scratch and enjoy bringing ideas to life
            in the browser
          </p>
          <HeroButton>Download Resume</HeroButton>
        </HeroHeading>
        <HeroImage
          to="https://www.freepik.com/vectors/business"
          href="https://www.freepik.com/vectors/business"
        >
          <img
            style={{
              width: "100%",
              height: "auto",
            }}
            href="https://www.freepik.com/vectors/business"
            src={Image}
            alt=""
          />
          <link href="https://www.freepik.com/vectors/business"></link>
          <a href="https://www.freepik.com/vectors/business"></a>
        </HeroImage>
      </HeroSection>
    </HeroWrapper>
  );
}

export default Hero;
