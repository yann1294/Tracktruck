import { StyleSheet, Text, View, Image, Pressable, ScrollView, Switch, Modal } from 'react-native';
import React, { useContext, useState}  from 'react';
import ThemeContext from '../../theme/ThemeContext';
import Profiles from "../../assets/images/profile_image.png";
import { profile_data } from '../../Data/Data';
import Arrow from "../../assets/images/right_arrow.svg";
import Dark_Arrow from "../../assets/images/dark_right_arrow.svg";
import Camera from '../../assets/images/camera.svg';
import { router } from 'expo-router';

const ProfileComponent = () => {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
    const [modalVisible, setModalVisible] = useState(false); // Modal visibility state

    const handleLogout = () => {
        setModalVisible(true); // Show modal
    };
    const confirmLogout = () => {
      // Perform logout action here
      setModalVisible(false);
      router.push('login');
    };
  
    const cancelLogout = () => {
      setModalVisible(false);
    };

  return (
    <View style={styles.main_container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.image_box}>    
        <View style={styles.image_container}>       
          <Image source={Profiles} alt='image' style={styles.image} />
          <Pressable style={[styles.circle, {backgroundColor:theme.heading}]}>
              <Camera />
          </Pressable>
        </View>
        </View>
        <View style={styles.container}>
            <View style={styles.profile_data_container}>
                {profile_data.map((d) => (
                    <View key={d.id}>
                        <Pressable
                style={[styles.row, { backgroundColor: theme.card2 }]}
                onPress={() => {
                    if (d.name === 'Logout') {
                        handleLogout();
                    } else if (d.name === 'Dark Version') {
                        toggleTheme();
                    } else if (d.onPress) {
                        d.onPress();  
                    }
                }}
            >
                            <View style={styles.row_left}>
                                <Pressable style={styles.circle2}>
                                    {darkMode ? d.dark_icon : d.icon}
                                </Pressable>
                                <View style={styles.profile_column}>
                                    <Text style={[styles.row_name, { color: theme.color }]}>{d.name}</Text>
                                    {d.text && <Text style={[styles.row_text, {color:theme.text}]}>{d.text}</Text>}
                                </View>
                            </View>
                            {d.name === 'Dark Version' ? (
                                <Switch
                                    trackColor={{ false: "#767577", true: "#060962" }}
                                    thumbColor={darkMode ? "#f4f3f4" : "#f4f3f4"}
                                    onValueChange={toggleTheme}
                                    value={darkMode}
                                    style={styles.switch}
                                />
                            ) : ( darkMode? <Dark_Arrow /> : <Arrow /> )}
                        </Pressable>
                    </View>
                ))}
            </View>
            <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={cancelLogout}
      >
        <View style={styles.modalContainer}>
          <View style={[styles.modalView]}>
            <Text style={styles.modalText}>Are you sure you want to logout?</Text>
            <View style={styles.modalButtons}>
              <Pressable style={styles.button} onPress={confirmLogout}>
                <Text style={styles.buttonText}>Yes</Text>
              </Pressable>
              <Pressable style={[styles.button, styles.buttonCancel]} onPress={cancelLogout}>
                <Text style={styles.buttonText}>No</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
        </View>
      </ScrollView>
    </View>
    
  )
}

export default ProfileComponent;

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
    image_box: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 30,
      },
      image: {
        width: 100,
        height: 100,
        position: 'relative',
      },
      circle: {
        position: 'absolute',
        backgroundColor: '#060962',
        borderRadius: 50,
        alignItems:'center',
        justifyContent: 'center',
        bottom: 0,
        width:  30,
        height: 30,
        right: 0,
      }, 
      container: {
        flex: 1,
        paddingVertical: 30,
    },
    dropdownContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    profile_data_container: {
        gap: 16,
        marginBottom: 54,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 10,
        backgroundColor: '#f6f6f6',
        minHeight: 61,
        shadowColor: '#00000026',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.15,
        shadowRadius: 10,
        elevation: 5, 
    },
    row_left: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    row_name: {
        fontSize: 16,
        lineHeight: 16,
        fontFamily: 'PTSerif_700Bold',
        color: '#000000',
        textTransform: 'capitalize',
    },
    row_text: {
        fontSize: 12,
        lineHeight: 16,
        fontFamily: 'Roboto_400Regular',
    },
    switch: {
        width: 50,
        height: 20,
        marginVertical: 10,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
      backgroundColor: '#ffffff',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    modalText: {
      fontSize: 18,
      marginBottom: 15,
      textAlign: 'center',
    },
    modalButtons: {
      flexDirection: 'row',
      gap: 10,
    },
    buttonCancel: {
      backgroundColor: '#757575',
    },
    button: {
      backgroundColor: '#FA6900',
      borderRadius: 5,
      paddingVertical: 5,
      paddingHorizontal: 10,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    },
})