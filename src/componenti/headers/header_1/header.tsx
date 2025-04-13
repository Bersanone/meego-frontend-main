import logo from './risorse/Logo.svg';
import User_icon from './risorse/User_icon.svg';
import GesAcc_icon from './risorse/GestAcc_icon.svg';
import GesStr_icon from './risorse/GestStr_icon.svg';
import Preferiti_icon from './risorse/Preferiti_icon.svg';
import Prenotazioni_icon from './risorse/Prenotazioni_icon.svg';
import Esci_icon from './risorse/Esci_icon.svg';

import { Link } from 'react-router-dom';

import './header.css';




//importazione del modello user

import { useUser } from '../../../Hooks/userProfile.tsx';
import { useState } from 'react';






//funzione di logout

const handleLogout = async () => {
    try{

        const response = await fetch('http://localhost:3000/api/users/auth/logout', {
            method: 'DELETE',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if(response.ok) {
            console.log("Logout effettuato con successo.");
            window.location.href = '/'; // Reindirizza alla home page dopo il logout
        }else{
            console.error("Errore durante il logout.");
        }

    }catch(error) {
        console.error("Errore durante il logout:", error);
    }
}













function Header () {



    const { user,userProfile } = useUser();

    const [isVisible, setVisible] = useState(false);


    const toggleMenu = () => {
        setVisible(!isVisible);
    };

    return (
        <>

        <header className='header'>

            <div className='header_logo'>
            <Link to='/'><img className='logo_svg' src={logo}/></Link>
            </div>

            <div className='header_link'>
                <Link to="/Assistenza">Assistenza</Link>
                <a href="/informazioni">Informazioni</a>
                <Link to='/infoPublStr'>Registra la tua struttura</Link>
            </div>

     {  !user &&     

            <div className='header_button'>           
                <Link to='/LoginSignup'>
                <button className='button_log'>Accedi</button>
                </Link>

                

                <Link to='/LoginSignup'>
                <button className='button_sign'>Registrati</button>
                </Link>
            </div>

     }


            {user && (
                    <div className="welcome_message">
                        <h4>Ciao {userProfile?.data.name}! 👋</h4>
                        <div className='user_img'> 
{    userProfile?.data.photo_profile ? (
     <img src={userProfile?.data.photo_profile} onClick={toggleMenu} />
):(
    <img src={User_icon} alt="Icona utente predefinita" />
)
}


                        </div>
                    </div>
                )}

            <div className='menu_mobile'>
                <svg width="26" height="22" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 12C0.447716 12 0 11.5523 0 11V11C0 10.4477 0.447715 10 1 10H17C17.5523 10 18 10.4477 18 11V11C18 11.5523 17.5523 12 17 12H1ZM1 7C0.447716 7 0 6.55228 0 6V6C0 5.44772 0.447715 5 1 5H17C17.5523 5 18 5.44772 18 6V6C18 6.55228 17.5523 7 17 7H1ZM1 2C0.447716 2 0 1.55228 0 1V1C0 0.447715 0.447715 0 1 0H17C17.5523 0 18 0.447715 18 1V1C18 1.55228 17.5523 2 17 2H1Z" fill="white"/>
            </svg>
            </div>
    
        </header>

        <div className='header_menuLat'  style={{ display: isVisible ? 'flex' : 'none' }}>
            <div className='menuLat_button'>
                
            <img src={GesAcc_icon} alt="" />

                <p>Gestisci l'account</p>
            </div>

            <div className='menuLat_button'>
                
            <img src={GesStr_icon} alt="" />

                <p>Gestisci le tue strutture</p>
            </div>

            <div className='menuLat_button'>
                
                <img src={Prenotazioni_icon} alt="" />

                <p>Le tue prenotazioni</p>
            </div>

            <div className='menuLat_button'>
                
                <img src={Preferiti_icon} alt="" />

                <p>I tuoi preferiti</p>
            </div>

{ user  &&     <div className='menuLat_button_exit'>
                
                <img src={Esci_icon} alt="" />

                <p onClick={handleLogout}>Esci dall'account</p>
            </div>}

        </div>

    

    </>
    )

}


export default Header;

