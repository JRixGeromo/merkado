// src/components/DateTimePicker.tsx
import React, { useState } from 'react';
import { Button, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { commonStyles } from '../styles/commonStyles';
import { normalizeHeight } from '../utils/responsive';

interface DateTimePickerComponentProps {
  mode: 'date' | 'time' | 'datetime';
  onDateChange: (date: Date) => void;
}

const DateTimePickerComponent: React.FC<DateTimePickerComponentProps> = ({ mode, onDateChange }) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const handleChange = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    onDateChange(currentDate);
  };

  return (
    <View style={commonStyles.box}>
      <Button onPress={() => setShow(true)} title="Pick Date/Time" />
      {show && (
        <DateTimePicker
          value={date}
          mode={mode}
          display="default"
          onChange={handleChange}
          style={{ height: normalizeHeight(200) }} // Adjust height dynamically
        />
      )}
    </View>
  );
};

export default DateTimePickerComponent;
