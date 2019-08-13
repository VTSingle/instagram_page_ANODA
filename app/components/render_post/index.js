import React from 'react';
import {View} from 'react-native';
import HeaderBlock from '../content_of_post/header_post_block';
import ContentBlock from '../content_of_post/content_post_block';
import FooterBlock from '../content_of_post/footer_post_block';

const RenderPost = ({item, onTouchIcon}) => {
    return(
        <View>
            <HeaderBlock item={item} onPress={onTouchIcon}/>
            <ContentBlock item={item} onPress={onTouchIcon}/>
            <FooterBlock item={item}/>
        </View>
    )
};

export default RenderPost;
