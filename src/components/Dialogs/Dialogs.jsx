import React from 'react';
import Dialog from './DialogItem/DialogItem';
import style from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {
    debugger;

    let dialogsElements = props.dialogsPage.dialogs.map(dialog => <Dialog state={dialog} />)
    let messagesElements = props.dialogsPage.messages.map(message => <Message message={message.message} />);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
            <div className={style.addMessage}>
                <textarea onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText}></textarea>
                <br />
                <button onClick={addMessage}>Отправить</button>
            </div>
        </div>
    );

}

export default Dialogs;