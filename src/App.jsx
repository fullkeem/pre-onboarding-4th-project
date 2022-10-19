import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import './App.css';
import GlobalStyles from './GlobalStyles';
import Inquiry from './pages/inquiry/Inquiry';
import Booking from './pages/booking/Booking';

const App = () => {
  const [selectValue, setSelectValue] = useState('');
  const [dateValue, setDateValue] = useState(new Date());
  const [selectDate, setSelectDate] = useState('');
  const [selectTime, setSelectTime] = useState('');
  const [booking, setBooking] = useState([
    {
      booker: '',
      phoneNumber: '',
    },
  ]);

  const handleReset = (e) => {
    e.preventDefault();
  };

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/pre-onboarding-4th-project/" element={<Main />} />
        <Route
          path="/pre-onboarding-4th-project/booking"
          element={
            <Booking
              selectValue={selectValue}
              setSelectValue={setSelectValue}
              dateValue={dateValue}
              setDateValue={setDateValue}
              selectDate={selectDate}
              setSelectDate={setSelectDate}
              selectTime={selectTime}
              setSelectTime={setSelectTime}
              booking={booking}
              setBooking={setBooking}
              handleReset={handleReset}
            />
          }
        />
        <Route
          path="/pre-onboarding-4th-project/inquiry"
          element={<Inquiry handleReset={handleReset} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
