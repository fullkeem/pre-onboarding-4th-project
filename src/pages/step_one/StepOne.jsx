import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StepOne = ({ canBook, setCanBook, booking, setBooking }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState();

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  useEffect(() => {
    fetch('/data/clientData.json')
      .then((res) => res.json())
      .then((data) => {
        data;
      });
  }, []);

  const handleBooking = () => {
    if (name.length >= 2 && phone.length >= 10) {
      return setBooking({ booker: name, phoneNumber: phone }), setCanBook(true);
    } else {
      return setCanBook(false);
    }
  };

  return (
    <StyledOne>
      <ul>
        <li>
          <label htmlFor="name">예약자 : </label>
          <input
            type="text"
            id="name"
            placeholder="예약자 성함"
            value={name || ''}
            onChange={handleName}
          />
        </li>
        <li>
          <label htmlFor="phone">전화번호 : </label>
          <input
            type="text"
            id="phone"
            placeholder="전화번호"
            value={phone || ''}
            onChange={handlePhone}
          />
        </li>
        <li>
          <button type="button" onClick={handleBooking}>
            확인
          </button>
        </li>
      </ul>
      {canBook === true && <div>진료 예약이 가능합니다.</div>}
    </StyledOne>
  );
};

const StyledOne = styled.section`
  width: 100%;
  color: #6d6d64;

  ul {
    display: flex;
    align-items: center;

    li {
      margin: 10px 0px;
      padding: 20px;
    }

    label {
      font-size: small;
    }

    input {
      padding: 4px;
      border: 1px solid #ededea;
      border-radius: 5px;
      background-color: #f9f9f5;

      &:focus {
        outline: none;
      }
    }

    button {
      padding: 5px 12px;
      border: 1px solid #ededea;
      color: #6d6d64;
      font-size: small;
      background-color: #f9f9f5;
    }
  }
`;

export default StepOne;
