import React, { useRef, FormEvent, useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import DropInfo from "../../../types/DropInfo";
import GameInfo from "../../../types/GameInfo";
import Drop from "./Drop";
import style from "./index.module.scss";
import Sval from "sval";

function Game() {
    const history = useHistory();

    const location = useLocation<GameInfo>();
    const {
        customMode,
        customVar,
        customInput,
        customOutput,
        customHP,
        words
    } = location.state;

    const [dropI, setDropI] = useState(0);
    const [drops, setDrops] = useState<DropInfo[]>([]);
    const [speed, setSpeed] = useState(1);
    const [score, setScore] = useState(0);
    const [hp, setHp] = useState(customHP || 100);

    
    // 물방울 조지기
    useEffect(() => {
        const intervalId = setInterval(() => {
            setDropI(i => {
                return i + 1;
            });
            setSpeed(speed => speed);
        }, 1000);
        
        return (() => {
            clearInterval(intervalId);
        });
    }, []);

    useEffect(() => {
        let input : string;
        let output : string;
        if(customMode) {
            {
                const interpreter = new Sval({
                    ecmaVer: 2019,
                    sandBox: true
                });

                interpreter.import({ words });
                interpreter.run(customVar);
                interpreter.run(`exports.input = (${customInput});`);
                interpreter.run(`exports.output = (${customOutput});`);
                
                input = String(interpreter.exports.input);
                output = String(interpreter.exports.output);
            }
        } else {
            input = output = words[Math.floor(Math.random() * words.length)];
        }
        setDrops(drops => [...drops, {
            id: dropI,
            input: input,
            output: output,
            speed: speed,
            x: Math.random() * (innerWidth - 100)
        }]);
    }, [dropI]);
    
    function damageDrop(dropId : number) {
        setHp(hp => hp - 5);
        removeDrop(dropId);
    }

    function removeDrop(dropId : number) {
        setDrops(drops => drops.filter(drop => drop.id !== dropId));
    }

    function solveDrop(dropId : number) {
        setScore(score => score + 100);
        removeDrop(dropId);
    }
    


    // 단어 입력
    const ref = useRef<HTMLInputElement>();
    function typeEvent(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
        const word = ref.current.value;

        const drop = drops.find(drop => drop.output === word);
        if(drop) {
            solveDrop(drop.id);
        }
        
        ref.current.value = '';
        
    }

    
    // 아 ㅋㅋ hp 다 떨어짐
    useEffect(() => {
        if(hp <= 0) {
            history.push("/gameover/", { score });
        }
    }, [hp]);

    
    return (
        <div className={style.container}>
            <div className={style.acidRainBox}>
                {
                    drops.map(drop => 
                        <Drop key={drop.id} {...drop} onDamage={() => {damageDrop(drop.id)}}/>
                    )
                }
            </div>
            <form onSubmit={typeEvent}>
                <input ref={ref} className={style.typingBox}/>
            </form>
            <div className={style.acidPercentContainer}>
                <div style={{
                    height: hp + "%"
                }}>

                </div>
            </div>
            <div className={style.scoreContainer}>
                {score}
            </div>
        </div>
    );
}

export default Game;