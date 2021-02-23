'use strict';

const GameRoom = ({ players }) => {

    const Display = ({ playerName }) => <li> {playerName} </li>

    return (
        <ul>
            <h2>Game Room:</h2>
            {players.map((playerName, i) => (
                <Display key={i} playerName={playerName} />
            ))}
        </ul>
    )
}
export default GameRoom;