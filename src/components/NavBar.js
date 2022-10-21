import React, {useState} from 'react'
import '../style.css'
import logo from '../images/Vector.png'
import logo1 from '../images/Vector1.png'
import LangueIcon from '../images/Mask_group.png'
import ProfilIcon from '../images/Profil.png'
import Offre_pro1 from '../images/Offre_pro1.png'

import {FaBars} from 'react-icons/fa'
import MenuIcon from '../images/dropdown.png'

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


function NavBar() {

    const [anchorEl, setAnchorEl] = useState(null);
    const [mobile, setMobile] =  useState(false);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMobile = () => {
        setMobile(!mobile);
    }

  return (
    <div className='Nav'>
       
        <div className="Nav-big">
            <div className='logo_div'>
                <div className='logo_img'>
                    <img src={logo} alt='#' />
                </div>
                <div className='logo_title'>
                    <img src={logo1} alt='#' />
                </div>
            </div>
            <div className='nav_items'>
                <ul>
                    <li onClick={handleClick}>Acheter <img src={MenuIcon}/></li>
                    <li>Louer</li>
                    <li onClick={handleClick}>Estimer <img src={MenuIcon}/></li>
                    <li>Prix immobiliers</li>
                    <li onClick={handleClick}>Credit <img src={MenuIcon}/></li>
                    <li>Agences</li>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Agenz</MenuItem>
                        <MenuItem onClick={handleClose}>Agenz</MenuItem>
                        <MenuItem onClick={handleClose}>Agenz</MenuItem>
                    </Menu>
                </ul>
            </div>
            <div className='nav_pro'>
                <ul>
                    <li>
                        <div><img src={LangueIcon} alt='#' style={{width:'24px', height: '24px'}} /></div>
                        <div><a>Arabe</a></div>
                    </li>
                    <li>
                        <div><img src={ProfilIcon} alt='#' style={{width:'24px', height: '24px'}} /></div>
                        <div><a>Connexion</a></div>
                    </li>
                    <li>
                        <div> <a>Offres pro</a></div>
                        <div><img src={Offre_pro1} alt='#' style={{width:'24px', height: '24px'}} /></div>
                    </li>
                </ul>
            </div>
        </div>
        {
         mobile ?
        <div className="Nav-mobile">
            <div className='nav_itemsM'>
                <ul>
                    <li onClick={handleClick}>Acheter <img src={MenuIcon}/></li>
                    <li>Louer</li>
                    <li onClick={handleClick}>Estimer <img src={MenuIcon}/></li>
                    <li>Prix immobiliers</li>
                    <li onClick={handleClick}>Credit <img src={MenuIcon}/></li>
                    <li>Agences</li>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        
                    >
                        <MenuItem onClick={handleClose}>Agenz</MenuItem>
                        <MenuItem onClick={handleClose}>Agenz</MenuItem>
                        <MenuItem onClick={handleClose}>Agenz</MenuItem>
                    </Menu>
                </ul>
            </div>
            <div className='nav_proM'>
                <ul>
                    <li>
                        <div><img src={LangueIcon} alt='#' style={{width:'24px', height: '24px'}} /></div>
                        <div><a>Arabe</a></div>
                    </li>
                    <li>
                        <div><img src={ProfilIcon} alt='#' style={{width:'24px', height: '24px'}} /></div>
                        <div><a>Connexion</a></div>
                    </li>
                    <li>
                        <div> <a>Offres pro</a></div>
                        <div><img src={Offre_pro1} alt='#' style={{width:'24px', height: '24px'}} /></div>
                    </li>
                </ul>
            </div>
        </div>
        : null }
        <button className='bar' onClick={handleMobile}><FaBars /></button>
    </div>
  );
}

export default NavBar;