
/**
 * Created by ward on 2018/1/15.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';



export default class VideoScreen extends Component {



    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to VideoScreen !
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

});
