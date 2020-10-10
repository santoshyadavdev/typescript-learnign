
// tslint:disable-next-line: max-classes-per-filetype Color = 'Black' | 'White';
type File = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

class Game {

    private pieces = Game.makePieces();

    private static makePieces() {
        return [
            // Kings
            new King('White', 'E', 1),
            new King('Black', 'E', 8),

            // Queens
            new Queen('White', 'D', 1),
            new Queen('Black', 'D', 8),

            // Bishops
            new Bishop('White', 'C', 1),
            new Bishop('White', 'F', 1),
            new Bishop('Black', 'C', 8),
            new Bishop('Black', 'F', 8),
        ];
    }
}

// tslint:disable-next-line: max-classes-per-file
class Position {
    constructor(private file: File, private rank: Rank) { }

    distanceFrom(position: Position) {
        return {
            rank: Math.abs(position.rank - this.rank),
            file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
        }
    }
}

// tslint:disable-next-line: max-classes-per-file
abstract class Piece {
    protected position: Position
    constructor(private readonly color: Color,
        file: File, rank: Rank) {
        this.position = new Position(file, rank);
    }

    moveTo(position: Position) {
        this.position = position;
    }

    abstract canMoveTo(position: Position): boolean
}





// tslint:disable-next-line: max-classes-per-file
class King extends Piece {
    canMoveTo(position: Position) {
        const distance = this.position.distanceFrom(position)
        return distance.rank < 2 && distance.file < 2
    }
}
// tslint:disable-next-line: max-classes-per-file
class Queen extends Piece {
    canMoveTo(position: Position): boolean {
        throw new Error("Method not implemented.");
    }
}
// tslint:disable-next-line: max-classes-per-file
class Bishop extends Piece {
    canMoveTo(position: Position): boolean {
        throw new Error("Method not implemented.");
    }
}
// tslint:disable-next-line: max-classes-per-file
class Knight extends Piece {
    canMoveTo(position: Position): boolean {
        throw new Error("Method not implemented.");
    }
}
// tslint:disable-next-line: max-classes-per-file
class Pawn extends Piece {
    canMoveTo(position: Position): boolean {
        throw new Error("Method not implemented.");
    }
}

// tslint:disable-next-line: max-classes-per-file
class Rook extends Piece {
    canMoveTo(position: Position): boolean {
        throw new Error("Method not implemented.");
    }
}
