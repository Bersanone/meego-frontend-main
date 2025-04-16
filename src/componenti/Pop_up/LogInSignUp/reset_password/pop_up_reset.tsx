import './pop_up_reset.css';
import { useState } from 'react';
import Logo_svg from './risorse/risorse/Logo.svg';
import close_icon from '../Accesso_nagato/risorse/close.svg';
import Email_icon from './risorse/risorse/email_icon.svg';


function Pop_reset_pass ({onClose }: {onClose: () => void}) {


    const [email, setEmail] = useState<string>('');

    const [success, setSuccess] = useState<boolean>(false);


        //funzione per il recupero della password


        const handlePasswordReset = async () => {

            try{


                //endpoint

                const endpoint = 'http://localhost:3000/api/users/recovery/request-password-recovery';

                //richiesta post

                const response = await fetch(endpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email }),
                })



                //controllo della risposta

                if(response.ok){
                    console.log("Email inviata con successo.");

                    setEmail(''); // Pulisce il campo email dopo l'invio


                    setSuccess(true); // Imposta success a true


                }

    
    
    
    
            }catch(error){
                console.log(error);
            }
        }
    



    return(
        <>

            <div className='Pop_bg'>
                <div className='Pop_Container'>
                    <img className='Pop_close_icon' src={close_icon} onClick={onClose} />
                    <img src={Logo_svg} />
                    
                    <h1> Recupero della password</h1>
                    
{  success ? (                 
                    <p>
                    Ti abbiamo inviato un'email con le istruzioni per il recupero della password, controlla la tua casella di posta elettronica.
                    </p> ) : (
                    <p>
                    Inserisci l'indirizzo email con la quale ti sei registrato, ti invieremo un'email contente le istruzioni per recuperare la password.
                    </p>
                    )

}

   { !success &&            
                    <div className="email_input">

<input type="email" name="email" placeholder="" value={email} onChange={(e) => setEmail(e.target.value) } required pattern="example@mailexample.com" onClick={handlePasswordReset}/>
<label htmlFor='email' className='input_label'>Email</label>
<img src={Email_icon} alt="" />
</div>

   }





{ !success &&

<div>
    <button className='Button1' onClick={handlePasswordReset}>Invia email</button>
</div>
}

                    
                    
                    
                </div>
            </div>
        
        </>
    )
}

export default Pop_reset_pass;