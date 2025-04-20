import React, { useState } from 'react';
import ClientNumberPicker from '../ClientNumberPicker';
import Calendar from '../Calendar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import config from '../../Constants';

function BookingForm({ price, route }) {
  const navigate = useNavigate();
  const [selectedNumber, setSelectedNumber] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentSlot, setCurrentSlot] = useState(null);
  const [startUpNum, setStartNum] = useState(null);

  // 日期和剩余人数检查通过后跳转到付款页面
  const handleJumpPaymentPage = (event) => {
    if (selectedDate === null || selectedNumber === null) {
      alert('date or number of people not selected properly, please try again');
      return;
    }
    let submitPrice = 0;
    for (let i = price.length - currentSlot; i < price.length - currentSlot + selectedNumber; i++) {
      submitPrice += price[i];
    }
    navigate('/Payment/en', { state: { selectedNumber, submitPrice, selectedDate, route } });
  };

  const handleSubmit = async () => {
    if (!selectedDate) {
      alert('Please choose a date before submission');
      return;
    }
    if (!selectedNumber || selectedNumber <= 0) {
      alert('Please select the number of travelers before submission');
      return;
    }

    try {
      const response = await fetch(config.API_SERVER + 'submit-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date: selectedDate.format('YYYY-MM-DD'),
          numberOfTravelers: selectedNumber,
          route: route
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        handleJumpPaymentPage();
      } else {
        alert('Booking submission failed, please try again');
      }
    } catch (error) {
      console.error('Error while submitting the booking:', error);
      alert("Something's wrong, please try again.");
    }
  };

  return (
    <div>
      <Calendar
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        setCurrentSlot={setCurrentSlot}
        setSelectedNumber={setSelectedNumber}
        setStartUpNum={setStartNum}
        route={route}
      />
      <ClientNumberPicker
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
        currentSlot={currentSlot}
        startUpNum={startUpNum}
      />
      <Button
        variant="contained"
        style={{ backgroundColor: 'bisque', color: 'black', marginTop: '20px' }}
        onClick={handleSubmit}
      >
        Check Availability
      </Button>
    </div>
  );
}

export default BookingForm;
