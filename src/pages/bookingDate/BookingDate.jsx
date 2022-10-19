import React, { useEffect } from 'react';
import Days from './Days';
import Time from './Time';
import moment from 'moment';
import 'moment/locale/ko';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { BsFillCalendarCheckFill, BsFillClockFill } from 'react-icons/bs';

const BookingDate = ({
  dateValue,
  setDateValue,
  selectDate,
  setSelectDate,
  selectTime,
  setSelectTime,
}) => {
  setSelectDate(moment(dateValue).format('YYYY년 MM월 DD일'));

  useEffect(() => {
    localStorage.setItem('date', selectDate);
  }, [selectDate]);

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <BsFillCalendarCheckFill />{' '}
            {moment(dateValue).format('YYYY년 MM월 DD일')}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Days dateValue={dateValue} setDateValue={setDateValue} />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <BsFillClockFill /> 시간 선택
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Time
            selectDate={selectDate}
            selectTime={selectTime}
            setSelectTime={setSelectTime}
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default BookingDate;
