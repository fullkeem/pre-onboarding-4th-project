import React, { useState } from 'react';
import Days from './Days';
import Time from './Time';
import moment from 'moment';
import 'moment/locale/ko';
import { BsFillCalendarCheckFill, BsFillClockFill } from 'react-icons/bs';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
  const [value, setValue] = useState(new Date());

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
            {moment(value).format('YYYY년 MM월 DD일')}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Days value={value} setValue={setValue} />
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
          <Time />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
