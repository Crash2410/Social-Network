import { NavLink } from 'react-router-dom';
import style from './DialogItem.module.css';

const dialogItem = (props) => {

    return (
        <div className={`${style.dialog} ${style.active}`}>
            <img src={props.state.img} alt="" />
            <NavLink to={`/dialogs/${props.state.id}`}>{props.state.name}</NavLink>
        </div>
    )
}

export default dialogItem;