import { NavLink } from 'react-router-dom';
import style from './DialogItem.module.css';

const dialogItem = (props) => {
    return (
        <div className={`${style.dialog} ${style.active}`}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

export default dialogItem;