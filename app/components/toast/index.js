import React from 'react';
import Toast from 'react-native-root-toast';

const ToastMessage = ({visible, message}) => {
        return <Toast
            visible={visible}
            position={100}
            shadow={false}
            animation={false}
            hideOnPress={true}>{message}</Toast>;
};
export default ToastMessage;