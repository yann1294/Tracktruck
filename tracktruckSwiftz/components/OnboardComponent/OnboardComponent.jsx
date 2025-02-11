import React, { useContext, useEffect, useState, useRef, } from 'react';
import { StyleSheet, Text, View, Animated, Dimensions, Image, BackHandler, ScrollView, Platform, } from 'react-native';
import { router } from "expo-router";
import Pagination from '../Pagination/Pagination';
import ThemeContext from '../../theme/ThemeContext';
import Button from '../Button/Button';
import { pages } from "../../Data/Data";

const { width, height } = Dimensions.get('window');

const OnboardComponent = () => {
    const { theme, darkMode } = useContext(ThemeContext);
    const swiperRef = useRef(null);
    const totalPages = pages.length;
    const [activePageIndex, setActivePageIndex] = useState(0);

     const headingOpacity = useRef(new Animated.Value(1)).current;
     const descriptionOpacity = useRef(new Animated.Value(1)).current;
     const paginationOpacity = useRef(new Animated.Value(1)).current;
    
        useEffect(() => {
                animateContent();
        }, [activePageIndex]);

         const animateContent = () => {
          Animated.sequence([
              Animated.parallel([
                  Animated.timing(headingOpacity, { toValue: 0, duration: 200, useNativeDriver: true }),
                  Animated.timing(descriptionOpacity, { toValue: 0, duration: 200, useNativeDriver: true }),
              ]),
              Animated.parallel([
                  Animated.timing(headingOpacity, { toValue: 1, duration: 200, useNativeDriver: true }),
                  Animated.timing(descriptionOpacity, { toValue: 1, duration: 200, useNativeDriver: true }),
              ])
          ]).start();
      };

       const handleImageScroll = (event) => {
              const pageIndex = Math.round(event.nativeEvent.contentOffset.x / width);
              setActivePageIndex(pageIndex);
          };
      
          const handleNextPress = () => {
              const nextIndex = Math.min(activePageIndex + 1, totalPages - 1);
              swiperRef.current.scrollTo({ x: nextIndex * width, animated: true });
              setActivePageIndex(nextIndex);
          };
          const handlePrevPress = () => {
                  if (activePageIndex === 0) {
                      BackHandler.exitApp();
                  } else {
                      const prevIndex = Math.max(activePageIndex - 1, 0);
                      swiperRef.current.scrollTo({ x: prevIndex * width, animated: true });
                      setActivePageIndex(prevIndex);
                  }
              };
    const handleCreateAccountPress = () => {
        router.push('login'); 
      };

    return (
      <View style={styles.Onboardpage}>
       <ScrollView
                      horizontal
                      pagingEnabled
                      showsHorizontalScrollIndicator={false}
                      ref={swiperRef}
                      onScroll={handleImageScroll}
                      scrollEventThrottle={16}
                      contentContainerStyle={{ width: width * totalPages }}
                      style={{ flex: 1 }}
                  >
                      {pages.map((page, index) => (
                          <View key={index} style={[styles.page, { width }]}>
                              <View style={styles.imageContainer}>
                                  <Image source={page.image} style={styles.image} />
                              </View>
                          </View>
                      ))}
                  </ScrollView>
        <View style={[styles.onboard_content, {backgroundColor:theme.background}]}>
            <View style={styles.onboard_inside_content}>
                <Animated.View style={{ opacity: paginationOpacity }}>
                    <Pagination activePageIndex={activePageIndex} totalPages={pages.length} dotBackgroundColor="#E6E6FA" activeDotBackgroundColor="#FA6900" />
                </Animated.View>
                <Animated.Text style={[styles.heading, { color: theme.color }, { opacity: headingOpacity }]}>
                    {pages[activePageIndex].heading}
                </Animated.Text>
                <Animated.Text style={[styles.description, { color: theme.text3 }, { opacity: descriptionOpacity }]}>
                    {pages[activePageIndex].text}
                </Animated.Text>
                <View style={styles.page_button_container}>
      {activePageIndex === totalPages - 1 ? (
        <View style={{ width: '100%' }}>
          <Button buttonText="next" onPress={handleCreateAccountPress} />
        </View>
      ) : (
        <View style={styles.nextButtons}>
          <Button buttonText="next" onPress={handleNextPress} />
        </View>
      )}
    </View>
            </View>
        </View>
        </View>
    );
};

export default OnboardComponent;

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    imageContainer: {
        flex: 1,
        marginHorizontal:Platform.OS === 'web'? 10 : '5%',
        paddingTop:Platform.OS === 'web'? 30 : '15%',
        alignItems:  Platform.OS === 'web'? 'center' : null,
    },
    image: {
        height:Platform.OS === 'web'? 350 : '50%',
        width:Platform.OS === 'web'? 500 : '100%',
        resizeMode: 'cover',
        borderRadius: 20,
    },
  Onboardpage: {
    flex: 1,
  },
    onboard_content: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingHorizontal: '5%',
        paddingVertical:Platform.OS === 'web'? 20 : '5%',
    },
    onboard_inside_content: {
        alignItems: 'center',
    },
    heading: {
        fontFamily: 'PTSerif_700Bold_Italic',
        fontSize:Platform.OS === 'web'? 20 : width * 0.07, 
        lineHeight:Platform.OS === 'web'? 30 : width * 0.08, 
        textAlign: 'center',
        paddingTop: 30,
        paddingBottom: 16,
        maxWidth: '100%',
    },
    description: {
        fontSize: 14,
        lineHeight:Platform.OS === 'web'? 1 : width * 0.05, 
        textAlign: 'center',
        fontFamily: 'Roboto_400Regular',
        marginBottom: 30,
        color: '#505050',
    },
    page_button_container: {
        marginBottom:Platform.OS === 'web'? 10 : 37,
        paddingTop:Platform.OS === 'web'? 0 : 10,
        width: '100%',
      },
      nextButtons: {
        width: '100%',
      }
});
