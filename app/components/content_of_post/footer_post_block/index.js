import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import moment from 'moment';

const checkComment = (comment) => {
    const resultArray = comment.split(' ');
    const specialCharacters = new RegExp(/[#@]/);
    let withSpecialCharacters = '';
    let withoutSpecialCharacters = '';

    for(let i = 0; i < resultArray.length; i ++){
        if (specialCharacters.test(resultArray[i])) {
            withSpecialCharacters += resultArray[i];
        } else {
            withoutSpecialCharacters += resultArray[i];
        }
    }

    return (
        <Text style={styles.text_comment_style}>{withoutSpecialCharacters} <Text style={styles.text_special_style}>{withSpecialCharacters} </Text></Text>
    );
}

const FooterBlock = ({item}) => {
    return(
        <View style={styles.text_position}>
            <Text style={styles.text_style}>
                <Text style={styles.text_bold_style}>{item.username} </Text>
                {checkComment(item.comment)}
            </Text>
            <View style={styles.date_position}>
                <Text style={styles.text_data_style}>{moment(item.data, "YYYYMMDD").fromNow()}</Text>
            </View>
        </View>
    )
};

export default FooterBlock;
