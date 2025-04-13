import './Pop_Ok_Registr.css';
import Logo_svg from './risorse/Logo.svg';
import close_icon from '../Accesso_nagato/risorse/close.svg';

function Pop_Ok_Registr ({onClose }: {onClose: () => void}) {



    return(
        <>

            <div className='Pop_bg'>
                <div className='Pop_Container'>
                    <img className='Pop_close_icon' src={close_icon} onClick={onClose} />
                    <img src={Logo_svg} />
                    <h1> Registrazione completata con successo!</h1>

                    <p>
                        Al tuo account mancano dei dati, puoi scegliere se completarlo ora o in seguito. 
                    </p>

                    

                    <div className='Pop_button'>
                        <button className='Button1'>Completa l'account</button>
                        <button className='Button2'>Ricorda in seguito</button>

                    </div>
                </div>
            </div>
        
        </>
    )
}

export default Pop_Ok_Registr;