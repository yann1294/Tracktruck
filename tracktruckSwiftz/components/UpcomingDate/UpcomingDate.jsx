import React, { useContext, useState } from 'react';
import { StyleSheet, View, TextInput, Pressable } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import ThemeContext from '../../theme/ThemeContext';

const UpcomingDate = ({ label, placeholder, borderRadius, borderColor, Icon, width }) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const { theme, darkMode } = useContext(ThemeContext);
  const placeholderColor = darkMode ? '#f6f6f6' : '#505050';
  const showDatePicker = () => {
    setOpen(true);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setOpen(false);
    setDate(currentDate);
    setSelectedDate(currentDate.toLocaleDateString());
  };

  return (
    <View>
      <View style={styles.inputBox}>
        <Pressable onPress={showDatePicker} style={styles.inputWrapper}>
          <TextInput
            style={[
              styles.input,
              {
                borderRadius: borderRadius || 10,
                borderColor: borderColor || 'rgba(255, 255, 255, 0.08)',
                backgroundColor: theme.card2,
                color: theme.color,
                width: width || '100%',
              },
            ]}
            placeholderTextColor={placeholderColor}
            placeholder={placeholder}
            editable={false}
            value={selectedDate}
          />
          {Icon && <Icon style={styles.icon} />}
        </Pressable>
      </View>

      {open && (
        <DateTimePicker
          mode="date"
          value={date}
          display="default"
          onChange={onChange}
          minimumDate={new Date()}
        />
      )}
    </View>
  );
};

export default UpcomingDate;

const styles = StyleSheet.create({
  inputBox: {
    gap: 5,
  },
  inputWrapper: {
    position: 'relative',
  },
  input: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderWidth: 1,
    minWidth: 90,
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    right: 15,
    top: '56%',
    transform: [{ translateY: -12 }],
  },
});
