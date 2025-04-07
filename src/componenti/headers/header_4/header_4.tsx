

import './header_4.css';

import logo from './Logo.svg';

import { Link } from 'react-router-dom';


function Header4(){
    return(


        <header className='header4'>

            <div className='header4_logo'>
                <Link to="/"><img className='logo4_svg' src={logo}/></Link>
            </div>

            <div className='header4_link'>
                <a href="##">Assistenza</a>
                <a href="##">Informazioni</a>
            </div>


            <div className='menu4_mobile'>
                <svg width="26" height="22" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 12C0.447716 12 0 11.5523 0 11V11C0 10.4477 0.447715 10 1 10H17C17.5523 10 18 10.4477 18 11V11C18 11.5523 17.5523 12 17 12H1ZM1 7C0.447716 7 0 6.55228 0 6V6C0 5.44772 0.447715 5 1 5H17C17.5523 5 18 5.44772 18 6V6C18 6.55228 17.5523 7 17 7H1ZM1 2C0.447716 2 0 1.55228 0 1V1C0 0.447715 0.447715 0 1 0H17C17.5523 0 18 0.447715 18 1V1C18 1.55228 17.5523 2 17 2H1Z" fill="white"/>
                </svg>
            </div>
    
        </header>





    )
};



export default Header4;