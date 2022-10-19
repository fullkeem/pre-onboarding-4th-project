import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Time = ({ selectDate, selectTime, setSelectTime }) => {
  const [time, setTime] = useState([]);

  useEffect(() => {
    localStorage.setItem('time', selectTime);
  }, [selectTime]);

  useEffect(() => {
    fetch('/data/timeSelect.json')
      .then((res) => res.json())
      .then((data) => {
        setTime(data.timeData);
      });
  }, []);

  const handleTime = (e) => {
    setSelectTime(e.target.value);
  };

  return (
    <StyledTime>
      <ul className="grid-box">
        {time.map((el) => {
          return (
            <li className="time-box" key={el.id}>
              <button type="button" value={el.time} onClick={handleTime}>
                {el.time}
              </button>
            </li>
          );
        })}
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
    margin: 10px 0;
  }
`;

export default Time;
