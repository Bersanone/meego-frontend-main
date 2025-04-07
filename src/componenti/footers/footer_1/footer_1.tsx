import './footer_1.css';
import Logo_footer from './Logo_footer.svg';


function Footer_1 () {
    return (
        <>
        <div className="footer">

            <div className="top_footer">

                <div className="logo_footer">
                    <img src={Logo_footer} alt=""/>
                </div>
                
                <div className="text_footer">
                    <div className="col">
                        <h3>Esplora</h3>
                        <a href="http://"><p>Meeting</p></a>
                        <a href="http://"><p> Feste private </p></a>
                        <a href="http://"><p>Eventi speciali</p></a>
                        <a href="http://"><p>Per i più piccoli</p></a> 
                    </div>

                    <div className="col">
                        <h3>Termini e impostazioni</h3>
                        <a href="http://"> <p>Gestisci le impostazioni sui cookie</p></a>
                        <a href="http://"><p> Privacy e cookie </p></a>
                        <a href="http://"><p>Termini e condizioni</p></a>
                        <a href="http://"><p>Risoluzione controversie</p></a>
                    </div>

                    <div className="col">
                        <h3>Esplora</h3>
                        <a href="http://"> <p>Chi è MeeGo.com</p></a>
                        <a href="http://"> <p> Come lavoriamo </p></a>
                        <a href="http://">  <p> Opportunità di lavoro</p></a>
                        <a href="http://"><p> Contatti dell'azienda</p></a>

                    </div>
                </div>

            </div>
            
            <div className="down_footer">
                <p>Booking.com è parte di Booking Holdings Inc., leader mondiale nel settore dei viaggi online e relativi servizi.
                    Copyright © 1996–2024 Booking.com™. Tutti i diritti riservati.
                </p>
            </div>
            
<div className="footer_bg">

            <div className="footer_up_circle">
                
                <div className="green_footer"></div>
            </div>
        

            <div className="footer_down_circle">
                <div className="blu_footer"></div>
                <div className="blu_footer"></div>
                    
            </div>
    
        </div>
        </div>

        
        </>
    )
}

export default Footer_1;