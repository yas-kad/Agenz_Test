import React from 'react'
import '../style.css'
import logo from '../images/Vector.png'
import logo1 from '../images/Vector1.png'
import LangueIcon from '../images/Mask_group.png'
import ProfilIcon from '../images/Profil.png'
import Offre_pro1 from '../images/Offre_pro1.png'


function NavBar() {
  return (
    <div className='Nav'>
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
                <li>Acheter</li>
                <li>Louer</li>
                <li>Estimer</li>
                <li>Prix immobiliers</li>
                <li>Credit</li>
                <li>Agences</li>
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
  );
}

export default NavBar;