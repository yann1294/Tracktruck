import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { row_data2, row_data3, row_data4 } from '../../Data/Data';
import ThemeContext from '../../theme/ThemeContext';

const OrderConfirmationComponent = () => {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <View style={[styles.stack, { backgroundColor: theme.card2 }]}>
        <Text style={[styles.heading, { color: theme.heading }]}>Pick-Up & Drop-In Point</Text>
        <View style={styles.row_container}>
          {row_data2.map((d, index) => (
            <View key={d.id}>
              <View style={styles.row}>
                {d.Icon}
                <Text style={[styles.row_text, { color: theme.color }]}>{d.text}</Text>
              </View>
              {index < row_data2.length - 1 && <View style={[styles.line, { borderColor: theme.color }]}></View>}
            </View>
          ))}
        </View>
        <Text style={[styles.heading, { color: theme.heading }]}>Other Details</Text>
        <View style={styles.row_container2}>
          {row_data3.map((d) => (
            <View style={styles.row2} key={d.id}>
              <Text style={[styles.text, { color: theme.text3 }]}>{d.text}</Text>
              <Text style={[styles.value, { color: theme.color }]}>{d.value}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default OrderConfirmationComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
  },
  stack: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#f6f6f6',
    marginBottom: 30, // Add space between sections
  },
  heading: {
    fontSize: 18,
    lineHeight: 34,
    fontFamily: 'PTSerif_700Bold_Italic',
    marginBottom: 10,
  },
  line: {
    borderLeftWidth: 1,
    borderStyle: 'dashed',
    height: 30,
    marginLeft: 6,
    alignSelf: 'baseline',
  },
  row_container: {
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    width: '100%',
    justifyContent: 'space-between',
  },
  row_text: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'Roboto_400Regular',
    maxWidth: '85%',
    marginBottom: 8,
  },
  row_container2: {
    gap: 5,
    marginVertical: 10,
  },
  text: {
    fontSize: 14,
    lineHeight: 16,
    fontFamily: 'Roboto_400Regular',
    color: '#505050',
  },
  value: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'Roboto_400Regular',
    textAlign: 'right',
  },
});
