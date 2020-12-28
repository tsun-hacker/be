import React, { ChangeEvent,  useEffect,  useRef,  useState } from "react";
import { useHistory } from "react-router-dom";
import style from "./index.module.scss";
import { useForm } from "react-hook-form";
import { DEFAULT_WORDS } from "../../../consts";
import video from './rain.mp4';

function Index() {
    const history = useHistory();
    const { register, handleSubmit } = useForm();
    function onSubmit(data : any) {
        history.push("/game/", {
            words: data.words.split("\n"),
            customMode: data.customMode,
            customVar: data.customVar,
            customInput: data.customInput,
            customOutput: data.customOutput,
            customHP: data.customHP
        });
    }

    const [customMode, setCustomMode] = useState(false);
    function onChangeCustom(event : ChangeEvent<HTMLInputElement>) {
        setCustomMode(event.target.checked);
    }

    let vidRef = useRef<HTMLVideoElement>();
    useEffect(() => {
        if(vidRef) {
            vidRef.current.volume = 0.2;
        }
    }, [vidRef]) 
    
    return (
        <div className={style.outer}>
            <video autoPlay loop className={style.video} ref={vidRef}>
                <source src={video} type="video/mp4"/>
            </video>
            <div className={style.container}>
                <div className={style.boxForStyle}>
                    <div className={style.box}>
                        <h1>개꿀잼 산성비</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <textarea name="words" ref={register} defaultValue={DEFAULT_WORDS}/>
                            <input type="checkbox" name="customMode" ref={register} onChange={onChangeCustom}/>
                            <div className={style.customSettings} style={{ display: customMode ? "flex" : "none" }}>
                                <input type="text" name="customVar" ref={register} placeholder="커스텀 변수 선언"/>
                                <input type="text" name="customInput" ref={register} placeholder="커스텀 인풋"/>
                                <input type="text" name="customOutput" ref={register} placeholder="커스텀 아웃풋"/>
                                <input type="text" name="customHP" ref={register} placeholder="커스텀 hp(기본 100)"/>
                            </div>
                            <button className={style.start}>시 작</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index;