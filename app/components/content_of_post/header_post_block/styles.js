import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/colors';
import {width, height} from "../../../constants/dimensions";

export default StyleSheet.create({
    row_elements: {
        flexDirection: 'row',
        height: height * 0.1,
        backgroundColor: COLORS.white
    },

    between_elements: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    column_elements: {
        flexDirection: 'column',
        height: height * 0.1,
        backgroundColor: COLORS.white
    },

    avatar_position: {
        marginLeft: width * 0.02,
        justifyContent: 'center',
        alignItems: 'center'
    },

    avatar_style: {
        height: width * 0.1,
        width: width * 0.1,
        borderRadius: (width * 0.1) / 2,
        borderWidth: 0.5,
        borderColor: COLORS.gray
    },

    text_position: {
        flex: 1,
        marginLeft: width * 0.02,
        justifyContent: 'center'
    },

    username_style: {
        fontSize: width * 0.035
    },

    location_style: {
        fontSize: width * 0.035,
        color: COLORS.gray
    },

    dots_position: {
        marginLeft: width * 0.02,
        justifyContent: 'center',
        alignItems: 'center'
    },

    dots_style: {
        marginRight: width * 0.05,
        height: width * 0.05,
        width: width * 0.05,
    }

})
