import './email_verification.css';

import { EmailVerification } from '../../Hooks/vereficationEmail';

import Logo_svg from './Logo.svg';


export default function EmailVerificationPage() {

    const {verificationStatus} = EmailVerification();

    return (
        <>
            <div className='emailCheck_container'>

                <div className='emailCheck_text'>

                    {verificationStatus === 'loading' && (
                        <h1>Verifica in corso...</h1>
                    )}
                    
                    {verificationStatus === 'success' && (
                        <>
                            <img src={Logo_svg} />
                           <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_1150_1523" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="75" height="75">
                                <rect x="0.932129" y="0.0880127" width="74" height="74" fill="#D9D9D9"/>
                                                </mask>
                                <g mask="url(#mask0_1150_1523)">
                                <path d="M50.1113 67.9214L37.0071 54.8172L41.3238 50.5006L50.1113 59.2881L67.5321 41.8672L71.8488 46.1839L50.1113 67.9214ZM37.9321 34.0047L62.5988 18.5881H13.2654L37.9321 34.0047ZM37.9321 40.1714L13.2654 24.7547V55.5881H29.1446L35.3113 61.7547H13.2654C11.5696 61.7547 10.1179 61.1509 8.91021 59.9433C7.70257 58.7356 7.09875 57.2839 7.09875 55.5881V18.5881C7.09875 16.8922 7.70257 15.4405 8.91021 14.2328C10.1179 13.0252 11.5696 12.4214 13.2654 12.4214H62.5988C64.2946 12.4214 65.7463 13.0252 66.954 14.2328C68.1616 15.4405 68.7654 16.8922 68.7654 18.5881V32.0006L62.5988 38.1672V24.7547L37.9321 40.1714Z" fill="white"/>
                                </g>
                            </svg> 

                            <h1>Email verificata con Successo</h1>
                            <div>
                            <p>L'email è stata verificata con successo.</p>
                            <p>Verrai reindirizzato alla homepage di Meego tra qualche secondo. </p>
                            </div>
                        </>
                    )}
                    
                    {verificationStatus === 'error' && (
                        <>
                            <img src={Logo_svg} />
                            <h1>Verifica email fallita</h1>
                            <div>
                            <p>Qualcosa è andato sotrto durante la verifica email.</p>
                            <p>Premi sul pulsante qui sotto per riprovare. </p>
                            </div>
                            <button className='Button1' onClick={() => window.location.reload()}>Invia un'altra email</button>
                        </>
                    )}
                </div>  


            </div>
        
        </>

    )

}

