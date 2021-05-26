import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Dialogs.module.css';

const Dialog = (props) => {
    return (
        <div className={`${style.dialog} ${style.active}`}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={style.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <Dialog name="Dimych" id="1" />
                <Dialog name="Andre" id="2" />
                <Dialog name="Sasha" id="3" />
                <Dialog name="Artem" id="4" />
            </div>
            <div className={style.messages}>
                <Message message="Hi" />
                <Message message="Hello" />
                <Message message="How are you?" />
                <Message message="Bye)" />
            </div>
        </div>
    );

}

export default Dialogs;