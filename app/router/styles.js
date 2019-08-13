import { StyleSheet, Platform } from 'react-native';
import { COLORS } from '../constants/colors';
import {width} from "../constants/dimensions";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },

    header_text_style: {
        alignSelf: 'center',
        textAlign: "center",
        justifyContent: 'center',
        top: Platform.OS === 'ios' ? null : width * 0.02,
        flex: 1,
        fontFamily: 'Billabong',
        fontSize: width * 0.08
    }
})
