import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import ClientInfo from '../clientInfo/ClientInfo';
import SelectMedical from '../selectMedical/selectMedical';
import BookingDate from '../bookingDate/BookingDate';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import { BiArrowBack } from 'react-icons/bi';

const Booking = ({
  booking,
  setBooking,
  selectValue,
  setSelectValue,
  dateValue,
  setDateValue,
  selectDate,
  setSelectDate,
  selectTime,
  setSelectTime,
  handleReset,
}) => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [canBook, setCanBook] = useState(false);
  const steps = ['환자 정보', '진료 항목 선택', '예약날짜 및 시간 선택'];

  const getStepContent = (stepNumber) => {
    switch (stepNumber) {
      case 0:
        return (
          <ClientInfo
            canBook={canBook}
            setCanBook={setCanBook}
            booking={booking}
            setBooking={setBooking}
          />
        );
      case 1:
        return (
          <SelectMedical
            selectValue={selectValue}
            setSelectValue={setSelectValue}
            setBooking={setBooking}
          />
        );
      case 2:
        return (
          <BookingDate
            dateValue={dateValue}
            setDateValue={setDateValue}
            selectDate={selectDate}
            setSelectDate={setSelectDate}
            selectTime={selectTime}
            setSelectTime={setSelectTime}
            setBooking={setBooking}
          />
        );
      default:
        return '알수없는 스텝입니다.';
    }
  };

  const handleNext = () => {
    setActiveStep((preActiveStep) => preActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((preActiveStep) => preActiveStep - 1);
  };

  const goToInquiry = (e) => {
    navigate('/inquiry');
  };

  return (
    <StyledStepper>
      <header>
        <img alt="로고" src={logo} className="logo" />
      </header>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className="content-box">
        {activeStep === steps.length ? (
          <div>
            <div>예약이 완료되었습니다.</div>
            <div className="btn-box">
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  goToInquiry();
                }}
              >
                예약조회하기
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <div>{getStepContent(activeStep)}</div>
            <div className="btn-box">
              <Button
                style={{ marginRight: '10px' }}
                variant="contained"
                color="primary"
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                이전
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? '완료' : '다음'}
              </Button>
            </div>
            <div className="go-back-box">
              <Link
                to="/"
                className="go-back"
                onClick={() => {
                  handleReset();
                }}
              >
                <BiArrowBack />
              </Link>
            </div>
          </div>
        )}
      </div>
    </StyledStepper>
  );
};

const StyledStepper = styled.section`
  width: 100%;
  padding: 30px;
  background-color: #fff;
  border-radius: 20px;

  .logo {
    margin-bottom: 40px;
  }

  .go-back-box {
    margin-left: 20px;
    margin-bottom: 20px;
    display: flex;
  }

  .css-m5vj9m-MuiStepper-root {
    margin: 5px;

    .css-1bw0nnu-MuiStep-root {
      margin: 5px;
    }
  }

  .btn-box {
    margin-top: 30px;
  }

  .css-sghohy-MuiButtonBase-root-MuiButton-root.Mui-disabled,
  .css-sghohy-MuiButtonBase-root-MuiButton-root {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export default Booking;
