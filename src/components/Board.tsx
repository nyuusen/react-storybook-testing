import { Repeat } from "typescript-tuple"
import { Square, SquareState } from "./Square"

export type BoardState = Repeat<SquareState, 9>

type BoardProps = {
    squares: BoardState
    onClick: (i: number) => void
}

export const Board = (props: BoardProps) => {
    const renderSquare = (i: number) => (
        <Square value={props.squares[i]} position={i} onClick={() => props.onClick(i)} />
    )

    return (
        <div>
            <div className='board-row'>
                {[0, 1, 2].map((i) => (renderSquare(i)))}
            </div>
            <div className='board-row'>
                {[3, 4, 5].map((i) => (renderSquare(i)))}
            </div>
            <div className='board-row'>
                {[6, 7, 8].map((i) => (renderSquare(i)))}
            </div>
        </div>
    )
}