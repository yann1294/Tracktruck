import Onboard1 from "../assets/images/onboard1.png";
import Onboard2 from "../assets/images/onboard2.png";
import Onboard3 from "../assets/images/onboard3.png";
import Log_icon1 from "../assets/images/apple.svg";
import Log_icon2 from "../assets/images/google.svg";
import Log_icon3 from "../assets/images/facebook.svg";
import Web_icon1 from "../assets/images/web_apple.png";
import Web_icon2 from "../assets/images/web_google.png";
import Web_icon3 from "../assets/images/web_facebook.png";


import Pay from "../assets/images/pay.svg";
import Wallet from '../assets/images/wallet2.svg';
import Master from "../assets/images/master.svg";

import Dark_Log_icon1 from "../assets/images/dark_apple.svg";
import Dark_Log_icon2 from "../assets/images/dark_google.svg";
import Dark_Log_icon3 from "../assets/images/dark_facebook.svg";
import Dark_web_icon1 from "../assets/images/web_dark_apple.png";

import Stackicon1 from "../assets/images/stack_icon1.svg";
import Stackicon2 from "../assets/images/stack_icon2.svg";
import Dark_Stackicon1 from "../assets/images/dark_stack_icon1.svg";
import Dark_Stackicon2 from "../assets/images/dark_stack_icon2.svg";
import Stackicon3 from "../assets/images/stack_icon3.svg";
import Stackicon4 from "../assets/images/stack_icon4.svg";

import Service1 from "../assets/images/service1.png";
import Service2 from "../assets/images/service2.png";
import Service3 from "../assets/images/service3.png";
import Service4 from "../assets/images/service4.png";

import Tick from "../assets/images/tick_box.svg";
import Untick from "../assets/images/untick_box.svg";
import Untick2 from "../assets/images/minize_box.svg";

import Tab_icon1 from "../assets/images/tab_icon1.svg";
import Tab_icon2 from "../assets/images/tab_icon2.svg";
import Tab_icon3 from "../assets/images/tab_icon3.svg";
import Tab_icon4 from "../assets/images/tab_icon4.svg";
import Tab_icon5 from "../assets/images/tab_icon5.svg";
import Tab_icon6 from "../assets/images/tab_icon6.svg";
import Active_Tab_icon3 from "../assets/images/active_tab_icon3.svg";
import Active_Tab_icon4 from "../assets/images/active_tab_icon4.svg";
import Active_Tab_icon5 from "../assets/images/active_tab_icon5.svg";
import Active_Tab_icon6 from "../assets/images/active_tab_icon6.svg";
import Pick from "../assets/images/pick_location.svg";
import Drop from "../assets/images/drop_location.svg";
import Card1 from "../assets/images/card1.png";
import Card2 from "../assets/images/card2.png";
import Card3 from "../assets/images/card3.png";
import Profile_icon1 from "../assets/images/profile_icon1.svg";
import Profile_icon2 from "../assets/images/profile_icon2.svg";
import Profile_icon3 from "../assets/images/notification.svg";
import Profile_icon4 from "../assets/images/profile_icon3.svg";
import Profile_icon5 from "../assets/images/profile_icon4.svg";
import Profile_icon6 from "../assets/images/profile_icon5.svg";
import Dark_Profile_icon1 from "../assets/images/dark_profile_icon1.svg";
import Dark_Profile_icon2 from "../assets/images/dark_profile_icon2.svg";
import Dark_Profile_icon3 from "../assets/images/dark_notification.svg";
import Dark_Profile_icon4 from "../assets/images/dark_profile_icon5.svg";
import Dark_Profile_icon5 from "../assets/images/dark_profile_icon4.svg";
import Dark_Profile_icon6 from "../assets/images/profile_icon5.svg";

export const pages = [
    {
        id: 1,
        image: Onboard1,
        heading: 'Track Your Delivery to pick-up and Drop - point',
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Aenean commodo ligula eget dolor. ",
    },
    {
        id: 2,
        image: Onboard2,
        heading: 'Get Your Delivery On Time With Us',
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Aenean commodo ligula eget dolor. ",
    },
    {
        id: 3,
        image: Onboard3,
        heading: 'Delivery Your Package to World Wide',
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Aenean commodo ligula eget dolor. ",
    },
];

