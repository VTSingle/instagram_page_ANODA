import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/colors';
import {width} from "../../../constants/dimensions";

export default StyleSheet.create({
    text_position: {
        width: width * 0.95,
        margin: width * 0.03,
        marginTop: width * 0.01
    },

    text_style: {
        fontSize: width * 0.035
    },

    text_bold_style: {
        fontWeight: 'bold'
    },

    text_comment_style: {
        color: COLORS.gray,
        fontSize: width * 0.035
    },

    text_special_style: {
        color: COLORS.blue
    },

    text_data_style: {
        color: COLORS.gray,
        textTransform: 'uppercase',
        fontSize: width * 0.03
    },

    date_position: {
        marginTop: width * 0.01
    }
})
