//create a chessBoard
const chessBoard = Array.from({length: 8}, () => Array.from({length: 8}, () => false));
console.table(chessBoard);
function possibleMoves(x, y){
    let moves = [{x: x + 2, y: y + 1},
                 {x: x - 2, y: y - 1},
                 {x: x - 2, y: y + 1},
                 {x: x + 2, y: y - 1},
                 {x: x + 1, y: y + 2},
                 {x: x - 1, y: y - 2},
                 {x: x - 1, y: y + 2},
                 {x: x + 1, y: y - 2}]
    let validMoves = moves.filter((move) => move.x >= 0 && move.y >= 0 && move.x < 8 && move.y < 8);
    return validMoves;

}