import React, { useState } from 'react';
import { Button, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useAppSelector } from '../hooks/reduxHooks'; // Import Redux hooks to access the theme
import { commonStyles } from '../styles/commonStyles';
import { normalizeHeight } from '../utils/responsive';

interface DateTimePickerComponentProps {
  mode: 'date' | 'time' | 'datetime';
  onDateChange: (date: Date) => void;
}

const DateTimePickerComponent: React.FC<DateTimePickerComponentProps> = ({ mode, onDateChange }) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const theme = useAppSelector((state) => state.theme.theme); // Get the current theme
  const styles = commonStyles(theme); // Dynamically create styles based on the theme
  const { box } = styles; // Destructure commonly used styles

  const handleChange = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    onDateChange(currentDate);
  };

  return (
    <View style={box}> {/* Apply destructured style */}
      <Button onPress={() => setShow(true)} title="Pick Date/Time" color={theme === 'light' ? '#4CAF50' : '#1E90FF'} /> {/* Dynamic button color */}
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
