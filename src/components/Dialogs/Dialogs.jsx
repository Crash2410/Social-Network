import React from 'react';
import { NavLink } from 'react-router-dom';
import Dialog from './DialogItem/DialogItem';
import style from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andre' },
        { id: 3, name: 'Sasha' },
        { id: 4, name: 'Artem' }
    ]

    let messages = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hello' },
        { id: 3, message: 'How are you?' },
        { id: 4, message: 'Bye)' }
    ]

    let dialogsElements = dialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id} />)

    let messagesElements = messages.map(message => <Message message={message.message} />);

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
        </div>
    );

}

export default Dialogs;