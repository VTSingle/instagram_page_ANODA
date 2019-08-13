import React, {Component} from 'react';
import {View, Image, TouchableOpacity, ScrollView, Animated, Text} from 'react-native';
import styles from './styles';
import {width} from "../../../constants/dimensions";
import {HEART, COMMENT, DIRRECT, FLAG} from "../../../constants/images";

class ContentBlock extends Component {
    scrollX = new Animated.Value(0);

    renderImageButton = (image, text) => {
        return(
            <TouchableOpacity onPress={() => this.props.onPress(text)}>
                <Image style={styles.style_images} resizeMode="contain" source={image}/>
            </TouchableOpacity>
        )
    };

    render() {
        const {item} = this.props;
        let position = Animated.divide(this.scrollX, width);

        return (
            <View style={styles.container}>
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    contentContainerStyle={{ flex: 0 }}
                    showsHorizontalScrollIndicator={false}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: this.scrollX } } }])}
                    scrollEventThrottle={16}
                >
                    {item.images.map((source, i) => {
                        return (
                            <Image
                                key={i}
                                resizeMode="contain"
                                style={styles.image_style}
                                source={{uri: source.url}}
                            />
                        );
                    })}
                </ScrollView>
                <View style={styles.row_position}>
                    <View style={styles.row_elements}>
                        {this.renderImageButton(HEART, 'Heart')}
                        {this.renderImageButton(COMMENT, 'Comment')}
                        {this.renderImageButton(DIRRECT, 'Direct')}
                    </View>
                    <View style={styles.indicator_position}>
                        {item.images.map((_, i) => {
                            let opacity = position.interpolate({
                                inputRange: [i - 1, i, i + 1],
                                outputRange: [0.3, 1, 0.3],
                                extrapolate: 'clamp'
                            });
                            return (
                                <Animated.View
                                    key={i}
                                    style={[{ opacity}, styles.indicator_style]}
                                />
                            );
                        })}
                    </View>
                    <View style={styles.flag_position}>
                        {this.renderImageButton(FLAG, 'Flag')}
                    </View>
                </View>
                <View style={styles.text_position}>
                    <Text numberOfLines={2} style={styles.text_style}> Liked by
                        <Text style={styles.text_bold_style}> {item.liked_by[0] + ", " + item.liked_by[1]} </Text>
                        and <Text style={styles.text_bold_style}>{item.liked_by.length - 2} others</Text></Text>
                </View>
            </View>
        );
    }
}

export default ContentBlock;
