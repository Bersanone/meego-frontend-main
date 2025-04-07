import {  useState,useEffect } from "react";



//funzione per l'aggiornamento del auth token



export function TokenRefresh() {

    const [error, setError] = useState<string | null>(null);


    useEffect(() =>{

        async function refreshToken() {
            try{


                    const response = await fetch('http://localhost:3000/api/users/auth/refreshToken', {
                        method:'GET',
                        credentials: 'include',
                        headers: {
                            'Content-Type': 'application/json',
                        },


                    }

                );

                if(response.ok){
                    console.log("Token aggiornato con successo.");
                }else{
                    console.error("Errore durante l'aggiornamento del token di autenticazione, effettuare il login.");
                    setError("Errore durante l'aggiornamento del token di autenticazione, effettuare il login.");
                }

             

            }catch(error) {
                console.error("Errore durante il refresh del token:", error);
        }
    }

    refreshToken();



    //intervallo di 15 minuti per l'aggiornamento del token

    const interval = setInterval(() => {
        refreshToken();
    }, 14 * 60 * 1000); // 14 minuti in millisecondi


    return () => clearInterval(interval); // Pulisce l'intervallo quando il componente viene smontato


    },[]);

    return { error };

}