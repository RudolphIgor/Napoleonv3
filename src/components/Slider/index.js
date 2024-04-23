import React, {useState} from 'react';
import style from './index.module.css'
import {ReactComponent as IconClose} from "../../img/iconClose.svg";
import Modal from "../Modal";

const Index = (props) => {
    const styleblock = {
        background: `url(${props.slideArray.img}) center no-repeat`,
        height: "clamp(141px, 41.5vw, 498px)",
    }
    const [isOpen, setIsOpen] = useState(false);
    console.log(`isOpen: ${isOpen}`);

    return (
        <>
            <div style={styleblock}>
                <div className={style.content}>
                    <p className={style.title}>
                        {props.slideArray.text}
                    </p>
                    <button className={style.button} onClick={() => setIsOpen(true)}>
                        {props.slideArray.text_btn}
                    </button>
                </div>
            </div>

            {/*----------Конец основного блока, дальше идет модальное окно------------*/}
            <Modal
                isOpen={isOpen} //передача состояния окна
                onClose={() => setIsOpen(false)} //"обратная" функция вызываемая по onClose из компонента, но срабатывающая здесь
            >
                <p>Some Text</p>
            </Modal>
        </>
    );
};

export default Index;