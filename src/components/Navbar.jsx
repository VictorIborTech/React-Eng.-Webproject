import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './navbar.css'
import Logo from '../assets/images/Logo.png'
import {GoThreeBars} from 'react-icons/go'
import {MdOutlineClose} from 'react-icons/md'
import { links } from '../data'


const Navbar = () => {

    const [isNavShowing, setIsNavShowing] = useState(false);
    const [changeNav, setChangeNav] = useState(false);

    const changeNavbarColor = () => {
        if(window.scrollY > 0){
            setChangeNav(true);
        }
        else{
            setChangeNav(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

  return (
    <nav className={changeNav ? 'window-scrolled' : ''}>
        <div className="container nav_container">
            


            <Link to='/' className="logo"  onClick={() => setIsNavShowing( !isNavShowing )}>
                <img src={Logo} alt="NavLogo" />
            </Link>

            <ul className= {`nav_links  ${isNavShowing ? 'show_nav' : 'hide_nav'}` }>
                {
                    links.map(({name, path}, index) => {
                        return (
                            <li key={index}>
                                <NavLink to={path} className={({isActive}) => isActive ? 'active_nav' : '' }  onClick={() => setIsNavShowing( !isNavShowing )}>{ name }</NavLink>
                            </li>
                        )
                    })
                }
            </ul>

            <button className='nav_toggle_btn' onClick={() => setIsNavShowing( !isNavShowing )}>
                {
                    isNavShowing ? <MdOutlineClose /> : <GoThreeBars /> 
                }
            </button>
        </div>
    </nav>
  )
}

export default Navbar