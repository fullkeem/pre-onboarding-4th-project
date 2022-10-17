import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import 'moment/locale/ko';
import styled from 'styled-components';

const Main = () => {
  const [value, onChange] = useState(new Date());
  return (
    <StyledSection>
      <div className="calendar-wrap">
        <Calendar onChange={onChange} value={value} />
        <div className="moment-box">
          {moment(value).format('YYYY년 MM월 DD일')}
        </div>
      </div>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  width: 100%;

  .calendar-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .moment-box {
    width: 100%;
    padding: 5px 0;
    border: 1px solid #000;
  }
`;

export default Main;
