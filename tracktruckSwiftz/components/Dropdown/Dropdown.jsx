import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Pressable, Modal, FlatList } from 'react-native';
import ThemeContext from '../../theme/ThemeContext';

const CustomDropdown = ({ label, placeholder, options, borderRadius, borderColor, Icon }) => {
  const { theme, darkMode } = useContext(ThemeContext);
  const [selectedValue, setSelectedValue] = useState('');
  const [open, setOpen] = useState(false);
  const placeholderColor = darkMode ? '#f6f6f6' : '#505050';

  const handleSelect = (value) => {
    setSelectedValue(value);
    setOpen(false);
  };

  const close = () => {
    setOpen(false);
  };

  return (
    <View>
      <View style={styles.inputBox}>
        <Text style={[styles.label, { color: theme.color }]}>{label}</Text>
        <Pressable onPress={() => setOpen(true)} style={styles.inputWrapper}>
          <View style={[
            styles.input,
            {
              borderRadius: borderRadius || 10,
              borderColor: borderColor || 'rgba(255, 255, 255, 0.08)',
              backgroundColor: theme.card2,
            }
          ]}>
            <Text style={{ color: selectedValue ? theme.color : placeholderColor }}>
              {selectedValue || placeholder}
            </Text>
          </View>
          {Icon && <Icon style={styles.icon} />}
        </Pressable>
      </View>

      {open && (
        <Modal transparent={true} animationType="fade" visible={open}>
          <Pressable style={styles.modalBackground} onPress={close} >
            <View style={styles.modalContainer}>
              <FlatList
                data={options}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <Pressable onPress={() => handleSelect(item)} style={styles.option}>
                    <Text>{item}</Text>
                  </Pressable>
                )}
              />
            </View>
          </Pressable>
        </Modal>
      )}
    </View>
  );
};

export default CustomDropdown;

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
    paddingVertical: 16,
    paddingHorizontal: 35,
    borderWidth: 1,
    minWidth: 140,
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    position: 'absolute',
    right: 15,
    top: '65%',
    transform: [{ translateY: -12 }],
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  option: {
    padding: 10,
  },
});
