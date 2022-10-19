import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import styled from 'styled-components';

const Main = () => {
  const navigate = useNavigate();

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <StyledMain>
      <header>
        <img alt="로고" src={logo} className="logo" />
      </header>
      <button
        type="button"
        className="to-booking"
        onClick={() => {
          navigate('/booking');
          handleReload();
        }}
      >
        예약
      </button>
      <button
        type="button"
        className="to-inquiry"
        onClick={() => {
          navigate('/inquiry');
        }}
      >
        예약조회하기
      </button>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  width: 710px;
  padding: 30px;
  background-color: #fff;
  border-radius: 20px;

  .to-booking,
  .to-inquiry {
    margin: 10px;
  }

  .logo {
    margin-bottom: 60px;
  }
`;

export default Main;
