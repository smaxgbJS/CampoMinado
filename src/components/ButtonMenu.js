import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

export default props => {
    const { difficultyLevel } = props;

    const getButtonStyle = () => {
        switch (difficultyLevel) {
            case 'easy':
                return styles.bgEasy;
            case 'medium':
                return styles.bgMedium;
            case 'hard':
                return styles.bgHard;
            default:
                return styles.bgEasy;
        }
    };

    const getDifficultLevel = () => {
        switch (difficultyLevel) {
            case 'easy':
                return 0.1;
            case 'medium':
                return 0.2;
            case 'hard':
                return 0.3;
            default:
                return 0.1;
        }
    };

    return(
        <React.Fragment>
            <View>
                <TouchableOpacity
                    style={[styles.button, getButtonStyle()]}
                    onPress={()=> props.onLevelSelected(getDifficultLevel())}>
                    <Text style={styles.buttonLabel}>{props.buttonLabel}</Text>
                </TouchableOpacity>
            </View>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    button: {
        minWidth: '85%',
        alignItems: 'center',
        marginTop: 10,
        padding: 5
    },
    buttonLabel: {
        fontSize: 20,
        color: '#EEE',
        fontWeight: 'bold'
    },
    bgEasy:{
        borderWidth: 5,
        borderLeftColor: '#32BA0F',
        borderTopColor: '#32BA0F',
        borderRightColor: '#207A09',
        borderBottomColor: '#207A09',
    },
    bgMedium:{
        borderWidth: 5,
        borderLeftColor: '#FAEF11',
        borderTopColor: '#FAEF11',
        borderRightColor: '#C1BB00',
        borderBottomColor: '#C1BB00',
    },
    bgHard:{
        borderWidth: 5,
        borderLeftColor: '#FC0000',
        borderTopColor: '#FC0000',
        borderRightColor: '#7D0000',
        borderBottomColor: '#7D0000',
    },
});