import React, { FormEvent, useRef } from "react";
import {
    MemoryRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import Index from "../Route/Index";
import Game from "../Route/Game";
import GameOver from "../Route/GameOver";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Index/>
                </Route>
                <Route path="/game/" exact>
                    <Game/>
                </Route>
                <Route path="/gameover/" exact>
                    <GameOver/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App;
