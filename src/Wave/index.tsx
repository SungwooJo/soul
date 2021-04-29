import React from "react";
import styled from "styled-components/macro";

import Atom from "./Atom";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #000;
`;

function Wave() {
  return (
    <Wrapper>
      <Atom />
    </Wrapper>
  );
}

export default Wave;
