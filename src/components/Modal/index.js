import React from 'react';
import ReactDOM from "react-dom";
import style from './index.module.css';
import clsx from "clsx";
import {ReactComponent as IconClose} from "../../img/iconClose.svg";
import {Transition} from "react-transition-group";



const Index = ({children, isOpen, onClose}) => {
    return ReactDOM.createPortal(
        <>
            <Transition in={isOpen} timeout={350} unmountOnExit={true}>
            {(state) => (
                <div
                    className={clsx(style.modal , `modal--${state}`)}
                    onClick={onClose}
                >
                    <div
                        className={clsx(style.modalContent)}
                        onClick={event => event.stopPropagation()}
                    >
                        <button className={clsx(style.modalCloseButton)}
                        onClick={onClose}>
                            <IconClose/>
                        </button>
                        {children}
                    </div>
                </div>
            )}
            </Transition>
        </>,
        document.getElementById('modal-root')
    );
};

export default Index;