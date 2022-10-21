import React, { useState } from 'react'
import SearchIcon from '../images/search.png'
import Button from './Button';


function Header() {
  return (
    <div className='header_searchBar'>
        <div className='search_bar'>
            <form className='form'>
                <div className='search_input'>
                    <input type='text' name='Search' id='search' placeholder='Entrez une ville, un quartier , une adresse' />
                </div>
                <div className='searchIcon'>
                    <button> <img src={SearchIcon} alt='search' /> </button>
                </div>
            </form>
        </div>
        <Button />
    </div>
  )
}


export default Header;