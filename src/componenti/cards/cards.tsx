import './cards.css';
import Card_img from './risorse/card_image.png';
import Review_full from './risorse/review_full.svg';
import Review_void from './risorse/review_void.svg';

import TypeIcon_meeting from './risorse/meeting_icon.svg';
/*import TypeIcon_event from './risorse/evento_icon.svg';
import TypeIcon_festa from './risorse/Feste_icon.svg';
import TypeIcon_piccoli from './risorse/piccoli_icon.svg';
*/


 function Card () {
    return (


       <div className="card">
        <div className="like_button_card">
            <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.2913 2.61183C19.7805 2.10083 19.1741 1.69547 18.5066 1.41891C17.8392 1.14235 17.1238 1 16.4013 1C15.6788 1 14.9634 1.14235 14.2959 1.41891C13.6285 1.69547 13.022 2.10083 12.5113 2.61183L11.4513 3.67183L10.3913 2.61183C9.3596 1.58013 7.96032 1.00053 6.50129 1.00053C5.04226 1.00053 3.64298 1.58013 2.61129 2.61183C1.5796 3.64352 1 5.04279 1 6.50183C1 7.96086 1.5796 9.36013 2.61129 10.3918L3.67129 11.4518L11.4513 19.2318L19.2313 11.4518L20.2913 10.3918C20.8023 9.88107 21.2076 9.27464 21.4842 8.60718C21.7608 7.93972 21.9031 7.22431 21.9031 6.50183C21.9031 5.77934 21.7608 5.06393 21.4842 4.39647C21.2076 3.72901 20.8023 3.12258 20.2913 2.61183Z" stroke="url(#paint0_linear_406_1168)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <defs>
                <linearGradient id="paint0_linear_406_1168" x1="21.9031" y1="10.1159" x2="1" y2="10.1159" gradientUnits="userSpaceOnUse">
                <stop stop-color="#3FCFFF"/>
                <stop offset="1" stop-color="#00FF2F"/>
                </linearGradient>
                </defs>
            </svg>
                
        </div>

        <div className='type_icon_card'>
            <img src={TypeIcon_meeting}/>
        </div>
        <img src={Card_img} alt=""/>

        <div className="text_card">

            <div className="titolo_card">
                <h4>Meeting Paradise</h4>
                <p>Città, via</p>
            </div>

            
            <div className="recensioni">
                <div className="recensioni_element">
                    <img src={Review_full} alt=""/>
                    <img src={Review_full} alt=""/>
                    <img src={Review_full} alt=""/>
                    <img src={Review_full} alt=""/>
                    <img src={Review_void} alt=""/>  
                
                
                
                </div>
                <span>367 recensioni</span>
            </div>

            <div className="prezzo">
                <div className="text_prezzo">
                    
                </div>
                <span>A partire da </span> <h4>500€</h4>

            </div>
        </div>


    </div> 
    )
    

 }

 export default Card;
