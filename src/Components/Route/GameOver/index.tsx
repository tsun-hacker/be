
import React from "react";
import { useLocation } from "react-router-dom";

function GameOver() {
    const location = useLocation();
    const { score } = location.state as any;

    return (
        <div>
            <h1>
                GAME OVER {score}
            </h1>
        </div>
    )
}

export default GameOver;