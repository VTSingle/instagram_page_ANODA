import React, { PureComponent } from 'react';
import {View, FlatList} from 'react-native';
import styles from './styles';
import Toast from '../../components/toast';
import {test_posts} from "../../config/test_posts";
import RenderPost from '../../components/render_post';

class PostsList extends PureComponent {
    state = {
        show_list: [],
        visible: false,
        message: ''
    };

    changeState(data){
        this.setState({show_list: data});
    }

    componentDidMount(): void {
        this.changeState(test_posts);
    }

    showToast = (message) => {
        setTimeout(() => this.setState({
            visible: true,
            message
        }), 500);
        setTimeout(() => this.setState({
            visible: false
        }), 3000);
    };

    renderItems = (item) => <RenderPost item = {item} onTouchIcon = {this.showToast}/>;

    render() {
        const {show_list, visible, message} = this.state;
        return (
            <View style={styles.container}>
                <Toast visible={visible} message={message}/>
                <FlatList
                    data={show_list}
                    renderItem={({ item }) => this.renderItems(item)}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    };
}

export default PostsList;
