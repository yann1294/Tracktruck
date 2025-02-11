import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useContext } from 'react';
import ThemeContext from '../../theme/ThemeContext';
import { PTSerif_700Bold, PTSerif_700Bold_Italic } from '@expo-google-fonts/pt-serif';

const Input = ({
  label,
  placeholder,
  keyboardType,
  borderRadius,
  borderColor,
  background,
  Icon,
}) => {
  const { theme, darkMode } = useContext(ThemeContext);

  const placeholderColor = darkMode ? '#f6f6f6' : '#505050';

  return (
    <View>
      <View style={styles.inputBox}>
        <Text style={[styles.label, { color: theme.color }]}>{label}</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={[
              styles.input,
              {
                color: theme.color,
                borderRadius: borderRadius || 10,
                borderColor: borderColor || 'rgba(255, 255, 255, 0.08)',
                backgroundColor: background || theme.card2,
              },
            ]}
            placeholderTextColor={placeholderColor}
            placeholder={placeholder}
            keyboardType={keyboardType}
          />
          {Icon && <Icon style={styles.icon} />}
        </View>
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputBox: {
    gap: 5,
  },
  label: {
    fontSize: 18,
    lineHeight: 34,
    fontFamily: 'PTSerif_700Bold_Italic',
    color: '#121212',
    textTransform: 'capitalize',
  },
  inputWrapper: {
    position: 'relative',
  },
  input: {
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderWidth: 1,
    minWidth: 140,
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    left: 10,
    top: '56%',
    transform: [{ translateY: -12 }],
  },
});
