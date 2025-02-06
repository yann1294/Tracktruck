import DateTimePicker from '@react-native-community/datetimepicker';
import React from 'react'
import { Colors } from '../constants/styles';

const Calendar = ({ showCalender, changeDate }) => {

    const handleConfirm = (e, date) => {
        changeDate(date);
    };

    return (
        showCalender && <DateTimePicker
            value={new Date()}
            mode="date"
            onChange={handleConfirm}
            minimumDate={new Date()}
            accentColor={Colors.primaryColor}
        />
    )
}

export default Calendar