import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  width: 100vw;
  height: 30px;
  display: flex;
  flex-direction: column;
  position: fixed;
  padding: 20px 0;
`;

const HeaderLogo = styled.div`
  width: 50%;
  color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding-left: 50px;
  h1 {
    font-size: 1.2em;
    letter-spacing: 1.5px;
    font-weight: 800;
    text-transform: uppercase;
    line-height: 15px;
  }
  @media screen and (max-width: 980px) {
    padding-left: 30px;

    h1 {
      font-size: 0.7em;
    }
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <HeaderLogo>
        <h1>Pradeep.</h1>
      </HeaderLogo>
    </HeaderWrapper>
  );
}

export default Header;
