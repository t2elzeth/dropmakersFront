import React, {useState} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleLogoutActionCreator } from '../../store/actions/profile';

import { ThemeSwitcher } from '../';

import UserIcon from '../../assets/icons/user.png';
import ChevronIcon from '../../assets/icons/chevron.png'

const Burger = () => {
  const [burger, setBurger] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const [dropdown2, setDropdown2] = useState(false)

  const dispacth = useDispatch()
  let history = useHistory();

  const handleRedirect = () => {
    history.push('/');
  }

  const handleLogout = () => {
    const token = localStorage.getItem('token')
    document.body.classList.toggle('lock')
    dispacth(handleLogoutActionCreator(token, handleRedirect))
  }

  const handleBurger = () => {
    setBurger(!burger)
    document.body.classList.toggle('lock')
  }


  return (
    <div className='burger'>
      <div className={`burger-icon ${burger ? 'burger-icon--active' : null}`} onClick={handleBurger}>
        <span className='span span--1'></span>
        <span className='span span--2'></span>
        <span className='span span--3'></span>
      </div>
      <div className={`burger-content ${burger ? 'burger-content--active' : null}`} onClick={handleBurger}>
        <nav className='burger-nav private-burger-nav' onClick={e => e.stopPropagation()}>
          <div className='burger-nav-header'>
            <NavLink to='/dashboard' className='link-wrapper' onClick={handleBurger} exact><img src={UserIcon} alt='user' className='link user-icon'/></NavLink>
          </div>
          <ul>
            <li className='private-item'>
              <div className='link-wrapper'><NavLink to='/dashboard' className='link' onClick={handleBurger} onClick={handleBurger} exact>Dashboard</NavLink></div>
            </li>
            <li className='private-item'>
              <div className='link-wrapper'><NavLink to='/search' className='link' onClick={handleBurger} exact>Search</NavLink></div>
            </li>
            <li className='private-item private-item--inventory'>
              <div className='link-wrapper'>
                <NavLink to='/myinventory' className='link' onClick={handleBurger} exact>My Inventory</NavLink>
                <div onClick={() => setDropdown(!dropdown)} className='chevron-wrapper'>
                  <img src={ChevronIcon} alt='chevron' className='chevron'/>
                </div>
              </div>
              <div className={`private-dropdown ${dropdown && 'private-dropdown--active'}`}>
                <div className='private-dropdown-item private-dropdown-item--1'> 
                  <NavLink to='/myinventory/settings' className='private-dropdown-item' onClick={handleBurger} exact>Settings Groups</NavLink>
                </div>
                <div className='private-dropdown-item'> 
                  <NavLink to='/myinventory/changes' className='private-dropdown-item' onClick={handleBurger} exact>Inventory Changes</NavLink>
                </div>
                {/* <div className='private-dropdown-item item item--export'> 
                  <a className='private-dropdown-item'>
                    <div>Inventiry Import</div>
                    <img src={ChevronIcon} alt='chevron' className='chevron' onClick={() => setDropdown(!dropdown)}/>
                  </a>
                  <div className={`private-dropdown ${dropdown && 'private-dropdown--active'}`}>
                    <div className='private-dropdown-item private-dropdown-item--1'> 
                      <NavLink to='/myinventory/export/eBay' className='private-dropdown-item' onClick={handleBurger} exact>From eBay</NavLink>
                    </div>
                    <div className='private-dropdown-item private-dropdown-item--1'> 
                      <NavLink to='/myinventory/export/amazon' className='private-dropdown-item' onClick={handleBurger} exact>From Amazon</NavLink>
                    </div>
                    <div className='private-dropdown-item private-dropdown-item--1'> 
                      <NavLink to='/myinventory/export/orders' className='private-dropdown-item' onClick={handleBurger} exact>From Orders</NavLink>
                    </div>
                  </div>
                </div> */}
                <div className='private-dropdown-item'> 
                  <NavLink to='/myinventory/brands' className='private-dropdown-item' onClick={handleBurger} exact>Brands</NavLink>
                </div>
                <div className='private-dropdown-item'> 
                  <NavLink to='/myinventory/blacklists' className='private-dropdown-item' onClick={handleBurger} exact>Black Lists</NavLink>
                </div>
                <div className='private-dropdown-item'> 
                  <NavLink to='/myinventory/whitelists' className='private-dropdown-item' onClick={handleBurger} exact>White Lists</NavLink>
                </div>
              </div>
            </li>
            <li className='private-item private-item--inventory'>
              <div className='link-wrapper'>
                <NavLink to='/myorders' className='link' onClick={handleBurger} exact>My Orders</NavLink>
                <div onClick={() => setDropdown2(!dropdown2)} className='chevron-wrapper'>
                  <img src={ChevronIcon} alt='chevron' className='chevron'/>
                </div>
              </div>
              <div className={`private-dropdown ${dropdown2 && 'private-dropdown--active'}`}>
                <div className='private-dropdown-item private-dropdown-item--1'> 
                  <NavLink to='/myorders/returns' className='private-dropdown-item' onClick={handleBurger} exact>Orders returns</NavLink>
                </div>
              </div>
            </li>
            <li className='private-item'>
              <div className='link-wrapper'><NavLink to='/notifications' className='link' onClick={handleBurger} exact>Notifications</NavLink></div>
            </li>
            <li className='private-item'>
              <div className='link-wrapper'><NavLink to='/mail' className='link' onClick={handleBurger} exact>Mail</NavLink></div>
            </li>
            <li className='private-item'>
              <div className='link-wrapper'><NavLink to='/settings' className='link' onClick={handleBurger} exact>Account Settings</NavLink></div>
            </li>
            <li className='private-item'>
              <div className='link-wrapper'><NavLink to='/payments' className='link' onClick={handleBurger} exact>My Payment</NavLink></div>
            </li>
            <li className='private-item'>
              <div className='link-wrapper'><NavLink to='/access-control' className='link' onClick={handleBurger} exact>Access Control</NavLink></div>
            </li>
            <li className='private-item'>
              <div className='link'><button onClick={handleLogout} className='link-btn'>Logout</button></div>
            </li>
          </ul>
          <ThemeSwitcher />
        </nav>
      </div>
    </div>
  )
}

export default Burger
