import { Link, useLocation } from "react-router-dom"

import style from './NavBar.module.css'
import SearchBar from "../SearchBar/SearchBar"
import logo from './pokelogo.png'
const NavBar = () => {
  const location = useLocation();
  const isCreatePage = location.pathname === '/create';
  return (
    <div className={style.main}>
        <img src={logo} alt="" className={style.logo} />
        <Link to="/home">Home</Link>
        {!isCreatePage && <SearchBar />}
        {!isCreatePage && <Link to="/create">Add your Pokemon</Link>}

    </div>
  )
}

export default NavBar