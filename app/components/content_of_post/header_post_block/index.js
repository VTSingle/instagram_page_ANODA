import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {DOTS} from "../../../constants/images";

const HeaderBlock = ({item, onPress}) => {
    return(
        <View style = {styles.between_elements}>
            <View style = {styles.row_elements}>
                <View style = {styles.avatar_position}>
                    <Image style={styles.avatar_style} source={{uri: item.avatar}}/>
                </View>
                <View style = {styles.column_elements}>
                    <View style = {styles.text_position}>
                        <Text style={styles.username_style}>{item.username}</Text>
                        <Text style={styles.location_style}>{item.location + " >"}</Text>
                    </View>
                </View>
            </View>
            <View style = {styles.dots_position}>
                <TouchableOpacity onPress = {() => onPress('ADD')}>
                    <Image style={styles.dots_style} source={DOTS}/>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default HeaderBlock;
