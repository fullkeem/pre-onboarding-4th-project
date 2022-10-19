import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const SelectMedical = ({ selectValue, setSelectValue }) => {
  const [checkedMedical, setCheckedMedical] = useState('');

  const handleValue = (e) => {
    setCheckedMedical(e.target.value);
    setSelectValue(e.target.name);
  };

  useEffect(() => {
    localStorage.setItem('medical', selectValue);
  }, [checkedMedical]);

  return (
    <StyledTwo>
      <ul>
        <li>
          <label htmlFor="vaccine">
            <input
              type="radio"
              id="vaccine"
              value="vaccine"
              name="예방접종"
              checked={checkedMedical === 'vaccine'}
              onChange={handleValue}
            />
            예방접종
          </label>
        </li>
        <li>
          <label htmlFor="clinic">
            <input
              type="radio"
              id="clinic"
              value="clinic"
              name="일반진료"
              checked={checkedMedical === 'clinic'}
              onChange={handleValue}
            />
            일반진료
          </label>
        </li>
        <li>
          <label htmlFor="check-up">
            <input
              type="radio"
              id="check-up"
              value="check-up"
              name="건강검진"
              checked={checkedMedical === 'check-up'}
              onChange={handleValue}
            />
            건강검진
          </label>
        </li>
      </ul>
      {selectValue === '건강검진' && (
        <div className="alert">
          <div className="red">알립니다!</div> 건강검진 전 6-8시간 금식이
          필요합니다. <br /> 예{')'} 오전 예약의 경우 전날 저녁 식사 후 내원전
          까지 금식
        </div>
      )}
    </StyledTwo>
  );
};

const StyledTwo = styled.section`
  width: 100%;
  color: #6d6d64;

  ul {
    display: flex;
    align-items: center;

    li {
      margin: 30px;
      padding: 10px;
      border-radius: 5px;
      background-color: #f9f9f5;
      font-size: small;
    }
  }

  .alert {
    background-color: #fff4f4;
    line-height: normal;

    .red {
      color: red;
    }
  }
`;

export default SelectMedical;
