import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import Input from '../Input/Input';
import Calendar from "../../assets/images/Calendar.svg";
import Down from "../../assets/images/down.svg";
import CustomDropdown from '../Dropdown/Dropdown';
import CustomDatePicker from '../DatePicker/DatePicker';

const FillProfileComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.input_container}>
        <Input placeholder="Full Name" />
        <Input placeholder="Nick Name" />
        <CustomDatePicker placeholder="Date of Birth" Icon={Calendar} />
        <Input placeholder="Phone Number" keyboardType="phone-pad" />
        <CustomDropdown placeholder="Gender" options={['Male', 'Female', 'Other']} Icon={Down} />
        <CustomDropdown placeholder="Personal/Business" options={['Personal', 'Business', 'studies']} Icon={Down} />
      </View>
    </View>
  )
}

export default FillProfileComponent;

const styles = StyleSheet.create({
  container: {
    
  },
  input_container: {
    marginBottom: 17,
  },
});
