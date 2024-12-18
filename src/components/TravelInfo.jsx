import React, { useState } from 'react';
import ClientNumberPicker from './ClientNumberPicker';
import Calendar from './Calendar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function BookingForm({ price }) {
  const navigate = useNavigate();
  const [selectedNumber, setSelectedNumber] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentSlot, setCurrentSlot] = useState(null);

  // 日期和剩余人数检查通过后跳转到付款页面
  const handleJumpPaymentPage = (event) => {
    if (selectedDate === null || selectedNumber === null || selectedNumber === 0 || selectedNumber > 6) {
      alert('date or number of people not selected properly, please try again');
      return;
    }
    navigate('/Payment', { state: { selectedNumber, price, selectedDate } });
  };

  const handleSubmit = async () => {
    if (!selectedDate) {
      alert('Please choose a date before submission');
      return;
    }
    if (!selectedNumber || selectedNumber > 6 || selectedNumber <= 0) {
      alert('Please select the number of travelers before submission');
      return;
    }

    try {
      const response = await fetch('https://sinomad-backend.vercel.app/api/submit-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date: selectedDate.format('YYYY-MM-DD'),
          numberOfTravelers: selectedNumber,
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
      />
      <ClientNumberPicker
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
        currentSlot={currentSlot}
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
