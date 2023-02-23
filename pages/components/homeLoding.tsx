import React from "react";
import styled from "styled-components";

export default function HomeLoding() {
  return (
    <Root>
      <div className='text'>We meet</div>
    </Root>
  );
}

const Root = styled.div`
  height: 100vh;
  .text {
    font-size: 24px;
    font-weight: 700;
  }
`;
