import React, { useState } from "react";
import { View, FlatList, Image, StyleSheet, Text } from "react-native";
import { Colors, Fonts, Sizes, CommonStyles } from "../../constants/styles";
import { MaterialIcons } from '@expo/vector-icons';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';
import MyStatusBar from "../../components/myStatusBar";
import { useNavigation } from "expo-router";

const historyDataList = [
    {
        id: '1',
        task: 'Chemical Delivery',
        completed: true,
    },
    {
        id: '2',
        task: 'Oil Delivery',
        completed: false,
    },
    {
        id: '3',
        task: 'Machinery Delivery',
        completed: true,
    },
    {
        id: '4',
        task: 'Chemical Delivery',
        completed: true,
    }
];

const TripHistoryScreen = () => {

    const navigation = useNavigation();

    const [selectedDate, setSelectedDate] = useState(moment());

    return (
        <View style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <MyStatusBar />
            <View style={{ flex: 1 }}>
                {header()}
                {selectDate()}
                {historyData()}
            </View>
        </View>
    )

    function historyData() {
        const renderItem = ({ item }) => (
            <View style={styles.historyDataWrapStyle}>
                <Image
                    source={require('../../assets/images/users/user1.png')}
                    style={{ width: 50.0, height: 50.0, borderRadius: 25.0, }}
                />
                <View style={{ marginLeft: Sizes.fixPadding + 5.0, flex: 1, }}>
                    <Text style={{ ...Fonts.blackColor13SemiBold }}>
                        Damien Braun
                    </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Text style={{ ...Fonts.grayColor12Medium }}>
                            Task:
                        </Text>
                        <Text style={{ marginLeft: Sizes.fixPadding, ...Fonts.blackColor12SemiBold }}>
                            {item.task}
                        </Text>
                    </View>
                    {
                        item.completed
                            ?
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <Text style={{ ...Fonts.grayColor12Medium }}>
                                    Completed To:
                                </Text>
                                <Text style={{ marginLeft: Sizes.fixPadding, ...Fonts.blackColor12SemiBold }}>
                                    25 Jun 2020
                                </Text>
                            </View>
                            :
                            <Text style={{ ...Fonts.redColor12SemiBold }}>
                                Incompleted
                            </Text>
                    }
                </View>
            </View>
        )
        return (
            <FlatList
                data={historyDataList}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingTop: Sizes.fixPadding - 5.0, }}
            />
        )
    }

    function selectDate() {
        const datesBlacklistFunc = date => {
            return date.isoWeekday() === 7;
        }
        return (
            <CalendarStrip
                style={{
                    height: 80,
                    marginTop: Sizes.fixPadding * 2.0,
                    marginHorizontal: Sizes.fixPadding * 2.0,
                }}
                highlightDateContainerStyle={{
                    backgroundColor: Colors.primaryColor,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                leftSelector={[]}
                rightSelector={[]}
                maxDate={moment()}
                dateNumberStyle={{ fontSize: 14, color: Colors.blackColor, fontWeight: 'bold' }}
                dateNameStyle={{ fontSize: 12, color: Colors.blackColor, fontWeight: 'bold' }}
                highlightDateNameStyle={{ fontSize: 12, color: Colors.whiteColor, fontWeight: 'bold' }}
                highlightDateNumberStyle={{ fontSize: 16, color: Colors.whiteColor, fontWeight: 'bold' }}
                datesBlacklist={datesBlacklistFunc}
                disabledDateOpacity={0.6}
                disabledDateNameStyle={{ color: 'gray', fontSize: 14.0 }}
                disabledDateNumberStyle={{ color: 'gray', fontSize: 16.0, }}
                useIsoWeekday={false}
                scrollable={true}
                upperCaseDays={false}
                styleWeekend={true}
                selectedDate={selectedDate}
                onDateSelected={(date) => { setSelectedDate(date) }}
            />
        )
    }

    function header() {
        return (
            <View style={styles.headerWrapStyle}>
                <MaterialIcons
                    name="arrow-back-ios"
                    color={Colors.whiteColor}
                    size={22}
                    onPress={() => navigation.pop()}
                />
                <Text style={{ marginLeft: Sizes.fixPadding, flex: 1, ...Fonts.whiteColor18SemiBold }}>
                    My Trip History
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerWrapStyle: {
        paddingHorizontal: Sizes.fixPadding * 2.0,
        paddingTop: Sizes.fixPadding * 2.0,
        paddingBottom: Sizes.fixPadding * 6.0,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.primaryColor,
        borderBottomLeftRadius: Sizes.fixPadding * 5.0,
        borderBottomRightRadius: Sizes.fixPadding * 5.0,
    },
    historyDataWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.whiteColor,
        elevation: 2.0,
        borderRadius: Sizes.fixPadding - 5.0,
        marginHorizontal: Sizes.fixPadding * 2.0,
        padding: Sizes.fixPadding * 2.0,
        marginBottom: Sizes.fixPadding * 2.0,
        borderColor: '#ececec',
        borderWidth: 1.0,
        ...CommonStyles.shadow
    }
});

export default TripHistoryScreen;
