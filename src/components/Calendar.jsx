import React, { useState, useEffect } from 'react';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import axios from 'axios';
import dayjs from 'dayjs';

function Calendar({ selectedDate, setSelectedDate, setCurrentSlot, setSelectedNumber }) {
  const [availableDates, setAvailableDates] = useState([]);
  const [availableSlots, setAvailableSlots] = useState([]);
  // const [currentSlot, setCurrentSlot] = useState(null);

  useEffect(() => {
    const fetchAvailableDatesNSlots = async () => {
      try {
        const response = await axios.get('https://sinomad-backend.vercel.app/api/available-dates-n-vacancies');
        const { departureTimes, vacantSlots } = response.data;
        const dayjsDepartureTimes = departureTimes.map(time => dayjs(time));
        setAvailableDates(dayjsDepartureTimes);
        setAvailableSlots(vacantSlots);
      } catch (error) {
        console.error('获取可选日期失败:', error);
      }
    };

    fetchAvailableDatesNSlots();
  }, []);

  const handleDateChange = (newValue) => {
    setSelectedDate(newValue);
    const index = availableDates.findIndex((availableDate) =>
      availableDate.isSame(newValue, 'day')
    );
    setCurrentSlot(availableSlots[index] || null);
    setSelectedNumber(0);
  };

  const isDateAvailable = (date) => {
    return availableDates.some((availableDate) => availableDate.isSame(date, 'day'));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    {/* {currentSlot === null ? <></> : <h3>Vacanies {currentSlot}</h3>} */}
      <div style={{paddingBottom: '20px', maxWidth: '400px', margin: '0 auto' }}>
        <DatePicker
          label="Sinomad Trip"
          value={selectedDate}
          onChange={handleDateChange}
          shouldDisableDate={(date) => !isDateAvailable(date)}
        />
      </div>
    </LocalizationProvider>
  );
}

export default Calendar;
