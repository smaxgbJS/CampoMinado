import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Alert
} from 'react-native';

import {
    Colors
} from 'react-native/Libraries/NewAppScreen';

import Params from './src/params';
import {
    createMinedBoard,
    cloneBoard,
    openField,
    hadExplosion,
    wonGame,
    showMines,
    invertFlag,
    flagsUsed
} from './src/functions'

// Components
import MineField from './src/components/MineField';
import Header from './src/components/Header';
import LevelSelection from './src/screens/LevelSelection';

function App(): React.JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    // Estado do tabuleiro
    const [board, setBoard] = useState<any[]>([]);
    const [won, setWon] = useState<boolean>(false);
    const [lost, setLost] = useState<boolean>(false);
    const [showLevelSelection, setLevelSelection] = useState<boolean>(false);

    // Função para os estados do jogo.
    function setState(states: {
        board?: any[],
        won?: boolean,
        lost?: boolean,
        showLevelSelection?: boolean
    }) {
        let {
            board,
            won,
            lost,
            showLevelSelection
        } = states;

        if(board !== undefined){
            setBoard(board);
        }
        if(won !== undefined){
            setWon(won);
        }
        if(lost !== undefined){
            setLost(lost);
        }
        if(showLevelSelection !== undefined){
            setLevelSelection(showLevelSelection);
        }
    }

     // Função para calcular a quantidade de minas
     function minesAmount() {
        const rows = Params.getRowsAmount();
        const cols = Params.getColumnsAmount();
        return Math.ceil((rows * cols) * Params.difficultLevel);
    }

    // Função assíncrona para criar o estado inicial do tabuleiro
    async function createState() {
        const rows = Params.getRowsAmount();
        const cols = Params.getColumnsAmount();
        const newBoard = await createMinedBoard(rows, cols, minesAmount());
        setBoard(newBoard);
        setState({
            won:false,
            lost:false,
            showLevelSelection:false
        })
    }

    // Funcao para abrir os campos do tabuleiro.
    function onOpenField(row: number, col: number) {
        const clonedBoard = cloneBoard(board);
        openField(clonedBoard, row, col);
        const lost = hadExplosion(clonedBoard);
        const won = wonGame(clonedBoard);

        if (lost) {
            showMines(clonedBoard);
            Alert.alert('Que pena ! Você Perdeu.', ':(');
        }

        if (won) {
            Alert.alert('Parabéns ! Você Venceu.', ':)');
        }

        setState({
            board: clonedBoard,
            lost: lost,
            won: won
        });
    }

    // Funcao para flegar os campos.
    function onSelectField(row: number, col: number) {
        const clonedBoard = cloneBoard(board);
        invertFlag(clonedBoard, row, col);
        const won = wonGame(clonedBoard);

        if(won){
            Alert.alert('Parabéns ! Você Venceu.', ':)');
        }

        setState({
            board: clonedBoard,
            won: won
        });
    }

    // Função para mudar o nivel selecionado do jogo.
    function onLevelSelected(level:number) {
        Params.difficultLevel = level;
        createState();
    }


    // Efeito para chamar createState ao montar o componente
    useEffect(() => {
        createState();
    }, []);

    return (
        <SafeAreaView style={[backgroundStyle, styles.container]}>
            <View style={styles.container}>
                <LevelSelection 
                    isVisible={showLevelSelection} 
                    onLevelSelected={onLevelSelected}
                    onCancel={() => setState({showLevelSelection:false}) }></LevelSelection>
                <Header flagsLeft={minesAmount() - flagsUsed(board)} onNewGame={createState}
                    onFlagPress={() => setState({showLevelSelection:true})}>
                </Header>
            </View>
            <View style={styles.board}>
                <MineField board={board}
                    onOpenField={onOpenField}
                    onSelectField={onSelectField}></MineField>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    board: {
        alignItems: 'center',
        backgroundColor: '#AAA'
    }
});

export default App;