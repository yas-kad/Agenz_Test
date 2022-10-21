import React, {useEffect, useRef, useState} from 'react'
import Card from '../cards/Card';
import img1 from '../../images/card1.png'
import './MainContent.css'
import Map from './../map/Map'

import IconM from '../../images/iconM.png'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function MainContent() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const ref = useRef(null);

    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(ref.current.offsetWidth);
    
        
      }, []);

  return (
    <div className='main-container'>
            <div className='cards'>
                <div className='annonceTitle'>
                    <div style={{padding: '8px 0px'}}>
                        <h1 style={{fontStyle: 'normal', fontWeight: '500', fontSize: '20px', lineHeight: '30px',}}>Immobilier et maisons à vendre partout au Maroc</h1>

                    </div>
                    <div className='An_filters'>
                        <div style={{borderRadius: '999px', padding: '6px 37px', backgroundColor: '#00B4FF', color: 'white' }}>
                            <span style={{
                                fontWeight: '700',
                                fontSize: '14px',
                                lineHeight: '21px',
                            }}>500</span>
                            <span style={{
                                fontWeight: '500',
                                fontSize: '14px',
                                lineHeight: '21px',
                            }}> Agent listings</span>
                        </div>

                        <div className='drop_date' ref={ref}>
                            <li style={{color: '#460AF0'}} onClick={handleClick}> Date - Du plus récent au plus ancien <img style={{padding: '0px 0px 0px 8px'}} src={IconM}/></li>
                            <Menu
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                PaperProps={{  
                                    style: {  
                                      width: width,  
                                    },  
                                 }}
                            >
                                <MenuItem onClick={handleClose}>Agenz</MenuItem>
                                <MenuItem onClick={handleClose}>Agenz</MenuItem>
                                <MenuItem onClick={handleClose}>Agenz</MenuItem>
                            </Menu>
                        </div>

                    </div>
                </div>
                <Card CardImg={img1} Price='1,110,122' Content='Maison à vendre | 3 chambres | 230 m²'
                    ville='Marrakech, Ennakhil (Palmeraie)' annonce='Annonce par : Marrakech conseils Invest  ' />
                <Card CardImg={img1} Price='1,110,122' Content='Maison à vendre | 3 chambres | 230 m²'
                    ville='Marrakech, Ennakhil (Palmeraie)' annonce='Annonce par : Marrakech conseils Invest  ' />
                <Card CardImg={img1} Price='1,110,122' Content='Maison à vendre | 3 chambres | 230 m²'
                    ville='Marrakech, Ennakhil (Palmeraie)' annonce='Annonce par : Marrakech conseils Invest  ' />
                <Card CardImg={img1} Price='1,110,122' Content='Maison à vendre | 3 chambres | 230 m²'
                    ville='Marrakech, Ennakhil (Palmeraie)' annonce='Annonce par : Marrakech conseils Invest  ' />
                 <Card CardImg={img1} Price='1,110,122' Content='Maison à vendre | 3 chambres | 230 m²'
                    ville='Marrakech, Ennakhil (Palmeraie)' annonce='Annonce par : Marrakech conseils Invest  ' />
                <Card CardImg={img1} Price='1,110,122' Content='Maison à vendre | 3 chambres | 230 m²'
                    ville='Marrakech, Ennakhil (Palmeraie)' annonce='Annonce par : Marrakech conseils Invest  ' />
                <Card CardImg={img1} Price='1,110,122' Content='Maison à vendre | 3 chambres | 230 m²'
                    ville='Marrakech, Ennakhil (Palmeraie)' annonce='Annonce par : Marrakech conseils Invest  ' />
                <Card CardImg={img1} Price='1,110,122' Content='Maison à vendre | 3 chambres | 230 m²'
                    ville='Marrakech, Ennakhil (Palmeraie)' annonce='Annonce par : Marrakech conseils Invest  ' />
                     <Card CardImg={img1} Price='1,110,122' Content='Maison à vendre | 3 chambres | 230 m²'
                    ville='Marrakech, Ennakhil (Palmeraie)' annonce='Annonce par : Marrakech conseils Invest  ' />
                <Card CardImg={img1} Price='1,110,122' Content='Maison à vendre | 3 chambres | 230 m²'
                    ville='Marrakech, Ennakhil (Palmeraie)' annonce='Annonce par : Marrakech conseils Invest  ' />
                <Card CardImg={img1} Price='1,110,122' Content='Maison à vendre | 3 chambres | 230 m²'
                    ville='Marrakech, Ennakhil (Palmeraie)' annonce='Annonce par : Marrakech conseils Invest  ' />
                <Card CardImg={img1} Price='1,110,122' Content='Maison à vendre | 3 chambres | 230 m²'
                    ville='Marrakech, Ennakhil (Palmeraie)' annonce='Annonce par : Marrakech conseils Invest  ' />
            </div>

        
        <div className="map-container">
            <Map />
        </div>

    </div>
  )
}


export default MainContent;