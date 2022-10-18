import React from 'react';
import styled from 'styled-components';

const StepTwo = () => {
  return (
    <StyledTwo>
      <ul>
        <li>
          <input type="radio" id="vaccine" />
          <label htmlFor="vaccine"> 예방접종</label>
        </li>
        <li>
          <input type="radio" id="clinic" />
          <label htmlFor="clinic"> 일반진료</label>
        </li>
        <li>
          <input type="radio" id="check-up" />
          <label htmlFor="check-up"> 건강검진</label>
        </li>
      </ul>
    </StyledTwo>
  );
};

const StyledTwo = styled.section`
  width: 100%;
  color: #6d6d64;

  ul {
    display: flex;
    align-items: center;

    li {
      margin: 40px;
      padding: 10px;
      border-radius: 5px;
      background-color: #f9f9f5;
      font-size: small;
    }
  }
`;

export default StepTwo;
