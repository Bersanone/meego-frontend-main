import './Barra_Ricerca.css';

import Luogo_icon from './risorse/luogo_icon.svg';
import Data_icon from './risorse/data_icon.svg';
import Persone_icon from './risorse/persone_icon.svg';
import Ricerca_icon from './risorse/cerca_icon.svg';





function Barra_ricerca () { 
    return (
        
        <div className="research_bar ">
            <div className="elementi_bar">

                <div className="luogo_bar flex">
                    <img src={Luogo_icon} alt="luogo icona"/>
                    <input type="text" placeholder="Inserisci il luogo" id="Luogo" name="luogo"  />
                </div>

                <div className="data_bar flex">
                    <img src={Data_icon} alt="icona data e ora"/>
                    <input type="date" name="data e ora" id="data_bar" />
                </div>

                <div className="persone_bar flex">
                    <img src={Persone_icon} alt="luogo icona"/>
                    <input type="number" placeholder="Invitati"/>
                </div>
            
                <div className="button_bar flex">
                    <button>
                        <img src={Ricerca_icon} alt=""/>
                        <span>Cerca</span>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Barra_ricerca;