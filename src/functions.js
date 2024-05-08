// Cria um tabuleiro vazio.
const createBoard = (rows, columns) => {
    return Array(rows).fill(0).map((_, row) => {
        return Array(columns).fill(0).map((_, column) => {
            return {
                row,
                column,
                opened: false,
                flagged: false,
                mined: false,
                exploded: false,
                nearMines: 0,
            }
        });
    });
}

// Espalha as minas no tabuleiro.
const spreadMines = (board, minesAmount) => {
    const rows = board.length;
    const columns = board[0].length;
    let plantedMines = 0;

    while (plantedMines < minesAmount) {
        const drawnRow = parseInt(Math.random() * rows, 10);
        const drawnColumn = parseInt(Math.random() * columns, 10);

        if (!board[drawnRow][drawnColumn].mined) {
            board[drawnRow][drawnColumn].mined = true;
            plantedMines++;
        }
    }
};

// Cria um tabuleiro com as minas.
const createMinedBoard = async (rows, columns, minesAmount) => {
    const board = await createBoard(rows, columns);
    spreadMines(board, minesAmount);
    return board;
}

// Clona o o board.
const cloneBoard = board => {
    return board.map(rows => {
        return rows.map(field => {
            return { ...field }
        })
    });
}

// Descobre quem são os vizinhos válidos de um determinado campo.
const getNeighbors = (board, row, col) => {
    const neighbors = [];
    const rows = [row - 1, row, row + 1];
    const cols = [col - 1, col, col + 1];
    rows.forEach(r => {
        cols.forEach(c => {
            const diff = r !== row || c !== col;
            const validRow = r >= 0 && r < board.length;
            const validColumn = c >= 0 && c < board[0].length;
            if (diff && validRow && validColumn) {
                neighbors.push(board[r][c]);
            }
        });
    });
    return neighbors;
}

const safeNeighborhood = (board, row, column) => {
    const safes = (result, neighboor) => result && !neighboor.mined;
    return getNeighbors(board, row, column).reduce(safes, true);
}

const openField = (board, row, column) => {
    const field = board[row][column];
    if (!field.opened) {
        field.opened = true;
        if (field.mined){
            field.exploded = true;
        } else if (safeNeighborhood(board, row, column)){
            const neighbors = getNeighbors(board, row, column);
            neighbors.forEach(
                n => openField(board, n.row, n.column)
            );
        } else {
            const neighboors = getNeighbors(board, row, column);
            field.nearMines = neighboors.filter(n => n.mined).length;
        }
    }
}

const fields = board => [].concat(...board);

const hadExplosion = board => fields(board).filter(field => field.exploded).length > 0;

const pendding = field => (field.mined && !field.flagged) || (!field.mined && !field.opened);

const wonGame = board => fields(board).filter(pendding).length === 0;

const showMines = board => fields(board).filter(field => field.mined).forEach(
    field => field.opened = true
);

const invertFlag = (board, row, column) => {
    const field = board[row][column];

    field.flagged = !field.flagged;
}

const flagsUsed = board => fields(board).filter(field => field.flagged).length;

export { 
    createMinedBoard,
    cloneBoard,
    openField,
    hadExplosion,
    wonGame,
    showMines,
    invertFlag,
    flagsUsed
}