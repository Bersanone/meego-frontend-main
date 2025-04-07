import './service.css';

import meeting_img from './risorse/meeting.webp';
import festa_img from './risorse/festa_privata.webp';
import evento_img from './risorse/eventi speciali.webp';
import piccoli_img from './risorse/bambini.webp';




function Service_content () {
    return(
        <div className="content_servizio">

            
                <div className="card_servizio">
                    
                        <img src={meeting_img} alt=""/>
                        <div className="text_card">
                            <h4>Meeting</h4>
                            <p>1500 posti disponibili</p>
                        </div>
                  
                </div>
            

                <div className="card_servizio">
                    
                        <img src={festa_img} alt=""/>
                        <div className="text_card">
                            <h4>Feste private</h4>
                            <p>1500 posti disponibili</p>
                        </div>
                    
                </div>

                <div className="card_servizio">
                    
                        <img src={evento_img} alt=""/>
                        <div className="text_card">
                            <h4>Eventi speciali</h4>
                            <p>1500 posti disponibili</p>
                        </div>
                    
                </div>
            
                <div className="card_servizio">
                  
                        <img src={piccoli_img} alt=""/>
                        <div className="text_card">
                            <h4>Per i più piccoli</h4>
                            <p>1500 posti disponibili</p>
                        </div>
                   
                </div>
                    
        </div>
    );
}

export default Service_content ;
        