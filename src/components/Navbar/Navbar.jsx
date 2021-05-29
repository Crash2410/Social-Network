import React from 'react';
import { NavLink } from 'react-router-dom';
import Friend from '../Friends/Friend/Friend';
import s from './Navbar.module.css';



const Navbar = (props) => {

    let friendElements = props.state.friends.map(friend =>
        <div className={`${s.itemFriend}`}>
            <NavLink to="/friend" >
                <img src={friend.img} alt="" />
                <br />
                {friend.name}
            </NavLink>
        </div>
    )

    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
        </div>

        <div className={`${s.item} ${s.active}`}>
            <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>

        </div>
        <div className={s.item}>
            <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
        </div>

        <div className={s.item}>
            <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/friends" activeClassName={s.activeLink}>Friends</NavLink>
        </div>
        <div className={s.itemsFriends}>
            {friendElements}
        </div>

    </nav>
}
export default Navbar;