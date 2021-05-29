import Navbar from './Navbar/Navbar';
import style from './Sidebar.module.css';

const Sidebar = (props) => {
    return (
        <div className={style.sidebar}>
            <Navbar state={props.state}/>
        </div>
    )
}

export default Sidebar;