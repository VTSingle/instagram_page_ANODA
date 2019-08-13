import React  from 'react';
import { Image, View } from 'react-native';
import styles from './styles';
import {BOTTOM_BAR_HOME, BOTTOM_BAR_ADD, BOTTOM_BAR_HEART, BOTTOM_BAR_PROFILE, BOTTOM_BAR_SEARCH} from "../../constants/images";

const show_icon = (focused, icon_active, icon_hide) =>
    <View style={styles.iconPosition}>
        <Image
            style={styles.iconStyle}
            resizeMode="contain"
            source={focused ? icon_active : icon_hide}
        />
    </View>;

export const iconHome = ({ icon, focused }) => show_icon(focused, BOTTOM_BAR_HOME, BOTTOM_BAR_HOME);

export const iconSearch = ({ icon, focused }) => show_icon(focused, BOTTOM_BAR_SEARCH, BOTTOM_BAR_SEARCH);

export const iconAdd = ({ icon, focused }) => show_icon(focused, BOTTOM_BAR_ADD, BOTTOM_BAR_ADD);

export const iconHeart = ({ icon, focused }) => show_icon(focused, BOTTOM_BAR_HEART, BOTTOM_BAR_HEART);

export const iconProfile = ({ icon, focused }) => show_icon(focused, BOTTOM_BAR_PROFILE, BOTTOM_BAR_PROFILE);