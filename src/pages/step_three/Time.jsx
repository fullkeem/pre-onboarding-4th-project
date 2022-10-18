import React from 'react';
import styled from 'styled-components';

const Time = () => {
  return (
    <StyledTime>
      <ul className="grid-box">
        <li className="time-box">
          <button type="button">10:00</button>
        </li>
        <li className="time-box">
          <button type="button">11:00</button>
        </li>
        <li className="time-box">
          <button type="button">13:00</button>
        </li>
        <li className="time-box">
          <button type="button">14:00</button>
        </li>
        <li className="time-box">
          <button type="button">15:00</button>
        </li>
        <li className="time-box">
          <button type="button">16:00</button>
        </li>
        <li className="time-box">
          <button type="button">17:00</button>
        </li>
        <li className="time-box">
          <button type="button">18:00</button>
        </li>
      </ul>
    </StyledTime>
  );
};

const StyledTime = styled.section`
  width: 100%;

  .grid-box {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  .time-box {
    margin: 5px;
  }
`;

export default Time;
