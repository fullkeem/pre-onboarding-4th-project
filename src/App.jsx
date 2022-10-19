import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import './App.css';
import GlobalStyles from './GlobalStyles';
import Inquiry from './pages/inquiry/Inquiry';
import Booking from './pages/booking/Booking';

const App = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [canBook, setCanBook] = useState(false);
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

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/booking"
          element={
            <Booking
              activeStep={activeStep}
              setActiveStep={setActiveStep}
              canBook={canBook}
              setCanBook={setCanBook}
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
            />
          }
        />
        <Route path="/inquiry" element={<Inquiry />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
