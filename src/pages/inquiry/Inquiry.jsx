import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { BiArrowBack } from 'react-icons/bi';

const Inquiry = ({ handleReset }) => {
  const navigate = useNavigate();
  const handleDelete = () => {
    localStorage.removeItem('name');
    localStorage.removeItem('phone');
    localStorage.removeItem('medical');
    localStorage.removeItem('date');
    localStorage.removeItem('time');
    alert('예약이 취소되었습니다.');
    navigate('/');
  };

  return (
    <StyledInquiry>
      <header>
        <img alt="로고" src={logo} className="logo" />
      </header>
      <section className="inquiry-title">예약 조회</section>
      <section>
        <ul className="inquiry-box">
          <li>
            <span>예약자 : </span>
            <span>{localStorage.getItem('name')}</span>
          </li>
          <li>
            <span>전화번호 : </span>
            <span>{localStorage.getItem('phone')}</span>
          </li>
          <li>
            <span>검진 항목 : </span>
            <span>{localStorage.getItem('medical')}</span>
          </li>
          <li>
            <span>예약 날짜 : </span>
            <span>{localStorage.getItem('date')}</span>
          </li>
          <li>
            <span>예약 시간 : </span>
            <span>{localStorage.getItem('time')}</span>
          </li>
          <li>
            <span>예약 번호 : </span>
            <span>{localStorage.getItem('phone')}</span>
          </li>
        </ul>
      </section>
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
        <Button variant="contained" color="primary" onClick={handleDelete}>
          예약 취소하기
        </Button>
      </div>
    </StyledInquiry>
  );
};

const StyledInquiry = styled.section`
  width: 710px;
  padding: 30px;
  background-color: #fff;
  border-radius: 20px;

  .logo {
    margin-bottom: 60px;
  }

  .inquiry-title {
    margin-bottom: 40px;
    font-size: xx-large;
  }

  .inquiry-box {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .go-back-box {
    display: flex;
    justify-content: space-between;
  }
`;

export default Inquiry;
