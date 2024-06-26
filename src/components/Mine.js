import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    mineCore:{
        height: 14,
        width: 14,
        borderRadius: 10,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    line:{
        position: 'absolute',
        height: 3,
        width: 20,
        borderRadius: 3,
        backgroundColor: 'black'
    }
});

export default props => {
    return(
        <React.Fragment>
            <View style={styles.container}>
                <View style={styles.mineCore}></View>
                <View style={styles.line}></View>
                <View style={[styles.line, {transform: [{rotate: '45deg'}]}]}></View>
                <View style={[styles.line, {transform: [{rotate: '90deg'}]}]}></View>
                <View style={[styles.line, {transform: [{rotate: '135deg'}]}]}></View>
            </View>
        </React.Fragment>
    );
}