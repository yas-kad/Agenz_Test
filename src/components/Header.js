import React from 'react'
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
        <Button isActive={true}  title='À vendre' />
        <Button isActive={false} title='Prix' />
        <Button isActive={false} title='Type' />
        <Button isActive={false} title='Surface' />
        <Button isActive={false} title='Chambres' />
        <Button isActive={false} title='Valider' isFilled={true} />
    </div>
  )
}


export default Header;