export const log_method = [
    {
        id: 1,
        icon: <Log_icon1 />,
        dark_icon: <Dark_Log_icon1 />,
        web_icon: Web_icon1,
        web_dark_icon: Dark_web_icon1,
    },
    {
        id: 2,
        icon: <Log_icon2 />,
        dark_icon: <Dark_Log_icon2 />,
        web_icon: Web_icon2,
        web_dark_icon: Web_icon2,
    },
    {
        id: 3,
        icon: <Log_icon3 />,
        dark_icon: <Dark_Log_icon3 />,
        web_icon: Web_icon3,
        web_dark_icon: Web_icon3,
    }
]

export const tab_data = [
    {
        id: 1,
        text: 'International',
    },
    {
        id: 2,
        text: 'National',
    },
    {
        id: 3,
        text: 'Department',
    }
]

export const stack_data = [
    {
        id: 1,
        icon: <Stackicon1 />,
        dark_icon: <Dark_Stackicon1 />,
        text: "Materials",
    },
    {
        id: 2,
        icon: <Stackicon2 />,
        dark_icon: <Dark_Stackicon2 />,
        text: "24,000 ton Truck",
    },
    {
        id: 3,
        icon: <Stackicon3 />,
        dark_icon: <Stackicon3 />, 
        text: "Bogota",
        heading: 'Pick it up from : ',
    },
    {
        id: 4,
        icon: <Stackicon4 />,
        dark_icon: <Stackicon4 />,
        text: "Texas",
        heading: 'Delivery to : ',
    },
]

export const service_data = [
    {
        id: 1,
        image: Service1,
        text: 'Railway Shipping',
    },
    {
        id: 2,
        image: Service2,
        text: 'Air Shipping',
    },
    {
        id: 3,
        image: Service3,
        text: 'Ocean Shipping',
    },
    {
        id: 4,
        image: Service4,
        text: 'Truck Shipping',
    },
]

export const tab_data2 = [
    {
        id: 1,
        text: 'All',
    },
    {
        id: 2,
        text: 'Completed',
    },
    {
        id: 3,
        text: 'Ongoing',
    }
]

export const track_data = [
    {
        id: 1,
        date: 'Fri 23,2024, May',
        track_no: 'R-7458-4567-4434-5854',
        item: 'Books ans stationary, Garri Ngwa',
        weight: '1000 kg',
        status: 'On-going',
    },
    {
        id: 2,
        date: 'Fri 23,2024, May',
        track_no: 'R-7458-4567-4434-5854',
        item: 'Books ans stationary, Garri Ngwa',
        weight: '1000 kg',
        status: 'Completed',
    },
]

export const stack_data2 = [
    {
        id: 1,
        heading: 'Package Items :',
        value: 'Books ans stationary, Garri Ngwa',
    },
    {
        id: 2,
        heading: 'Weight of Items :',
        value: '1000 kg',
    },
]
export const stack_data3 = [
    {
        id: 1,
        icon: <Tick />,
        heading: 'Courier requested',
        date: 'July 7 2022',
        time: '08:00am',
        isActive: false,
    },
    {
        id: 2,
        icon: <Tick />,
        heading: 'Package ready for delivery',
        date: 'July 7 2022',
        time: '08:30am',
        isActive: false,
    },
    {
        id: 3,
        icon: <Untick />,
        heading: 'Package in transit',
        date: 'July 7 2022',
        time: '10:30am',
        isActive: true,  // This item is active
    },
    {
        id: 4,
        icon: <Untick2 />,
        heading: 'Package delivered',
        date: 'July 7 2022',
        time: '10:30am',
        isActive: false,
    },
];

export const tab_data3 = [
    {
        id: 1,
        icon: <Tab_icon1 />,
        heading: 'New Order Made!',
        text: 'You have created a new shipping order',
        time: '2 hours ago',
    },
    {
        id: 2,
        icon: <Tab_icon2 />,
        heading: 'Payment Successfull',
        text: 'You have created a new shipping order',
        time: '2 hours ago',
    },
]

export const tab_data4 = [
    {
        id: 1,
        icon: <Tab_icon3 />,
        active_icon: <Active_Tab_icon3 />,
    },
    {
        id: 2,
        icon: <Tab_icon4 />,
        active_icon: <Active_Tab_icon4 />,
    },
    {
        id: 3,
        icon: <Tab_icon5 />,
        active_icon: <Active_Tab_icon5 />,
    },
    {
        id: 4,
        icon: <Tab_icon6 />,
        active_icon: <Active_Tab_icon6 />,
    },
]

