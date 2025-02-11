import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import ThemeContext from '../../theme/ThemeContext';

const CustomDatePicker = ({ label, placeholder, borderRadius, borderColor, Icon }) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const { theme, darkMode } = useContext(ThemeContext);

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
        <Text style={[styles.label]}>{label}</Text>
        <Pressable onPress={showDatePicker} style={styles.inputWrapper}>
          <TextInput
            style={[
              styles.input,
              {
                borderRadius: borderRadius || 10,
                borderColor: borderColor || 'rgba(255, 255, 255, 0.08)',
                backgroundColor: theme.card2,
                color: theme.color,
              },
            ]}
            placeholderTextColor={darkMode ? '#f6f6f6' : '#505050'}
            placeholder={placeholder}
            editable={false}
            value={selectedDate}
          />
          {Icon && <Icon style={styles.icon} />}
        </Pressable>
      </View>

      {open && (
        <>
          <Pressable style={styles.overlay} onPress={() => setOpen(false)} />
          <View style={styles.pickerContainer}>
            <DateTimePicker
              mode="date"
              value={date}
              display="default"
              onChange={onChange}
              maximumDate={new Date()}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default CustomDatePicker;

const styles = StyleSheet.create({
  inputBox: {
    gap: 5,
  },
  label: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'PTSerif_700Bold',
    color: '#121212',
    textTransform: 'capitalize',
  },
  inputWrapper: {
    position: 'relative',
  },
  input: {
    paddingVertical: 12,
    paddingHorizontal: 35,
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
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  pickerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
