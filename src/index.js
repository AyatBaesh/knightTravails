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
function findShortestPath(start, end){
    let queue = [{node: start, path: [start]}];
    let visited = {};
    while(queue.length > 0){
        let current = queue.shift();
        let node = current.node;
        let path = current.path;
        let nodeKey = `${node.x},${node.y}`
        if(visited[nodeKey]){
            continue;
        }
        visited[nodeKey] = true;
        if(node.x === end.x && node.y === end.y){
            return path;
        }
        let nextMoves = possibleMoves(node.x, node.y);
        for(let move of nextMoves){
            queue.push({node: move, path: [...path, move] });
        }
    }
}
console.log(findShortestPath({x: 3,y: 3}, {x: 3, y: 4}));