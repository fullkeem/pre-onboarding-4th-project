import React from 'react';
import styled from 'styled-components';

const StepOne = () => {
  return (
    <StyledOne>
      <ul>
        <li>
          <label for="name">예약자 : </label>
          <input type="text" id="name" placeholder="예약자 성함" />
        </li>
        <li>
          <label for="name">전화번호 : </label>
          <input type="text" id="name" placeholder="전화번호" />
        </li>
      </ul>
    </StyledOne>
  );
};

const StyledOne = styled.section`
  width: 100%;
`;

export default StepOne;
