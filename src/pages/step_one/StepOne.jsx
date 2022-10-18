import React from 'react';
import styled from 'styled-components';

const StepOne = () => {
  return (
    <StyledOne>
      <ul>
        <li>
          <label htmlFor="name">예약자 : </label>
          <input type="text" id="name" placeholder="예약자 성함" />
        </li>
        <li>
          <label htmlFor="phone">전화번호 : </label>
          <input type="text" id="phone" placeholder="전화번호" />
        </li>
        <li>
          <button type="button">확인</button>
        </li>
      </ul>
    </StyledOne>
  );
};

const StyledOne = styled.section`
  width: 100%;

  ul {
    display: flex;
    align-items: center;

    li {
      margin: 20px 0px;
      padding: 30px;
      vertical-align: middle;
      text-align: center;
    }

    label,
    input {
    }
  }
`;

export default StepOne;
