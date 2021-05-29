import React from 'react';
import Dialog from './DialogItem/DialogItem';
import style from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(dialog => <Dialog state={dialog} />)
    let messagesElements = props.state.messages.map(message => <Message message={message.message} />);

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