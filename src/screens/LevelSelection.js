import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Modal
} from 'react-native';

import ButtonMenu from '../components/ButtonMenu'

export default props => {
    return (
        <Modal onRequestClose={props.onCancel} visible={props.isVisible} animationType='slide' transparent={true}>
            <View style={styles.frame}>
                <View style={styles.container}>
                    <Text style={styles.title}>MENU</Text>
                    <TouchableOpacity
                        style={[styles.newGame]}
                        onPress={() => props.onNewGame()}>
                        <Text style={styles.newGameLabel}>NEW GAME</Text>
                    </TouchableOpacity>
                    <ButtonMenu
                        difficultyLevel="easy"
                        buttonLabel="EASY"
                        onLevelSelected={props.onLevelSelected}
                    />
                    <ButtonMenu
                        difficultyLevel="medium"
                        buttonLabel="MEDIUM"
                        onLevelSelected={props.onLevelSelected}
                    />
                    <ButtonMenu
                        difficultyLevel="hard"
                        buttonLabel="HARD"
                        onLevelSelected={props.onLevelSelected}
                    />
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        maxHeight: '100%'
    },
    container: {
        backgroundColor: '#0F1115',
        borderWidth: 5,
        borderLeftColor: '#EAEAEA',
        borderTopColor: '#EAEAEA',
        borderRightColor: '#797979',
        borderBottomColor: '#797979',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        maxHeight: 400
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#FF2E41'
    },
    button: {
        marginTop: 10,
        padding: 5
    },
    buttonLabel: {
        fontSize: 20,
        color: '#EEE',
        fontWeight: 'bold'
    },
    bgEasy: {
        backgroundColor: 'green'
    },
    bgMedium: {
        backgroundColor: 'blue'
    },
    bgHard: {
        backgroundColor: 'red'
    },
    newGame: {
        borderWidth: 5,
        borderLeftColor: '#EAEAEA',
        borderTopColor: '#EAEAEA',
        borderRightColor: '#858585',
        borderBottomColor: '#858585',
        minWidth: '85%',
        alignItems: 'center',
        marginTop: 10,
        padding: 5
    },
    newGameLabel: {
        fontSize: 20,
        color: '#EAEAEA',
        fontWeight: 'bold'
    }
});
