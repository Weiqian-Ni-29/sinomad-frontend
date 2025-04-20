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
  const [startUpNum, setStartUpNum] = useState(null);

  // 日期和剩余人数检查通过后跳转到付款页面
  const handleJumpPaymentPage = (event) => {
    if (selectedDate === null || selectedNumber === null) {
      alert('请确认选择了正确的人数和时间');
      return;
    }
    let submitPrice = 0;
    for (let i = price.length - currentSlot; i < price.length - currentSlot + selectedNumber; i++) {
      submitPrice += price[i];
    }
    navigate('/Payment/zh', { state: { selectedNumber, submitPrice, selectedDate, route } });
  };

  const handleSubmit = async () => {
    if (!selectedDate) {
      alert('请在提交之前选择一个时间');
      return;
    }
    if (!selectedNumber || selectedNumber <= 0) {
      alert('请在提交之前选择出发人数');
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
        alert('提交失败，请重试');
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
        setStartUpNum={setStartUpNum}
        setSelectedNumber={setSelectedNumber}
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
        前往预定
      </Button>
    </div>
  );
}

export default BookingForm;
