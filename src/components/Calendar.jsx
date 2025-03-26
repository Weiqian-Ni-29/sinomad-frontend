import React, { useState, useEffect } from 'react';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import axios from 'axios';
import dayjs from 'dayjs';
import config from '../Constants';

function Calendar({ selectedDate, setSelectedDate, setCurrentSlot, setStartUpNum, setSelectedNumber, route }) {
  const [availableDates, setAvailableDates] = useState([]);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [maxCapacity, setMaxCapacity] = useState(null);
  const [defaultStartUpNum, setDefaultStartUpNum] = useState(null);

  useEffect(() => {
    const fetchAvailableDatesNSlots = async () => {
      try {
        const response = await axios.get(config.API_SERVER + 'available-dates-n-vacancies', { params: { route } });
        const { departureTimes, vacantSlots, maxCapacity, startUpNum } = response.data;
        const dayjsDepartureTimes = departureTimes.map(time => dayjs(time));
        setAvailableDates(dayjsDepartureTimes);
        setAvailableSlots(vacantSlots);
        setMaxCapacity(maxCapacity);
        setDefaultStartUpNum(startUpNum);
      } catch (error) {
        console.error('获取可选日期失败:', error);
      }
    };

    fetchAvailableDatesNSlots();
  }, [route, setStartUpNum]);

  const handleDateChange = (newValue) => {
    setSelectedDate(newValue);
    const index = availableDates.findIndex((availableDate) =>
      availableDate.isSame(newValue, 'day')
    );
    setCurrentSlot(availableSlots[index] || null);
    setStartUpNum(availableSlots[index] === maxCapacity ? defaultStartUpNum : 1);
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
