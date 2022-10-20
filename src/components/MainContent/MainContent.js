import React from 'react'
import Card from '../cards/Card';
import img1 from '../../images/card1.png'
import './MainContent.css'

function MainContent() {
  return (
    <div>
        <div className='cards'>
            <Card CardImg={img1} Price='1,110,122' Content='Maison à vendre | 3 chambres | 230 m²'
                ville='Marrakech, Ennakhil (Palmeraie)' annonce='Annonce par : Marrakech conseils Invest  ' />
            <Card CardImg={img1} Price='1,110,122' Content='Maison à vendre | 3 chambres | 230 m²'
                ville='Marrakech, Ennakhil (Palmeraie)' annonce='Annonce par : Marrakech conseils Invest  ' />
            <Card CardImg={img1} Price='1,110,122' Content='Maison à vendre | 3 chambres | 230 m²'
                ville='Marrakech, Ennakhil (Palmeraie)' annonce='Annonce par : Marrakech conseils Invest  ' />
            <Card CardImg={img1} Price='1,110,122' Content='Maison à vendre | 3 chambres | 230 m²'
                ville='Marrakech, Ennakhil (Palmeraie)' annonce='Annonce par : Marrakech conseils Invest  ' />
        </div>
    </div>
  )
}


export default MainContent;