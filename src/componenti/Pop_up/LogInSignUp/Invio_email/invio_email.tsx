import './invio_email.css';
import Logo_svg from './risorse/Logo.svg';
import Email_icon from './risorse/emailNotif_icon.svg';
import close_icon from '../Accesso_nagato/risorse/close.svg';

function Pop_invioEmail ({onClose }: {onClose: () => void}) {



    return(
        <>

            <div className='Pop_bg'>
                <div className='Pop_Container'>
                    <img className='Pop_close_icon' src={close_icon} onClick={onClose} />
                    <img src={Logo_svg} />
                    <img className='Pop_Email_icon' src={Email_icon} />
                    <h1> Ci siamo quasi!</h1>

                    <p>
                    Controlla la tua posta elettronica, ti abbiamo inviato un’email di verifica. 
                    </p>

                    
                    
                    
                </div>
            </div>
        
        </>
    )
}

export default Pop_invioEmail;