import React from "react";
import styled from "styled-components/macro";

import Star from "./Star";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #000;
`;

function Wave() {
  return (
    <Wrapper>
      <Star />
    </Wrapper>
  );
}

export default Wave;
