import './info_section.css';
import info_svg from './risorse/svg image.svg';
import info_svg2 from './risorse/svg_image_2.svg';

function Info_section () {
    return(
        <div className='info_content'>

            <div className='text_info'>
                <h2>Organizza eventi in tutta leggerezza</h2>
                <div className='p_background'>
                    
                    <p>Offriamo una piattaforma in grado rendere ogni evento 
                        un’esperienza indimenticabile. Che tu stia pianificando una 
                        riunione professionale o una festa privata, la nostra piattaforma 
                        è pronta a semplificarti la vita e a trasformare le tue idee in realtà.
                    </p>
                    <div className='button_info'>
                    <button> Scopri di più</button>
                </div>
                </div>
                
                
            </div>

            <div className='svg_info'>
                <img src={info_svg}></img>
            </div>
            

            
        </div>
    )
}



function Info_section2 () {

    return(
        <div className='info_content2'>

            <div className='svg_info2'>
                <img src={info_svg2}></img>
            </div>

            <div className='text_info2'>
                <h2>Fai crescere la tua attività</h2>
                <div className='p_background2'>
                    
                    <p>MeeGo è il luogo perfetto per far conoscere la tua 
                        offerta a un vasto pubblico. Grazie alla nostra 
                        piattaforma, potrai raggiungere clienti interessati, 
                        semplificare la gestione delle prenotazioni e aumentare 
                        la tua visibilità.
                    </p>
                    <div className='button_info2'>
                    <button> Scopri di più</button>
                </div>
                </div>
                
                
            </div>

            
            
            

            
        </div>
    )

}

export {
    Info_section,
    Info_section2
} ;