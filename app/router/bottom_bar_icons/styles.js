import { StyleSheet } from 'react-native';
import {height, width} from "../../constants/dimensions";
import {COLORS} from "../../constants/colors";

const styles = StyleSheet.create({
    iconPosition: {
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        alignSelf:'center',
        justifyContent: 'center'
    },

    iconStyle: {
        width: height * 0.04,
        height: height * 0.04
    },

    textStyle: {
        color: COLORS.black,
        fontSize: height * 0.015
    },

    textStyleActive: {
        color: COLORS.tabBarIconColor,
        fontSize: height * 0.015
    }
});
export default styles;