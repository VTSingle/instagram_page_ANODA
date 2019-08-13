import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import {Scene, Router, Modal} from 'react-native-router-flux';
import styles from './styles';
import {iconHome, iconSearch, iconAdd, iconHeart, iconProfile} from "./bottom_bar_icons";
import RentScreen from '../containers/posts_screen';
import {CAMERA, DIRRECT} from "../constants/images";

class RouterStack extends Component {
    scene = (icon) => {
        return(
            <Modal icon={icon} duration={0}>
                <Scene
                    title="Instagram"
                    key="RentScreen"
                    onRight={() => alert('direct')}
                    rightButtonImage={DIRRECT}
                    titleStyle = {styles.header_text_style}
                    onLeft ={() => alert('camera')}
                    leftButtonImage={CAMERA}
                    component={RentScreen}
                />
            </Modal>
        )
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Router>
                    <Scene
                        key="RentScreen"
                        tabs
                        tabBarPosition='bottom'
                        showLabel = {false}
                        initial
                    >
                        {this.scene(iconHome)}
                        {this.scene(iconSearch)}
                        {this.scene(iconAdd)}
                        {this.scene(iconHeart)}
                        {this.scene(iconProfile)}
                    </Scene>
                </Router>
            </SafeAreaView>
        )
    }
}

export default RouterStack;
