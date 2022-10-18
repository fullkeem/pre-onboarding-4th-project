import * as React from 'react';
import Days from './Days';
import Time from './Time';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>날짜 선택</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Days />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>시간 선택</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Time />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
