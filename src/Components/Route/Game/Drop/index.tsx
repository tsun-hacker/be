
import React, { useEffect, useState } from "react";
import DropInfo from "../../../../types/DropInfo";
import style from "./index.module.scss";

function Drop({ input, output, speed, onDamage, x } : DropInfo & { onDamage:()=>void }) {

    const [top, setTop] = useState(0);

    // 단어 내려오게?
    useEffect(() => {
        const intervalId = setInterval(()=>{
            setTop(top => top + 30);
        }, 1000/speed);
        
        return (() => {
            clearInterval(intervalId);
        });
    }, []);

    useEffect(() => {
        if(top > (innerHeight - 100)) {
            onDamage();
        }
    }, [top]);
    
    return (
        <div className={style.drop} style={{
            left: x + "px",
            top: top + "px"
        }}>
            {input}
        </div>
    );
}

export default Drop;