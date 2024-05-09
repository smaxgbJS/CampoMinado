import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import Flag from './Flag';

export default props => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={props.openMenu}>
                <Text style={styles.buttonLabel}>MENU</Text>
            </TouchableOpacity>

            <View style={styles.flagContainer}>
                <View style={styles.flagButton}>
                    <Flag bigger></Flag>
                </View>
                <Text style={styles.flagsLeft}>= {props.flagsLeft}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#252A34',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20
    },
    flagContainer: {
        flexDirection: 'row',
    },
    flagButton: {
        marginTop: 10,
        minWidth: 30
    },
    flagsLeft: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 20,
        color: '#FF2E63'
    },
    button: {
        backgroundColor: '#252A34',
        borderWidth: 5,
        borderLeftColor: '#EAEAEA',
        borderTopColor: '#EAEAEA',
        borderRightColor: '#858585',
        borderBottomColor: '#858585',
        padding: 5,
        paddingLeft: 30,
        paddingRight: 30
    },
    buttonLabel: {
        fontSize: 22,
        color: '#FF2E63',
        fontWeight: 'bold'
    }
});