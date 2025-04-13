import './log_component.css';
import Username_icon from '../Risorse/username_icon.svg';
import Email_icon from '../risorse/email_icon.svg';
import Password_icon from '../risorse/password_icon.svg';
import Password_view_icon from '../risorse/password_view_icon.svg';

import SignUp_svg from '../risorse/sign_up_svg.svg';
import LogIn_svg from '../risorse/sign_in_svg.svg';

import Google_icon from '../risorse/google_icon.svg';
import Facebook_icon from '../risorse/facebook_icon.svg';


import { useState } from 'react';






//utils

import { facebookLoginHandler } from '../../../utils/facebookLogin';




//importrazione dei popup

import Pop_Ok_Registr from '../../../componenti/Pop_up/LogInSignUp/Registrazione_compl/Pop_Ok_Registr';

import Pop_accessoNeg from '../../../componenti/Pop_up/LogInSignUp/Accesso_nagato/accesso_negato';

import Pop_invioEmail from '../../../componenti/Pop_up/LogInSignUp/Invio_email/invio_email';



//interfaccia per i dati di autenticazione

interface AuthData {
    username?: string;
    email: string;
    password_hash: string;
}


function Log_component () {

    const [isSignup, setIsSignup] = useState(false);

    const [visiblePassword, setVisiblePassword] = useState(false);

    const [popStatus, setPopStatus] = useState<string | null>(null);




    //dati dei campi di input


    const [username,  setUsername] = useState('');
    const [email,  setEmail] = useState('');
    const [password_hash,  setPassword] = useState('');






    //funzione per la gestione del popup


    const handlePopStatus = () => {



        if(popStatus === 'ok_registr'){
            return <Pop_Ok_Registr onClose={() => setPopStatus(null)}/>;
        }else if(popStatus === 'accesso_negato'){
            return <Pop_accessoNeg onClose={() => setPopStatus(null)}/>;
        }else if(popStatus === 'invio_email'){
            return <Pop_invioEmail onClose={() => setPopStatus(null)}/>;
        }

        return null;
    }








    //funzione per l'invio  dei dati


    const handleSubmit = async () => {
           


        const authData: AuthData = {
            email : email,
            password_hash: password_hash,
            ...((!isSignup) && {username: username})
        };

       try{

        //endpoint

        const endpoint = isSignup ? 'http://localhost:3000/api/users/auth/login' : 'http://localhost:3000/api/users/auth/register';


        //richiesta post

        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(authData),
            credentials: 'include', // Include i cookie nella richiesta
        });


        //risposta

        const data = await response.json();

        if(response.ok){
            console.log(data);

            //pulizia dei campi di input

            setUsername('');
            setEmail('');
            setPassword('');
            

            setPopStatus('invio_email');




        }else{
            console.log('errore',data);
            

            setPopStatus('accesso_negato');



    
        }



       }catch(error){
             console.log(error);
       }





    }


    const switchMode = () => {
        setIsSignup(!isSignup);
    }









    //funzione per il login con google

    const handleGoogleLogin = async() => {

        try{


            //endpoint


          window.location.href = 'http://localhost:3000/api/users/auth/google/login';


        }catch(error){
            console.log(error);
        }

    }




    //funzione per il login con facebook


    const handleFacebookLogin = facebookLoginHandler();


    







    return (
           
    <>
    
    {handlePopStatus()}


 

        <div className="log_content_container">

            <div className={`login_container ${isSignup ? 'signup-state' : 'login-state'}`}>

                <div className="input_section">

                    <div className="top_content">
                        <h1>{isSignup ? "Accedi" : "Registrati"}</h1>
                        <div className="p_content">
                            <p>{isSignup ? "Non hai un account?" : "Hai già un account?"}</p><p className="registrati" onClick={switchMode}>{isSignup ? "Registrati" : "Accedi"}</p>
                        </div>

                    </div>



                    <div className='input_container'>
                        {!isSignup && (

                            <div className='username_content'>
                               

                                


                                <div className="username_input" id='surname_input'>
                                    
                                    <input type="text" className='Username' name="Username" placeholder=""  value={username} onChange={(e) => setUsername(e.target.value)}  required/>
                                    <label htmlFor='Username' className='input_label'>Username</label>
                                    <img src={Username_icon} alt="" />
                                </div>
                       



    
                            </div>

                            

                        )}


                        <div className="email_content">
                            

                            <div className="email_input">

                                <input type="email" name="email" placeholder="" value={email} onChange={(e) => setEmail(e.target.value)} required pattern="example@mailexample.com"/>
                                <label htmlFor='email' className='input_label'>Email</label>
                                <img src={Email_icon} alt="" />
                            </div>
                        </div>

                        <div className="password_content">
                            
                            <div className="password_input">

                                <input type={visiblePassword ? "text" : "password"} name="password" placeholder="" value={password_hash} onChange={(e) => setPassword(e.target.value)} required/>
                                <label htmlFor='password' className='input_label'>Password</label>
                                <img src={visiblePassword ? Password_view_icon: Password_icon} alt="" onClick={() => setVisiblePassword(!visiblePassword)}/>
                            </div>

                            <a href="##">
                                <p>{isSignup ? 'Password dimenticata?' : ''}</p>
                            </a>

                        </div>

                    </div>



                    <button className="login_button" onClick={handleSubmit}><p>{isSignup ? "Accedi" : "Registrati"}</p></button>

                        <div className='shortCut_button'>
                                <p>o usa </p>
                            <div className='Line'></div>

                        </div>
                    <div className='googApp_button_section'>
                        
                        <div className='googApp_button_container'>
                
                            <button className='google_button' onClick={handleGoogleLogin}>
                                <img src={Google_icon}/>
                                <p>Google</p>    
                            </button>

                            {/* <button className='apple_button'>
                                    <img src={Apple_icon}/>
                                    <p>Usa Apple</p>  
                            </button> */}

                            <button className='apple_button' onClick={handleFacebookLogin}>
                                    <img src={Facebook_icon}/>
                                    <p>Facebook</p>  
                            </button>

                            {/* <button className='apple_button'>
                                    <img src={Microsoft_icon}/>
                                    <p>Usa Microsoft</p>  
                            </button> */}


                        </div>        
            

                    </div>

                </div>

                <div className={`svg_section ${isSignup ? 'signup-state' : 'login-state'}`}>
                    <h1>{isSignup ? 'È bello rivederti' : 'Benvenuto'}</h1>
                    <div className='svg_container'>
                        {isSignup ? (
                            <img className='LogIn_svg' src={LogIn_svg}/>
                        ) : (
                            <img className='SignUp_svg' src={SignUp_svg}/>
                        )}
                    </div>

                </div>
                
            </div>


        </div>
     

       
        
    </>
    )
}


export default Log_component;