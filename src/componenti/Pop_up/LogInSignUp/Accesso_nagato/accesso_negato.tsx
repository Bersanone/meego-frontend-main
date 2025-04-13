import './accesso_negato.css';
import Logo_svg from './risorse/Logo.svg';
import Error_icon from './risorse/error_icon.svg';
import close_icon from './risorse/close.svg';

function Pop_accessoNeg ({onClose }: {onClose: () => void}) {

       //funzione per chiudere il popup




    return(
        <>

            <div className='Pop_bg'>
                <div className='Pop_Container'>
                    <img className='Pop_close_icon' src={close_icon} onClick={onClose}/>
                    <img src={Logo_svg} />
                    <img className='Pop_Email_icon' src={Error_icon} />
                    <h1> Oops!</h1>

                    <p>
                    Qualcosa è andato storto, potresti aver inserito dei dati sbagliati. Prova a correggerli.
                    </p>

                    <a href="##"> Password dimenticata? </a>
                   
                    
                </div>
            </div>
        
        </>
    )
}

export default Pop_accessoNeg ;