export const tab_data5 = [
    {
        id: 1,
        text: '9.00 Am',
    },
    {
        id: 2,
        text: '10.00 Am',
    },
    {
        id: 3,
        text: '11.00 Am',
    },
    {
        id: 4,
        text: '1.00 Pm',
    },
    {
        id: 5,
        text: '4.00 Pm',
    },
    {
        id: 6,
        text: '8.00 Pm',
    },

]
export const tab_data6 = [
    {
        id: 1,
        text: 'Food',
    },
    {
        id: 2,
        text: 'Car',
    },
    {
        id: 3,
        text: 'Product',
    },
    {
        id: 4,
        text: 'Machine',
    },
    {
        id: 5,
        text: 'Medicine',
    },
    {
        id: 6,
        text: 'Glass',
    },

]

export const tab_data7 = [
    {
        id: 1,
        text: '1000 kg',
    },
    {
        id: 2,
        text: '2000 kg',
    },
    {
        id: 3,
        text: '3000 kg',
    },
    {
        id: 4,
        text: '4000 kg',
    },
    {
        id: 5,
        text: '5000 kg',
    },
]

export const row_data2 = [
    {
        id: 1,
        Icon: <Pick />,
        text: 'Chamberlaine Cnr White Pk & Passage Rd, Saint Michael',
    },
    {
        id: 2,
        Icon: <Drop />,
        text: 'Plot 10218, Moporoporo Rd, Broadhurst Ind, P.O. Box: 502670',
    },
]

export const row_data3 = [
    {
        id: 1,
        text: 'Package Items :',
        value: 'Books ans stationary, Garri Ngwa',
    },
    {
        id: 2,
        text: 'Weight of Items :',
        value: '1000 kg',
    },
    {
        id: 3,
        text: 'Tracking Number :',
        value: 'R-7458-4567-4434-5854',
    },
]

export const row_data4 = [
    {
        id: 1,
        text: 'Delivery Charges',
        value: '2,500.00',
    },
    {
        id: 2,
        text: 'Instant Delivery',
        value: '300.00',
    },
    {
        id: 3,
        text: 'Tax and Service Charges',
        value: '200.00',
    },
]

export const pay_method = [
    {
        id: 1,
        icon: <Dark_Log_icon2 />,
        text: 'Google pay',
    },
    {
        id: 2,
        icon: <Pay />,
        text: 'PayPal',
    },
    {
        id: 3,
        icon: <Wallet />,
        text: 'My Wallet',
    },
    {
        id: 4,
        icon: <Master />,
        text: 'Visa Debit Card',
    },
]

export const card_data = [
    {
        id: 1,
        image: Card1,
        card_no: '0000 0000 0000 0000',
        valid: '00/00',
        name: 'TACCHINO DAVIDE',
    },
    {
        id: 2,
        image: Card2,
        card_no: '0000 0000 0000 0000',
        valid: '00/00',
        name: 'TACCHINO DAVIDE',
    },
    {
        id: 3,
        image: Card3,
        card_no: '0000 0000 0000 0000',
        valid: '00/00',
        name: 'TACCHINO DAVIDE',
    },
]

export const profile_data = [
    {
        id: 1,
        name: 'Edit Profile',
        text: 'Name, phone no, address, email ...',
        icon: <Profile_icon1 />,
        dark_icon: <Dark_Profile_icon1 />,
    },
    {
        id: 2,
        name: 'My Wallet',
        text: 'Add Card, Topup',
        icon: <Profile_icon2 />,
        dark_icon: <Dark_Profile_icon2 />,
    },

    {
        id: 3,
        name: 'Notifications',
        text: 'Mute, Unmute',
        icon: <Profile_icon3 />,
        dark_icon: <Dark_Profile_icon3 />,
    },
    {
        id: 4,
        name: 'Language',
        text: 'English, French, etc ....',
        icon: <Profile_icon4 />,
        dark_icon: <Dark_Profile_icon5 />,
    },
    {
        id: 5,
        name: 'Dark Version',
        icon: <Profile_icon5 />,
        dark_icon: <Dark_Profile_icon4 />,
    },
   
    {
        id: 6,
        name: 'Logout',
        icon: <Profile_icon6 />,
        dark_icon: <Dark_Profile_icon6 />,
    },
]
