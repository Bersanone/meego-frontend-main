import './categorie.css';

import Evento_icon from './risorse/evento_icon.svg';
import Feste_icon from './risorse/Feste_icon.svg';
import Meeting_icon from './risorse/meeting_icon.svg';
import Piccoli_icon from './risorse/piccoli_icon.svg';


function Categorie() {
    return (
        
        <div className="categorie_container">
            <button className="categorie_button"> <img src={Meeting_icon} alt=""/> <h4>Meeting</h4></button>
            <button className="categorie_button"> <img src={Feste_icon} alt=""/> <h4>Festa privata</h4></button>
            <button className="categorie_button"> <img src={Evento_icon} alt=""/> <h4>Eventi speciali</h4></button>
            <button className="categorie_button"> <img src={Piccoli_icon} alt=""/> <h4>Per i più piccoli</h4></button>
        </div>
    )
}

export default Categorie;