import { useState } from "react";

import Header from "../../../componenti/headers/header_1/header";

import '../reset_password.css'

function Input_reset_pw(){


    //interfaccia per i dati di autenticazione

    interface resetData {
        newPassword: string;
        confirmPassword: string;
    }

    
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isPasswordVisible, _setIsPasswordVisible] = useState(false);

    const handle_submit = async() =>{

        const resetData: resetData = {
            newPassword: newPassword,
            confirmPassword: confirmPassword,
        };


        //endpoint per il reset della password

       try { 

        const token = new URLSearchParams(window.location.search).get('token');
        
        const endpoint = `http://localhost:3000/api/users/recovery/reset_password/${token}`;


        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(resetData),
         
        });


        if (response.ok) {
            console.log("Password reset successfully.");
        }

        else {
            console.error("Error resetting password:", response.statusText);
        }

       







       }catch(error) {
            console.error("Errore durante il reset della password:", error);
        }



    }




    return(
        <>
          <Header/>

        <div className='Pop_bg_rp'>

            <div className='Pop_Container_rp'>
                    
                    <h1> Password dimenticata?</h1>

                    <p>
                        Nessun problema, compila i seguenti campi e reimpostala.
                    </p>

                    <div className='Pop_input_rp'>
                    <input type={isPasswordVisible ? "text" : "password"} placeholder="Nuova Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                    <input type={isPasswordVisible ? "text" : "password"} placeholder="Conferma Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                    

                    <div className='Pop_button'>
                        <button className='Button1' onClick={handle_submit}>Conferma</button>
                        

                    </div>
            </div>
        </div>
        </>
    )
}


export default Input_reset_pw;
