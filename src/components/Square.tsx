export type SquareState = 'O' | 'X' | null

type SquareProps = {
    value: SquareState
    position: number
    onClick: () => void
}

export const Square = (props: SquareProps) => (
    <button className='square' onClick={props.onClick} data-cy={`square-${props.position}`}>
        {props.value}
    </button>
)