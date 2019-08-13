import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/colors';
import {width, height} from "../../../constants/dimensions";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    image_style: {
        width,
        height: height * 0.5
    },

    row_position: {
        flex: 1,
        width,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    row_elements: {
        flexDirection: 'row',
        height: height * 0.05,
        justifyContent: 'center',
        alignItems: 'center'
    },

    flag_position: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: width * 0.03
    },

    indicator_position: {
        flexDirection: 'row',
        marginRight: width * 0.15,
        justifyContent: 'center',
        alignItems: 'center'
    },

    style_images: {
        marginLeft: width * 0.03,
        height: width * 0.06,
        width: width * 0.06,
    },

    indicator_style: {
        height: width * 0.02,
        width: width * 0.02,
        backgroundColor: COLORS.blue,
        margin: 3,
        borderRadius: width * 0.01
    },

    text_position: {
        width: width * 0.95,
        left: width * 0.005
    },

    text_style: {
        fontSize: width * 0.035
    },

    text_bold_style: {
        fontWeight: 'bold'
    },

})
