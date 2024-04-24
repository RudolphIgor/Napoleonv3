import React, {useState} from 'react';
import style from './index.module.css'
import {ReactComponent as IconClose} from "../../img/iconClose.svg";
import Modal from "../Modal";
import clsx from "clsx";

const Index = (props) => {
    const styleblock = {
        background: `url(${props.slideArray.img}) center no-repeat`,
        height: "clamp(141px, 41.5vw, 498px)",
    }
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    isOpen ? document.querySelector('body').classList.add('lock') : document.querySelector('body').classList.remove('lock');
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
                <div className={clsx(style.form)}>
                    <h3 className={clsx(style.formTitle)}>
                        Заказать звонок
                    </h3>
                    <form>
                        <div className={clsx(style.formBlock)}>
                            <div className={clsx(style.inputBlock)}>
                                <label className={clsx(style.labels)} htmlFor="name">Имя</label>
                                <input className={clsx(style.inputs)}
                                       type="text"
                                       value={name} onChange={(e) => setName(e.target.value)}
                                       autoFocus={true}
                                />
                            </div>
                            <div className={clsx(style.inputBlock)}>
                                <label className={clsx(style.labels)} htmlFor="phone">Телефон</label>
                                <input className={clsx(style.inputs)} type="tel" value={phoneNumber}
                                       onChange={(e) => setPhoneNumber(e.target.value)}/>
                            </div>
                        </div>
                        <div>
                            <button className={clsx(style.formButton)} type="submit">Отправить</button>
                        </div>
                        <div className={clsx(style.formSendResult)}>Ваш запрос успешно отправлен</div>
                    </form>

                </div>
            </Modal>
        </>
    );
};

export default Index;